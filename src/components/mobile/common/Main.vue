<template>
    <v-container fluid style="padding:0;">
        <HeaderBlack v-if="blackAppbar==true" />
        <v-app-bar v-else app flat color="rgba(255,255,255,0)">
            <v-layout class="mx-5">
                <v-flex>
                    <v-layout align-center>
                        <v-flex><img @click="$refs.fullpage.api.moveTo(1)" src="@/assets/mobile/img/icon/logo_white.png" width="20" height="25"></v-flex>
                        <v-flex style="text-align:right"><v-icon @click="dialog=true" style="cursor:pointer" color="#fff">mdi-menu</v-icon></v-flex>
                        <v-dialog id="dialog" v-model="dialog" transition="dialog-top-transition" width="100%" content-class="header_dialog">
                            <v-card style="border-radius:0" width="100%" height="194px">
                                <v-layout>
                                    <v-flex class="mx-8 my-5">
                                        <v-flex>
                                            <v-layout>
                                                <v-flex><img src="@/assets/mobile/img/icon/logo_black.png" width="18" height="22"></v-flex>
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
        <v-layout>
            <v-flex style="height:95%">
                <full-page ref="fullpage" id="fullpage" :options="options">
                    <v-layout align-center justify-center class="section main_1">
                        <v-flex style="text-align:center">
                            <v-flex class="mb-5" style="font-size:26px;font-weight:500">"가능성을 만들고 실현화 한다"</v-flex>
                            <v-flex style="font-size:14px;letter-spacing:1px;">
                                <v-flex>오아시스미디어 전략적인 컨설팅과</v-flex>
                                <v-flex>새로운 아이디어로 다양한 광고,</v-flex>
                                <v-flex>프로모션을 진행할 수 있는</v-flex>
                                <v-flex>종합 마케팅 솔루션 대행사 입니다.</v-flex>
                            </v-flex>
                            <v-layout class="mb-5" style="position:absolute; bottom:0;width:100%;text-align:center">
                                <v-flex class="scroll_container">
                                    <v-flex class="scroll_icon"><v-icon color="#fff">mdi-arrow-down</v-icon></v-flex>
                                    <v-flex class="scroll_icon" style="font-size:10px">SCROLL</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section main_2">
                        <v-flex>
                            <v-layout>
                                <v-flex style="text-align:center">
                                    <v-flex class="mb-8" style="font-size:26px">기획부터 촬영까지</v-flex>
                                    <v-flex class="mb-10" style="font-size:26px">'ALL IN ONE PRODUCTION'</v-flex>
                                    <v-flex class="my-15">
                                        <v-layout class="mb-5">
                                            <v-flex xs5 class="mr-5" style="text-align:right"><img src="@/assets/mobile/img/icon/main_2_1.png"></v-flex>
                                            <v-flex xs7 style="text-align:left">
                                                <v-flex xs6>브랜드 영상</v-flex>
                                                <v-flex xs4 style="text-align:center">기획</v-flex>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout class="mb-5">
                                            <v-flex xs5 class="mr-5" style="text-align:right"><img src="@/assets/mobile/img/icon/main_2_2.png"></v-flex>
                                            <v-flex xs7 style="text-align:left">
                                                <v-flex xs6>브랜드 영상</v-flex>
                                                <v-flex xs4 style="text-align:center">촬영</v-flex>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout class="mb-5">
                                            <v-flex xs5 class="mr-5" style="text-align:right"><img src="@/assets/mobile/img/icon/main_2_3.png"></v-flex>
                                            <v-flex xs7 style="text-align:left">
                                                <v-flex xs6>브랜드 영상</v-flex>
                                                <v-flex xs4 style="text-align:center">제작</v-flex>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout class="mb-5">
                                            <v-flex xs5 class="mr-5" style="text-align:right"><img src="@/assets/mobile/img/icon/main_2_4.png"></v-flex>
                                            <v-flex xs7 style="text-align:left">
                                                <v-flex xs6>브랜드 영상</v-flex>
                                                <v-flex xs4 style="text-align:center">홍보</v-flex>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section" style="height:100%">
                        <v-flex style="position:relative;height:100%">
                            <v-layout style="height:50%">
                                <v-flex xs6 style="height:100%" class="main_3_1"></v-flex>
                                <v-flex xs6 style="height:100%" class="main_3_2"></v-flex>
                            </v-layout>
                            <v-layout style="height:50%">
                                <v-flex xs6 style="height:100%" class="main_3_3"></v-flex>
                                <v-flex xs6 style="height:100%" class="main_3_4"></v-flex>
                            </v-layout>
                            <v-flex style="position:absolute;top:40%;text-align:center;width:100%;color:#fff;z-index:999">
                                <v-flex class="mb-10" style="font-size:26px">PARTNER CREATOR</v-flex>
                                <v-flex style="font-size:20px">
                                    <v-flex class="mb-5">1000여명의 인플루언서와 함께합니다</v-flex>
                                    <v-flex @click="moveService(2)">크리에이터 보러가기</v-flex>
                                </v-flex>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section main_4" style="height:100%">
                        <v-flex>
                            <v-flex>
                                <v-flex class="mb-10 px-6" style="font-size:26px;font-weight:600">PARTNERS</v-flex>
                                <v-flex class="px-6 mb-5" style="font-size:12px;font-weight:600">오아시스 미디어는 다양한 분야의 브랜드, 서비스, 공공기관과 함께하고 있습니다.</v-flex>
                                <v-flex class="px-6" style="height:100%">
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner1.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner2.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner3.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner4.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner5.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner6.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner7.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner8.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner9.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner10.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner11.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner12.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner13.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner14.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner15.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner16.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner17.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner18.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner19.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner20.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                    <v-layout class="mb-5" align-center>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner21.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner22.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner23.png" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex xs3 class="mx-2">
                                            <img src="@/assets/mobile/img/partners/partner24.png" width="100%" height="100%">
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </full-page>
                <Footer/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import HeaderBlack from '@/components/mobile/common/Header_black'
import Footer from '@/components/mobile/common/Footer'
export default {
    components:{
        HeaderBlack,
        Footer
    },
    data() {
        return {
            options:{
                afterLoad:this.afterLoad,
                autoScrolling:false
            },
            blackAppbar:false,
            dialog:false
        }
    },
    mounted(){
        if(this.$route.params.number){
            this.$refs.fullpage.api.moveTo(4)
        }
    },
    methods:{
        afterLoad(_,destination){
            this.blackAppbar=false
            this.trigger=destination.index
            if(destination.index===3){
                this.blackAppbar=true
            }
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
                this.$refs.fullpage.api.moveTo(4)
            }else if(number ==4){
                this.$router.push({
                    path:'/m/work'
                })
            }
            this.dialog=false
        }
    }
}
</script>

<style>
    .main_2 .fp-tableCell{display: flex; align-items: flex-end;width:100%}
    .main_4 .fp-tableCell{display: flex; align-items:center;width:100%}
    .fp-tableCell{display: flex; align-items: center;width:100%}
    .main_1{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_1.png');background-size:cover;background-position: center; color:#fff;position: relative;}
    .main_2{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_2.png');background-size:cover;background-position: center; color:#fff;position: relative;}
    .main_3_1{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_3_1.png');background-size:cover;background-position: center;}
    .main_3_2{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_3_2.png');background-size:cover;background-position: center;}
    .main_3_3{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_3_3.png');background-size:cover;background-position: center;}
    .main_3_4{background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/main_3_4.png');background-size:cover;background-position: center;}
    .scroll_container{margin-top: 20px;}
    .scroll_icon{animation: motion 0.6s linear 0s infinite alternate;margin-top: 0;}
    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    }
</style>