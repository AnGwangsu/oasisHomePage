<template>
    <v-app-bar absolute color="rgba(255,255,255,0)" flat>
            <v-layout class="mt-5" align-center justify-end>
                <v-flex lg4 class="mt-5"><img src="@/assets/img/logo/header_logo.png"></v-flex>
                <v-flex lg7 style="color:#fff;font-size:20px;font-weight:600">
                    <v-layout align-center justify-end>
                        <v-flex class="mx-10" style="cursor:pointer">ABOUT</v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">OASIS MEDIA</v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @mouseover="business=true" @mouseleave="business=false">BUSINESS</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @mouseover="business=true" @mouseleave="business=false" v-if="business==true" class="mt-1 transition-fast-in-fast-out white--text" style="position:absolute;font-size:14px">
                                        BRAND CHANNEL
                                    </v-flex>
                                </v-expand-transition>
                            </v-hover>
                        </v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @mouseover="creator=true" @mouseleave="creator=false">CREATOR</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @mouseover="creator=true" @mouseleave="creator=false" v-if="creator==true" class="mt-1 transition-fast-in-fast-out white--text" style="position:absolute;font-size:14px">
                                        <v-flex class="mb-1">LIST</v-flex>
                                        <v-flex @click="movePage(5)">BENEFITS</v-flex>
                                    </v-flex>
                                </v-expand-transition>
                            </v-hover>
                        </v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">PARTNERS</v-flex>
                        <v-flex class="mx-10" style="cursor:pointer">
                            <v-flex @mouseover="work=true" @mouseleave="work=false">WORK</v-flex>
                            <v-hover>
                                <v-expand-transition>
                                    <v-flex @mouseover="work=true" @mouseleave="work=false" v-if="work==true" class="mt-1 transition-fast-in-fast-out white--text" style="position:absolute;font-size:14px">
                                        <v-flex class="mb-1">WELFARE</v-flex>
                                        <v-flex class="mb-1">OFFICE</v-flex>
                                        <v-flex>RECRUIT</v-flex>
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
        movePage(number){
            if(number ==1){
                console.log('about')
            }else if(number ==2){
                console.log('oasis media')
            }else if(number == 3){
                console.log('business')
            }else if(number == 4){
                console.log('creator list')
            }else if(number == 5){
                this.$router.push({
                    path:'/creator/benefit'
                })
            }else if(number == 6){
                this.$router.push({
                    path:'/partners'
                })
            }else if(number == 7){
                console.log('work 1')
            }else if(number == 8){
                console.log('work 2')
            }else{
                console.log('work 3')
            }
        }
    }
}
</script>