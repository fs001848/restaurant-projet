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
                                <input
                                        :value="[i.entree,i.prix, i.id, i.detail]"
                                        v-model="checkedEntrees"
                                        type="checkbox"
                                > </input>
                            </v-list-tile-action>

                           <v-list-tile-content >
                               <v-list-tile-title >
                                   {{i.entree}}
                               </v-list-tile-title>
                               <v-list-tile-sub-title>
                                   {{i.prix}} €<br>
                                   {{i.detail}}
                               </v-list-tile-sub-title>

                           </v-list-tile-content>

                           <v-list-tile-avatar >

                               <v-text-field
                                       v-model="boxes[i.id]"
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
                        <v-btn v-if="show" @click="annuler">Annuler</v-btn>
                    </div>
                </v-card>

            </v-flex>
        </v-layout>


    </div>
</template>

<script>

    export default {
        props: ['cuisine','comm','look'],
        name: "Entree",

        data() {
            return {
                checkbox: false,
                checkedEntrees: [],
                show: false,
                boxes: [1, 1, 1, 1, 1],


                list: {
                    American: [
                        {
                            entree: "Onion rings",
                            detail: "oignons frits",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Mini pizza",
                            detail:"mini pate à pain avec sauce tomate et fromage",
                            prix: "15",
                            id: 1
                        }

                    ],
                    Italian: [
                        {
                            entree: "Pasta pistou",
                            detail:"pates fraiches, basilic, ail",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Pasta carbonara",
                            detail: "pates fraiches, crème, jambon",
                            prix: "7",
                            id: 1
                        }
                    ],
                    Delicatessen: [
                        {
                            entree: " Mini Pork Mole Tacos",
                            detail:"tortilla au porc",
                            prix: "7",
                            id: 0
                        },
                        {
                            entree: "Flash fried Tuna Avocado Rolls",
                            detail: "avocat roulé et frit",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Sweet Sesame Chicken Lettuce Wraps",
                            detail:"galette au poulet et sesame",
                            prix: "7",
                            id: 2
                        },
                        {
                            entree: "Tomato and Mozarella Salad",
                            detail:"tomate, mozarella et salade",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Mini Smocked Chicken Tacos",
                            detail:"tortilla au poulet fumé",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Irish: [
                        {
                            entree: "Sausages",
                            detail:"saucisses",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Eggs",
                            detail:"oeufs",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Melted Butter Toast",
                            detail:"pain grillé au beurre fondu",
                            prix: "6",
                            id: 2
                        }
                    ],
                    Donuts: [
                        {
                            entree: "Chocolate Donut",
                            detail: "donut au chocolat",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Strawberry Donut",
                            detail: "donut à la fraise",
                            prix: "5",
                            id: 1
                        },
                        {
                            entree: "Caramel Donut",
                            detail: "donut au caramel",
                            prix: "4",
                            id: 2
                        },
                        {
                            entree: "Yogurt Donut",
                            detail: "donut au yaout",
                            prix: "5",
                            id: 3
                        }
                    ],
                    Chicken: [
                        {
                            entree: "Spicy Fried Chicken",
                            detail:"poulet épicé frit",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Cheesy Fried Chicken",
                            detail:"poulet frit au fromage",
                            prix: "9",
                            id: 1
                        },
                        {
                            entree: "Roasted Chicken",
                            detail:"poulet roti",
                            prix: "8",
                            id: 2
                        },
                        {
                            entree: "Chicken Soup",
                            detail:"soupe au poulet",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Melted Creamy Chicken",
                            detail:"poulet mixé",
                            prix: "9",
                            id: 4
                        }
                    ],
                    Chinese: [
                        {
                            entree: "Fried Rice",
                            detail:"riz frit",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Fried Noodles",
                            detail:"nouilles fits",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Caramel Pork",
                            detail:"porc au caramel",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: " Nems",
                            detail:"galette frit au poulet",
                            prix: "5",
                            id: 3
                        },
                        {
                            entree: "Shrimp Fritters",
                            detail:"pate à beignet",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Ice Cream, Gelato, Yogurt, Ices': [
                        {
                            entree: "Chocolate Ice Cream",
                            detail:"glace au chocolat",
                            prix: "5",
                            id: 0
                        },
                        {
                            entree: "Vanilla Ice Cream",
                            detail:"glace à la vanille",
                            prix: "4",
                            id: 1
                        },
                        {
                            entree: "Lemon Ice Cream",
                            detail:"glace au citron",
                            prix: "5",
                            id: 2
                        },
                        {
                            entree: "Strawberry Ice Cream",
                            detail:"glace à la fraise",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Caramel Ice Cream",
                            detail:"glace au caramel",
                            prix: "5",
                            id: 4
                        }
                    ],

                    Pizza: [
                        {
                            entree: "Pizza Reine",
                            detail:"pizza champignon jambon fromage",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Pizza 4 saisons",
                            detail:"pizza aubergine artichot fromage",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Pizza 4 fromages",
                            detail:"pizza mozarella chevre roquefort parmesan",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Pizza Fruits de Mer",
                            detail:"pizza crevette moule",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Pizza 4 Viandes",
                            detail:"pizza saucisse viande hachée jambon lardon",
                            prix: "10",
                            id: 4
                        }
                    ],
                    'Pizza/Italian': [
                        {
                            entree: "Pasta Napoli",
                            detail:"pates de naples",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Lasagna",
                            detail:"gratin pates bolognaise",
                            prix: "13",
                            id: 1
                        },
                        {
                            entree: "Pizza Margarita",
                            detail:"pizza sauce tomate fromage",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Pizza Calzone ",
                            detail:"chausson fromage jambon oeuf",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Pasta Pesto",
                            detail:"pates huile basilic",
                            prix: "6",
                            id: 4
                        }
                    ],
                    French: [
                        {
                            entree: "Huitres",
                            detail:"6 huites",
                            prix: "15",
                            id: 0
                        },
                        {
                            entree: "Baguette Sandwich",
                            detail:"baquette jambon beurre",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Boeuf Bourguignon",
                            detail:"boeuf cuit au vin",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Escargots",
                            detail:"escargots cuits au basilic",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Cuisses de Grenouilles",
                            detail:"cuit aux herbes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Continental: [
                        {
                            entree: "Buffalo Tenders",
                            detail:"steak de boeuf",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            detail:"calamar frit",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            detail:"poulet épicé",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            detail:"saumon fumé",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            detail:"pomme de terre rapée frit",
                            prix: "6",
                            id: 4
                        }
                    ],
                    "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": [
                        {
                            entree: "Spicy Latin rice",
                            detail:"riz épicé",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Latin toasts",
                            detail:"",
                            prix: "4",
                            id: 1
                        },
                        {
                            entree: "Chicken balls",
                            detail:"boulettes de poulet",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Curry Rice",
                            detail:"riz au curry",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Sorpresa Latina",
                            detail:"",
                            prix: "6",
                            id: 4
                        }
                    ],
                    German: [
                        {
                            entree: "Buffalo Tenders",
                            detail:"steak de boeuf",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            detail:"calamar frit",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            detail:"poulet épicé",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            detail:"saumon fumé",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            detail:"pomme de terre rapée frit",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Bagels/Pretzels': [
                        {
                            entree: "Salmon Bagel",
                            detail:"bagel au saumon",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Bacon Bagel",
                            detail:"bagel au bacon",
                            prix: "10",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Bagel",
                            detail:"bagel au poulet épicé",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Beef Bagel ",
                            detail:"bagel au boeuf",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Veggies Bagel",
                            detail:"bagel vegan",
                            prix: "7",
                            id: 4
                        }
                    ],
                    'Jewish/Kosher': [
                        {
                            entree: "Buffalo Tenders",
                            detail:"steak de boeuf",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            detail:"calamar frit",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            detail:"poulet épicé",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            detail:"saumon fumé",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            detail:"pomme de terre rapée frit",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Sandwiches/Salads/Mixed Buffet': [
                        {
                            entree: "Ranch Sandwich",
                            detail:"baguette boeuf",
                            prix: "9",
                            id: 0
                        },
                        {
                            entree: "Sea food Sanwich",
                            detail:"baguette moule crevette",
                            prix: "12",
                            id: 1
                        },
                        {
                            entree: "Moutain Sandwich",
                            detail:"baguette raclette",
                            prix: "10",
                            id: 2
                        },
                        {
                            entree: "Greek Salad",
                            detail:"baguette fromage frais",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Vegetables",
                            detail:"baguette auc légumes frais",
                            prix: "9",
                            id: 4
                        }
                    ],
                    'Café/Coffee/Tea': [
                        {
                            entree: "Expresso",
                            detail:"café très court",
                            prix: "1",
                            id: 0
                        },
                        {
                            entree: "Double Expresso",
                            detail:"café long",
                            prix: "2",
                            id: 1
                        },
                        {
                            entree: "Fit Tea",
                            detail:"thé vert",
                            prix: "3",
                            id: 2
                        },
                        {
                            entree: "Black Tea ",
                            detail:"thé noir",
                            prix: "2",
                            id: 3
                        },
                        {
                            entree: "Plan Tea",
                            detail:"thé",
                            prix: "6",
                            id: 4
                        }
                    ], 'Bakery': [
                        {
                            entree: "Croissant",
                            detail:"",
                            prix: "1",
                            id: 0
                        },
                        {
                            entree: "Baguette",
                            detail:"",
                            prix: "2",
                            id: 1
                        },
                        {
                            entree: "Pain au Chocolat",
                            detail:"",
                            prix: "1",
                            id: 2
                        },
                        {
                            entree: "Bakery Assortment",
                            detail:"",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Homemade Onion Pizza",
                            detail:"pizza oignon",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Mexican: [
                        {
                            entree: "Ensaladas",
                            detail:"",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            detail:"calamar",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Jamon Iberico Tapas",
                            detail:"jambon coupé finement",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            detail:"saumon fumé",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            detail:"pomme de terre rapée ",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Steak: [
                        {
                            entree: "Lamb Steak",
                            detail:"",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Pork Steak",
                            detail:"steak jambon",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Beef Steak",
                            detail:"steak de boeuf",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Fish Steak ",
                            detail:"poisson frit",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Chicken Steak",
                            detail:"steak poulet",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Polish: [
                        {
                            entree: "Polish Gazpacho",
                            detail:"",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Goulash",
                            detail:"",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Pickles Polish Soup",
                            detail:"",
                            prix: "6",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            detail:"",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            detail:"pomme de terre frit",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Caribbean: [
                        {
                            entree: "Praws",
                            detail:"",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Caribbean Chicken",
                            detail:"poulet des caraibes",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Soup",
                            detail:"soupe épicée",
                            prix: "6",
                            id: 2
                        },
                        {
                            entree: "Caribbean Salad ",
                            detail:"salade des caraibes",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Caribbean Toast",
                            detail:"",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Turkish: [
                        {
                            entree: "Kanouga",
                            detail:"",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Melemen",
                            detail:"",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Güvec",
                            detail:"",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Halka Tatlisi ",
                            detail:"",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Irmik Tatlisi",
                            detail:"",
                            prix: "6",
                            id: 4
                        }
                    ], Spanish: [
                        {
                            entree: "Tortillas",
                            detail:"",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Croquetas de Jamon",
                            detail:"",
                            prix: "7",
                            id: 1
                        },
                        {
                            entree: "Patatas Bravas",
                            detail:"",
                            prix: "5",
                            id: 2
                        },
                        {
                            entree: "Tapas Jamon Iberico",
                            detail:"",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Tapas Roasted Salmon ",
                            detail:"",
                            prix: "8",
                            id: 4
                        }
                    ], "Hamburgers": [
                        {
                            entree: "Bacon Burger",
                            detail:"burger au bacon",
                            prix: "13",
                            id: 0
                        },
                        {
                            entree: "Chicken Burger",
                            detail:"burger poulet",
                            prix: "13",
                            id: 1
                        },
                        {
                            entree: "Fish Burger",
                            detail:"burger au poisson",
                            prix: "12",
                            id: 2
                        },
                        {
                            entree: "Cheese Burger",
                            detail:"burger double fromage",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potatoes",
                            detail:"burger galette de pomme de terre",
                            prix: "6",
                            id: 4
                        }
                    ]

                }
            }
        },
        methods : {
            ajout() {

                var i = '';
                for(i in this.checkedEntrees){
                    this.checkedEntrees[i].push(this.boxes[this.checkedEntrees[i][2]]);
                    if (this.boxes[this.checkedEntrees[i][2]] > 0){
                        this.comm.push(this.checkedEntrees[i])}};

                var btn = document.getElementById('btnComm');
                btn.disabled = true ;
                console.log('LEN :'+ this.boxes);
                this.show = true

            },
            annuler(){

                var i = 0 ;

                for (i= this.checkedEntrees.length ; i > 0 ; i--){

                    this.comm.pop();
                    this.checkedEntrees.pop()

                }
                var btn = document.getElementById('btnComm');
                btn.disabled = false ;
                this.show = false;
            }
        }
    }

</script>

<style scoped>

</style>