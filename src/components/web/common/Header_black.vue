<template>
    <v-app-bar color="rgba(255,255,255,0)" flat prominent>
            <v-layout class="mt-5" align-center justify-end>
                <v-flex md3 lg4 class="mt-5"><img @click="moveHome" src="@/assets/web/img/logo/header_logo_1.png" style="cursor:pointer"></v-flex>
                <v-flex md8 lg7 style="font-size:18px;font-weight:600">
                    <v-layout align-center justify-end>
                        <v-flex @click="movePage(1)" class="mx-10" style="cursor:pointer">ABOUT</v-flex>
                        <v-flex @click="movePage(2)" class="mx-10" style="cursor:pointer">OASIS MEDIA</v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @click="movePage(3)" @mouseover="business=true" @mouseleave="business=false">BUSINESS</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @click="movePage(3)" @mouseover="business=true" @mouseleave="business=false" v-if="business==true" class="mt-1 transition-fast-in-fast-out" style="position:absolute;font-size:14px;">
                                        BRAND CHANNEL
                                    </v-flex>
                                </v-expand-transition>
                            </v-hover>
                        </v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @mouseover="creator=true" @mouseleave="creator=false">CREATOR</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @mouseover="creator=true" @mouseleave="creator=false" v-if="creator==true" class="mt-1 transition-fast-in-fast-out" style="position:absolute;font-size:14px">
                                        <v-flex @click="movePage(4)" class="mb-1">LIST</v-flex>
                                        <v-flex @click="movePage(5)">BENEFITS</v-flex>
                                    </v-flex>
                                </v-expand-transition>
                            </v-hover>
                        </v-flex>
                        <v-flex @click="movePage(6)" class="mx-10" style="cursor:pointer">PARTNERS</v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @click="movePage(7)" @mouseover="work=true" @mouseleave="work=false">WORK</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @click="movePage(7)" @mouseover="work=true" @mouseleave="work=false" v-if="work==true" class="mt-1 transition-fast-in-fast-out" style="position:absolute;font-size:14px">
                                        <v-flex @click="movePage(7)" class="mb-1">WELFARE</v-flex>
                                        <v-flex @click="movePage(7)" class="mb-1">OFFICE</v-flex>
                                        <v-flex @click="movePage(7)">RECRUIT</v-flex>
                                    </v-flex>
                                </v-expand-transition>
                            </v-hover>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            business:false,
            creator:false,
            work:false
        }
    },
    methods:{
        moveHome(){
            this.$router.push({
                path:'/'
            })
        },
        movePage(number){
            if(number ==1){
                this.$router.push({
                    name:'Landing',
                })
            }else if(number ==2){
                this.$router.push({
                    name:'Landing',
                    params:{
                        view:3
                    }
                })
            }else if(number == 3){
                this.$router.push({
                    path:'/business/brandChennel'
                })
            }else if(number == 4){
                this.$router.push({
                    path:'/creator/list'
                })
            }else if(number == 5){
                this.$router.push({
                    path:'/creator/benefit'
                })
            }else if(number == 6){
                this.$router.push({
                    path:'/partners'
                })
            }else{
                this.$router.push({
                    path:'/work'
                })
            }
        }    
    }
}
</script>