<template>
    <div id="entree-menu">

        <v-layout row>
            <v-flex xs12 sm4 offset-sm3>
                <v-card >
                <v-card-title class="headline"> Voici les entrees</v-card-title>


                    <v-list two-line  >

                        <div v-for="(item, key) in list"
                             v-if='key == cuisine'

                        >

                       <v-list-tile
                              v-for="i in item"
                               :key="i.id"
                       >
                            <v-list-tile-action>
                                <v-checkbox
                                        :value="i.entree"
                                        v-model="checkedEntrees"
                                ></v-checkbox>
                            </v-list-tile-action>

                           <v-list-tile-content >
                               <v-list-tile-title >
                                   {{i.entree}}
                               </v-list-tile-title>
                               <v-list-tile-sub-title>
                                   {{i.prix}}
                               </v-list-tile-sub-title>

                           </v-list-tile-content>

                           <v-list-tile-avatar >

                               <v-text-field
                                       v-model="range[i.id]"
                                       :max="5"
                                       :min="0"
                                       class="mt-0"
                                       type="number"

                               ></v-text-field>

                           </v-list-tile-avatar>
                       </v-list-tile>

                        </div>
                    </v-list>
                    <div id="validation">
                    <v-btn id="btnComm" @click="ajout">Ajout panier</v-btn>
                        <v-btn v-if="show"> Voir mon panier </v-btn>
                        <v-btn v-if="show">Annuler</v-btn>
                    </div>
                </v-card>

            </v-flex>
        </v-layout>


    </div>
</template>

<script>

    export default {
        props: ['cuisine','comm','nbEntrees'],
        name: "Entree",

        data() {
            return {
                checkbox : false,
                checkedEntrees : [],
                show : false,
                range: [0, 5],

                list: {
                    American: [
                        {
                            entree: "Onion",
                            prix: "10€",
                            id: 0
                        },
                        {
                            entree: "Mini pizza",
                            prix: "15€",
                            id: 1
                        }

                    ],
                    Italian: [
                        {
                            entree: "Pasta pistou",
                            prix: "6€",
                            id: 0
                        },
                        {
                            entree: "Pasta carbonara",
                            prix: "7€",
                            id: 1
                        }
                    ]
                },

            }
        },
        methods : {
            ajout() {
                var i = '';
                for(i in this.checkedEntrees){
                    this.comm.push(this.checkedEntrees[i])};

                var btn = document.getElementById('btnComm');
                btn.disabled = true ;
                console.log("la commande :" + this.comm);
                this.show = true;

            }
        }
    }

</script>

<style scoped>

</style>