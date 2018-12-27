<template>
    <div id="menu-restaurant">
        <v-btn v-on:click="show = !show" id="menuBtn" color="primary">MENU</v-btn>
        <v-app id="inspire" v-if="show">
            <v-layout row >
                <v-flex xs12 sm4 offset-sm3>
                    <v-card>
                        <v-img src="src/assets/american.jpg" max-height="300px">
                        </v-img>
                        <v-card-title primary-title>
                            <div v-for="menu in menus" v-if='menu.cuisine == cuisine'>
                                <div class="headline"> Menu du jour </div>
                                <p> {{menu.entree}} // {{menu.plat}} // {{menu.dessert}} </p>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn  v-on:click="see = !see" color="secondary">AUTRES ENTREES</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-app>
        <app-entree-menu v-if="see" :cuisine="cuisine"></app-entree-menu>


    </div>
</template>

<script>

import Entree from './Entree.vue';

    export default {
        props : ['cuisine'],

        data() {
            return {
                menus : [
                    {cuisine : "American", picture:"src/assets/american.jpg", entree:"Onion rings", plat: "Hamburger of the day", dessert: "Milshake"},
                    {cuisine : "Italian", entree: "Pasta", plat: "Pizza", dessert: 'Tiramisu'}
                ],
                show: false,
                see:false
            }
        },
        watch : {

        },
        components : {
            'app-entree-menu' : Entree
        },
        methods: {
            ajouterImage(source) {

                document.getElementById("menuBtn").remove();
                var img = document.createElement('img');
                img.src = source;
                img.height = "100";
                document.getElementById("menu").appendChild(img);
            },
            ajouterBtnEntree() {
                var div = document.createElement('div');
                div.id = "entrees";
                document.getElementById("menu").appendChild(div);

                var btn = document.createElement('v-btn');
                btn.id = "btn-entree";
                var t = document.createTextNode("Entrées");
                btn.appendChild(t);
                document.getElementById("entrees").appendChild(btn);
                console.log(document.getElementById("entrees"));

            },
            ajouterMenu(entree, plat, dessert) {


            },

            findMenu(item) {
                switch (item) {

                    case "American" :
                        this.ajouterImage("src/assets/american.jpg");
                        this.ajouterBtnEntree();
                        break;

                    case "Delicatessen" :
                        this.ajouterImage("src/assets/delicatessen.jpg");
                        break;

                    case "Ice Cream, Gelato, Yogurt, Ices" :
                        this.ajouterImage("src/assets/ice-cream.jpg");
                        this.ajouterBtnEntree();
                        break;

                    case "Irish" :
                        this.ajouterImage("src/assets/irish.jpg");
                        this.ajouterBtnEntree();
                        break;

                    case "Donuts" :
                        this.ajouterImage("src/assets/donuts.jpg");
                        this.ajouterBtnEntree();
                        break;

                    case "Chicken" :
                        this.ajouterImage("src/assets/chicken.jpg");
                        this.ajouterBtnEntree();
                        break;

                    case "Chinese" :
                        this.ajouterImage("src/assets/chinese.jpg");
                        this.ajouterBtnEntree();
                        break;

                    default :
                        this.ajouterImage("src/assets/autre.jpg");
                        this.ajouterBtnEntree();
                        break;

                }

            }
        }
    }

</script>
