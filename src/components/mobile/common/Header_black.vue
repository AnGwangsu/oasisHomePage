<template>
    <v-app-bar app flat color="rgba(255,255,255,0)">
        <v-layout class="mx-5">
            <v-flex>
                <v-layout align-center>
                    <v-flex><img @click="moveHome" src="@/assets/mobile/img/icon/logo_black.png" width="20" height="25"></v-flex>
                    <v-flex style="text-align:right"><v-icon @click="dialog=true" style="cursor:pointer" color="#000">mdi-menu</v-icon></v-flex>
                    <v-dialog v-model="dialog" transition="dialog-top-transition" width="100%" content-class="header_dialog">
                        <v-card style="border-radius:0" width="100%" height="194px">
                            <v-layout>
                                <v-flex class="mx-8 my-5">
                                    <v-flex>
                                        <v-layout>
                                            <v-flex><img @click="moveHome" src="@/assets/mobile/img/icon/logo_black.png" width="18" height="22"></v-flex>
                                            <v-flex style="text-align:right"><v-icon style="cursor:pointer" color="#000">mdi-menu</v-icon></v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex class="mt-3" style="text-align:center;font-size:16px">
                                        <v-flex class="mb-2" @click="moveService(1)">BUSINESS</v-flex>
                                        <v-flex class="mb-2" @click="moveService(2)">CREATOR</v-flex>
                                        <v-flex class="mb-2" @click="moveService(3)">PARTNERS</v-flex>
                                        <v-flex @click="moveService(4)">WORK</v-flex>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-app-bar>
</template>


<script>
export default {
    data() {
        return {
            dialog:false
        }
    },
    methods:{
        moveHome(){
            this.$router.push({
                path:'/m'
            })
        },
        moveService(number){
            if(number==1){
                this.$router.push({
                    path:'/m/business'
                })
            }else if(number ==2){
                this.$router.push({
                    path:'/m/creator'
                })
            }else if(number ==3){
                this.$router.push({
                    name:'MobileHome',
                    params:{
                        number:4
                    }
                })
            }else if(number ==4){
                this.$router.push({
                    path:'/m/work'
                })
            }
        }
    }
}
</script>
