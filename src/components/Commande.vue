<template>
    <div id="commande">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-btn slot="activator"  top flat>
            <v-badge >
                <span slot="badge">{{this.comm.length}}</span>
                <v-icon
                        large
                        color="grey lighten-1"
                >
                    shopping_cart
                </v-icon>
            </v-badge>
            </v-btn>

            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Votre commande </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-toolbar-items>
                        <v-btn dark flat @click="dialog = false">Passer la commande</v-btn>
                    </v-toolbar-items>

                </v-toolbar>

                <v-list>
                    <v-subheader> Récapitulatif de vos entrées</v-subheader>
                    <template v-for="entree in comm" >
                    <v-list-tile>
                        <v-list-tile-content v-if="entree != '[]'" v-html="entree">

                        </v-list-tile-content>
                    </v-list-tile>
                    </template>
                </v-list>
            </v-card>

        </v-dialog>

    </div>
</template>

<script>
    export default {
        props : ['comm'],
        name: "Commande",
        data() {
            return {
                dialog: false
            }
        }

    }
</script>

<style scoped>

</style>