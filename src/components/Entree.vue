<template>
    <div id="entree-menu">

        <v-layout row>
            <v-flex xs12 sm4 offset-sm3>
                <v-card >
                <v-card-title class="headline"> Voici les entrees</v-card-title>
                    <v-list two-line >
                       <v-list-tile
                               v-for="item in list"
                       :key="item.entree">

                           <v-list-tile-avatar>
                               <v-text-field

                                       :max="5"
                                       :min="0"
                                       class="mt-0"
                                       type="number"


                               ></v-text-field>
                           </v-list-tile-avatar>

                           <v-list-tile-content>
                               <v-list-tile-title >
                                   {{item.entree}}
                               </v-list-tile-title>
                               <v-list-tile-sub-title>
                                   {{item.prix}}
                               </v-list-tile-sub-title>

                           </v-list-tile-content>
                       </v-list-tile>

                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    export default {
        props : ['cuisine'],
        name: "Entree",
        data() {
            return {
                list: [
                    {entree : "Onion ring",
                        prix : "10€"},
                    {entree : "Mini pizza",
                        prix : "15€"}

                ]
            }
        }
    }

</script>

<style scoped>

</style>