<template>
    <div id="commande">
        <v-dialog v-model="dialog" width="600" transition="dialog-bottom-transition">
            <v-btn slot="activator"  top flat>
            <v-badge >
                <span slot="badge">{{this.comm.filter(non).length}}</span>
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
                        <v-btn dark flat @click="panier">Passer la commande</v-btn>
                    </v-toolbar-items>

                </v-toolbar>
                <v-list>
                    <v-subheader> Récapitulatif de vos entrées</v-subheader>
                    <template v-for="entree in comm" v-if="entree[3] != 0">
                    <v-list-tile>
                        <v-list-tile-avatar>

                                {{entree[3]}}

                        </v-list-tile-avatar>
                        <v-list-tile-content >

                            <v-list-tile-title>
                                {{entree[0]}}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                {{entree[1]}} €
                            </v-list-tile-sub-title>

                        </v-list-tile-content>
                    </v-list-tile>
                        <v-divider
                        ></v-divider>
                    </template>
                    <v-subheader> Total</v-subheader>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-btn @click="addition">CALCUL</v-btn>

                        </v-list-tile-content>
                        <v-list-tile-content>
                            {{total}} €
                        </v-list-tile-content>
                    </v-list-tile>
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
                dialog: false,
                total : 0,
            }
        },
        methods : {
            addition() {
                var res = 0;
                var i = 0;
                for (i in this.comm){
                    res += (this.comm[i][1] * this.comm[i][2])
                }
                this.total = res
            },
            non(entree){
               return entree[3] != 0
            },
            panier() {
                this.dialog=false ;
                this.comm = [];
                alert('Merci de votre commande')
            }


        }



    }
</script>

<style scoped>

</style>