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
                                        :value="[i.entree,i.prix, i.id]"
                                        v-model="checkedEntrees"
                                        type="checkbox"
                                > </input>
                            </v-list-tile-action>

                           <v-list-tile-content >
                               <v-list-tile-title >
                                   {{i.entree}}
                               </v-list-tile-title>
                               <v-list-tile-sub-title>
                                   {{i.prix}} €
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
                            entree: "Onion",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Mini pizza",
                            prix: "15",
                            id: 1
                        }

                    ],
                    Italian: [
                        {
                            entree: "Pasta pistou",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Pasta carbonara",
                            prix: "7",
                            id: 1
                        }
                    ],
                    Delicatessen: [
                        {
                            entree: " Mini Pork Mole Tacos",
                            prix: "7",
                            id: 0
                        },
                        {
                            entree: "Flash fried Tuna Avocado Rolls",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Sweet Sesame Chicken Lettuce Wraps",
                            prix: "7",
                            id: 2
                        },
                        {
                            entree: "Tomato and Mozarella Salad",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Mini Smocked Chicken Tacos",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Irish: [
                        {
                            entree: "Sausages",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Eggs",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Melted Butter Toast",
                            prix: "6",
                            id: 2
                        }
                    ],
                    Donuts: [
                        {
                            entree: "Chocolate Donut",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Strawberry Donut",
                            prix: "5",
                            id: 1
                        },
                        {
                            entree: "Caramel Donut",
                            prix: "4",
                            id: 2
                        },
                        {
                            entree: "Yogurt Donut",
                            prix: "5",
                            id: 3
                        }
                    ],
                    Chicken: [
                        {
                            entree: "Spicy Fried Chicken",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Cheesy Fried Chicken",
                            prix: "9",
                            id: 1
                        },
                        {
                            entree: "Roasted Chicken",
                            prix: "8",
                            id: 2
                        },
                        {
                            entree: "Chicken Soup",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Melted Creamy Chicken",
                            prix: "9",
                            id: 4
                        }
                    ],
                    Chinese: [
                        {
                            entree: "Fried Rice",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Fried Noodles",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Caramel Pork",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: " Nems",
                            prix: "5",
                            id: 3
                        },
                        {
                            entree: "Shrimp Fritters",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Ice Cream, Gelato, Yogurt, Ices': [
                        {
                            entree: "Chocolate Ice Cream",
                            prix: "5",
                            id: 0
                        },
                        {
                            entree: "Vanilla Ice Cream",
                            prix: "4",
                            id: 1
                        },
                        {
                            entree: "Lemon Ice Cream",
                            prix: "5",
                            id: 2
                        },
                        {
                            entree: "Strawberry Ice Cream",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Caramel Ice Cream",
                            prix: "5",
                            id: 4
                        }
                    ],

                    Pizza: [
                        {
                            entree: "Pizza Reine",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Pizza 4 saisons",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Pizza 4 fromages",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Pizza Fruits de Mer",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Pizza 4 Viandes",
                            prix: "10",
                            id: 4
                        }
                    ],
                    'Pizza/Italian': [
                        {
                            entree: "Pasta Napoli",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Lasagna",
                            prix: "13",
                            id: 1
                        },
                        {
                            entree: "Pizza Margarita",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Pizza Calzone ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Pasta Pesto",
                            prix: "6",
                            id: 4
                        }
                    ],
                    French: [
                        {
                            entree: "Huitres",
                            prix: "15",
                            id: 0
                        },
                        {
                            entree: "Baguette Sandwich",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Boeuf Bourguignon",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Escargots",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Cuisses de Grenouilles",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Continental: [
                        {
                            entree: "Buffalo Tenders",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": [
                        {
                            entree: "Spicy Latin rice",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Latin toasts",
                            prix: "4",
                            id: 1
                        },
                        {
                            entree: "Chicken balls",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Curry Rice",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Sorpresa Latina",
                            prix: "6",
                            id: 4
                        }
                    ],
                    German: [
                        {
                            entree: "Buffalo Tenders",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Bagels/Pretzels': [
                        {
                            entree: "Salmon Bagel",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Bacon Bagel",
                            prix: "10",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Bagel",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Beef Bagel ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Veggies Bagel",
                            prix: "7",
                            id: 4
                        }
                    ],
                    'Jewish/Kosher': [
                        {
                            entree: "Buffalo Tenders",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Chicken Skewers",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    'Sandwiches/Salads/Mixed Buffet': [
                        {
                            entree: "Ranch Sandwich",
                            prix: "9",
                            id: 0
                        },
                        {
                            entree: "Sea food Sanwich",
                            prix: "12",
                            id: 1
                        },
                        {
                            entree: "Moutain Sandwich",
                            prix: "10",
                            id: 2
                        },
                        {
                            entree: "Greek Salad",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Vegetables",
                            prix: "9",
                            id: 4
                        }
                    ],
                    'Café/Coffee/Tea': [
                        {
                            entree: "Expresso",
                            prix: "1",
                            id: 0
                        },
                        {
                            entree: "Double Expresso",
                            prix: "2",
                            id: 1
                        },
                        {
                            entree: "Fit Tea",
                            prix: "3",
                            id: 2
                        },
                        {
                            entree: "Black Tea ",
                            prix: "2",
                            id: 3
                        },
                        {
                            entree: "Plan Tea",
                            prix: "6",
                            id: 4
                        }
                    ], 'Bakery': [
                        {
                            entree: "Croissant",
                            prix: "1",
                            id: 0
                        },
                        {
                            entree: "Baguette",
                            prix: "2",
                            id: 1
                        },
                        {
                            entree: "Pain au Chocolat",
                            prix: "1",
                            id: 2
                        },
                        {
                            entree: "Bakery Assortment",
                            prix: "6",
                            id: 3
                        },
                        {
                            entree: "Homemade Onion Pizza",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Mexican: [
                        {
                            entree: "Ensaladas",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Calamari Steak Strips",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Jamon Iberico Tapas",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Steak: [
                        {
                            entree: "Lamb Steak",
                            prix: "10",
                            id: 0
                        },
                        {
                            entree: "Pork Steak",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Beef Steak",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Fish Steak ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Chicken Steak",
                            prix: "7",
                            id: 4
                        }
                    ],
                    Polish: [
                        {
                            entree: "Polish Gazpacho",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Goulash",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Pickles Polish Soup",
                            prix: "6",
                            id: 2
                        },
                        {
                            entree: "Smoked Salmon Flatbread ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potato Croquetes",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Caribbean: [
                        {
                            entree: "Praws",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Caribbean Chicken",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Spicy Soup",
                            prix: "6",
                            id: 2
                        },
                        {
                            entree: "Caribbean Salad ",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Caribbean Toast",
                            prix: "6",
                            id: 4
                        }
                    ],
                    Turkish: [
                        {
                            entree: "Kanouga",
                            prix: "8",
                            id: 0
                        },
                        {
                            entree: "Melemen",
                            prix: "8",
                            id: 1
                        },
                        {
                            entree: "Güvec",
                            prix: "9",
                            id: 2
                        },
                        {
                            entree: "Halka Tatlisi ",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Irmik Tatlisi",
                            prix: "6",
                            id: 4
                        }
                    ], Spanish: [
                        {
                            entree: "Tortillas",
                            prix: "6",
                            id: 0
                        },
                        {
                            entree: "Croquetas de Jamon",
                            prix: "7",
                            id: 1
                        },
                        {
                            entree: "Patatas Bravas",
                            prix: "5",
                            id: 2
                        },
                        {
                            entree: "Tapas Jamon Iberico",
                            prix: "7",
                            id: 3
                        },
                        {
                            entree: "Tapas Roasted Salmon ",
                            prix: "8",
                            id: 4
                        }
                    ], "Hamburgers": [
                        {
                            entree: "Bacon Burger",
                            prix: "13",
                            id: 0
                        },
                        {
                            entree: "Chicken Burger",
                            prix: "13",
                            id: 1
                        },
                        {
                            entree: "Fish Burger",
                            prix: "12",
                            id: 2
                        },
                        {
                            entree: "Cheese Burger",
                            prix: "11",
                            id: 3
                        },
                        {
                            entree: "Potatoes",
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