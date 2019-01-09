<template>
    <div id="details">
        <v-btn v-on:click="show = !show" id="detailsBtn" color="primary">DETAILS</v-btn>
            <div v-if="show">
            <v-layout row >
                <v-flex xs12 sm4 offset-sm3>
                    <v-card>
                        <v-card-title primary-title>

                                <div class="headline"> Quelques infos ...</div>

                        </v-card-title>
                        <v-card-text>
                            <p> Le restaurant {{nom}} vous propose une cuisine {{cuisine}} qui régalera petits et grands. </p>
                            <p>Adresse : {{bat}} {{rue}} {{zip}} {{quartier}}</p>
                        </v-card-text>

                    </v-card>
                </v-flex>
            </v-layout>
            </div>


    </div>
</template>

<script>
    export default {
        props : ['nom', 'cuisine', 'bat', 'rue', 'zip', 'quartier'],
        name: "Details",

        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>

</style>