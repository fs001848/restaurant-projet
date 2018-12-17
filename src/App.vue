<template>
  <div id="app">
    <v-app id="inspire">
      <div>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Gestionnaire des restaurants</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">

          <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" top right large color="primary" class="mb-2">Ajouter un restaurant</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Nouveau Restaurant</span>
              </v-card-title>

              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>

                    <v-text-field v-model="editedItem.name" label="Nom restaurant"></v-text-field>
                    <v-text-field v-model="editedItem.cuisine" label="Cuisine"></v-text-field>
                  </v-layout>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="close">Annuler</v-btn>
                <v-btn color="blue darken-1" flat @click="save">Valider</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-text-field
            v-model="nomRecherche"
            v-on:input="getRestaurantsFromServer()"
            append-icon="search"
            label="Rechercher"
            single-line
            hide-details
          ></v-text-field>

        </v-toolbar-items>
      </v-toolbar>



      <v-data-table
        :headers="headers"
        :items="restaurants"
        class="elevation-1"
      >

        <template slot="items" slot-scope="props">

          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.cuisine }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editRestaurant(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>

        </template>
      </v-data-table>
      </div>
    </v-app>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      dialog: false,
      selected: "",
      headers: [
        {
          text: 'Restaurants (nom)',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        {text: 'Cuisine', value: 'cuisine', sortable: true},
        {text: 'Actions', value: 'name', sortable: false}
      ],
      restaurants: [{
        name: 'café de Paris',
        cuisine: 'Française',
      },
        {
          name: 'Sun City Café',
          cuisine: 'Américaine',
        },
        {
          name: 'Shi sho',
          cuisine: 'Asiatique',
        },
        {
          name: 'Que bellissima',
          cuisine: 'Italienne',
        },
        {
          name: 'Hola',
          cuisine: 'Espagnol',
        },
        {
          name: 'Göten',
          cuisine: 'Allemande',
        }
      ],
      defaultItem: {
        name: '',
        cuisine: ''
      },
      nbRestaurants: 0,
      nbPagesDeResultats: 0,
      nom: '',
      cuisine: '',
      page: 0,
      pagesize: 30,
      nomRecherche: "",
      editedIndex: -1,
      editedItem: {
        name: '',
        cuisine: ''
      }
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nouveau Restaurant' : 'Modifier Restaurant'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.getRestaurantsFromServer();
  },
  mounted() {
    console.log("AVANT AFFICHAGE");
    this.getRestaurantsFromServer();
  },
  methods : {
    getRestaurantsFromServer() {
      let url = "http://localhost:8080/api/restaurants?page=" +
        this.page +
        "&pagesize=" + this.pagesize +
        "&name=" + this.nomRecherche;

      // ARROW FUNCTIONS PRESERVENT LE THIS !!!
      fetch(url)
        .then((responseJSON) => {
          responseJSON.json()
            .then((responseJS) => {
              // Maintenant res est un vrai objet JavaScript
              console.log("restaurants récupérés");
              this.restaurants = responseJS.data;
              this.nbRestaurants = responseJS.count;
              this.nbPagesDeResultats = Math.ceil(this.nbRestaurants/this.pagesize);
              if (this.page > this.nbPagesDeResultats){
                this.page = 0;
              }
            });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    debounceRecherche(){
      var run = () =>{
        this.getRestaurantsFromServer();
        console.log("wait 300ms");
      };
      var deb = _.debounce(run,300);
      deb();
    },
    editRestaurant (item) {
      this.editedIndex = this.restaurants.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true
    },
    deleteItem (item) {
      console.log(item._id + " " + item.name);
      let choix = confirm('Voulez vous vraiment supprimer le restaurant :\n'+item.name);
      if (choix) {
        console.log("on supprime");
        let url = "http://localhost:8080/api/restaurants/" + item._id;

        fetch(url, {
          method: "DELETE",
        })
          .then((responseJSON) => {
            responseJSON.json()
              .then((res) =>{
                // Maintenant res est un vrai objet JavaScript
                console.log(res.msg);
                this.getRestaurantsFromServer();
              });
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      else {
        console.log("on ne supprime pas");
      }
    },
    close () {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.getRestaurantsFromServer();
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        let url = "http://localhost:8080/api/restaurants/" + this.editedItem._id;
        let form = new FormData();
        form.append("_id",this.editedItem._id);
        form.append("nom",this.editedItem.name);
        form.append("cuisine",this.editedItem.cuisine);
        fetch(url, {
          method: "PUT",
          body: form
        })
          .then((responseJSON) =>{
            responseJSON.json()
              .then((res) =>{
                afficheReponsePUT(res);
              });
          })
          .catch(function (err) {
            console.log(err);
          });
        console.log("on modifie");
      } else {
        console.log("EXIST : " +this.editedItem._id +" "+ this.editedItem.name+" "+this.editedItem.cuisine);

        // On envoie une requête POST au serveur
        let url = "http://localhost:8080/api/restaurants";
        // On crée le formulaire
        let form = new FormData();
        form.append("nom",this.editedItem.name);
        form.append("cuisine",this.editedItem.cuisine);

        fetch(url, {
          method:"POST",
          body: form
        })
          .then((responseJSON) => {
            responseJSON.json()
              .then((responseJS) => {
                // Maintenant res est un vrai objet JavaScript
                console.log(responseJS.msg);
              });
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      this.close();

    }

  }
}

</script>

