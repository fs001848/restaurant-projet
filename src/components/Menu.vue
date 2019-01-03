<template>
    <div id="menu-restaurant">
        <v-btn v-on:click="show = !show" id="menuBtn" color="primary">MENU</v-btn>

            <div v-if="show">
            <v-layout row >
                <v-flex xs12 sm4 offset-sm3>
                    <div v-for="menu in menus" v-if='menu.cuisine == cuisine'>
                    <v-card >
                        <v-img :src="menu.picture" max-height="300px">
                        </v-img>
                        <v-card-title primary-title>
                            <div >
                                <div class="headline"> Menu du jour </div>
                                <p> {{menu.entree}} // {{menu.plat}} // {{menu.dessert}} </p>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn  v-on:click="see = !see" color="secondary">AUTRES ENTREES</v-btn>

                        </v-card-actions>
                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
            <app-entree-menu v-if="see" :cuisine="cuisine" :comm="comm"></app-entree-menu>
            </div>



    </div>
</template>

<script>

import Entree from './Entree.vue';

    export default {
        props : ['cuisine','comm'],

        data() {
            return {
                menus : [
                    {cuisine : "American", picture:"src/assets/american.jpg", entree:"Onion rings", plat: "Hamburger of the day", dessert: "Milshake"},
                    {cuisine : "Italian",picture:"src/assets/autre.jpg", entree: "Pasta", plat: "Pizza", dessert: 'Tiramisu'},
                    {cuisine : "Delicatessen", picture:"src/assets/delicatessen.jpg", entree:"Chef salad", plat: "Cheese and delicatessen assortment", dessert: "Maple Bacon Beignets"},
                    {cuisine : "Irish", picture:"src/assets/irish.jpg", entree:"Roast lamb sandwich", plat: "Corned Beef and seasoned cabbage topped with cream cheese", dessert: "Irish coffee"},
                    {cuisine : "Donuts", picture:"src/assets/donuts.jpg", entree:"Mini Bagels Assortment", plat: "Bagel of the Day", dessert: "Chocolate Donut"},
                    {cuisine : "Chicken", picture:"src/assets/chicken.jpg", entree:"Pieces of Fried Chicken", plat: "Roasted Chicken", dessert: "Ice Cream"},
                    {cuisine : "Chinese", picture:"src/assets/chinese.jpg", entree:"Nems Assortment", plat: "Fried Noodles", dessert: "Coco Rolls"},
                    {cuisine : "Ice Cream, Gelato, Yogurt, Ices", picture:"src/assets/ice-cream.jpg", entree:"Salty frozen yogurt", plat: "Salad of the Day", dessert: "Ice Cream"},
                    {cuisine : "Pizza", picture:"src/assets/pizza.jpg", entree:"Little Salad", plat: "Pizza Chef", dessert: "Nutella Pizza"},
                    {cuisine : "Pizza/Italian", picture:"src/assets/pizza-italian.jpg", entree:"Pasta", plat: "Pizza Chef", dessert: "Tiramisu"},
                    {cuisine : "French", picture:"src/assets/french.jpg", entree:"Escargots", plat: "Frog Legs", dessert: "Croissants"},
                    {cuisine : "Continental", picture:"src/assets/continental.jpg", entree:"Sea Food Assortment", plat: "Roasted Beef and Vegetables", dessert: ""},
                    {cuisine : "Latin (Cuban, Dominican, Puerto Rican, South & Central American)", picture:"src/assets/latin.jpg", entree:"Little Salad", plat: "Fajitas", dessert: "Ice Cream"},
                    {cuisine : "German", picture:"src/assets/german.jpg", entree:"Goulash Soup", plat: "Sauerkraut and Sausages", dessert: "Apple Strudel"},
                    {cuisine : "Bagels/Pretzels", picture:"src/assets/bagel.jpg", entree:"Bagel", plat: "Bretzel", dessert: "Surprise Drink"},
                    {cuisine : "Jewish/Kosher", picture:"src/assets/jewish.jpg", entree:"Egg Rolls", plat: "Golden King Pita Bread", dessert: "Apple Pie"},
                    {cuisine : "Sandwiches/Salads/Mixed Buffet", picture:"src/assets/sandwich.jpg", entree:"Ceasar Salad", plat: "Chicken Sandwich", dessert: "Chocolate Toasts"},
                    {cuisine : "Café/Coffee/Tea", picture:"src/assets/coffee.jpg", entree:"Tea", plat: "Coffee", dessert: "Biscuits"},
                    {cuisine : "Bakery", picture:"src/assets/bakery.jpg", entree:"Croissant", plat: "Pain au chocolat", dessert: "La baguette"},
                    {cuisine : "Mexican", picture:"src/assets/mexican.jpg", entree:"Mexican Salad", plat: "Burrito", dessert: "Churros"},
                    {cuisine : "Steak", picture:"src/assets/steak.jpg", entree:"Salad", plat: "Steak, French Fries and Vegetables", dessert: "Melting Chocolate Cake"},
                    {cuisine : "Polish", picture:"src/assets/polish.jpg", entree:"Salmon Rolls", plat: "Kielbasa and Cabbage Soup", dessert: "Polish Roll"},
                    {cuisine : "Caribbean", picture:"src/assets/caribbean.jpg", entree:"Crab Soufflé", plat: "Trinidad Chicken Stew", dessert: "Ginger Cake"},
                    {cuisine : "Turkish", picture:"src/assets/turkish.jpg", entree:"Chicken Stewers", plat: "Turkish Meatballs", dessert: "Pudding"},
                    {cuisine : "Spanish", picture:"src/assets/spanish.jpg", entree:"Tapas", plat: "Paella", dessert: "Churros"},
                    {cuisine : "Hamburgers", picture:"src/assets/hamburgers.jpg", entree:"Soda", plat: "Burger and Fries", dessert: "Milshake"}



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

    }

</script>
