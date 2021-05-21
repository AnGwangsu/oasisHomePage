<template>
    <v-container fluid style="padding:0;">
        <v-layout>
            <v-flex>
                <full-page ref="fullpage" id="fullpage1">
                    <v-layout class="section main_1">
                        <v-flex>
                            <v-app-bar absolute color="rgba(255,255,255,0)" flat prominent>
                                <v-layout class="mt-5" align-center justify-end>
                                    <v-flex md3 lg4 class="mt-5"><img src="@/assets/web/img/logo/header_logo.png" style="cursor:pointer"></v-flex>
                                    <v-flex md8 lg7 style="color:#fff;font-size:18px;font-weight:600">
                                        <v-layout align-center justify-end>
                                            <v-flex @click="$refs.fullpage.api.moveTo(1)" class="mx-10" style="cursor:pointer">ABOUT</v-flex>
                                            <v-flex ref="media" @click="$refs.fullpage.api.moveTo(3)" class="mx-10" style="cursor:pointer">OASIS MEDIA</v-flex>
                                            <v-flex class="mx-10" style="cursor:pointer">
                                                <v-flex @mouseover="business=true" @mouseleave="business=false" @click="movePage(3)">BUSINESS</v-flex>
                                                <v-hover>
                                                    <v-expand-transition>
                                                        <v-flex @click="movePage(3)" @mouseover="business=true" @mouseleave="business=false" v-if="business==true" class="mt-1 transition-fast-in-fast-out white--text" style="position:absolute;font-size:14px;height:40px">
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
                                                        <v-flex @click="movePage(7)" @mouseover="work=true" @mouseleave="work=false" v-if="work==true" class="mt-1 transition-fast-in-fast-out white--text" style="position:absolute;font-size:14px">
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
                            <v-flex style="text-align:center">
                                <v-flex class="mb-8" style="font-size:60px;font-weight:600">"가능성을 만들고 실현화 한다"</v-flex>
                                <v-flex>창의적인 컨텐츠 기획 개발 온-오프라인 광고 제작사 오아시스미디어 입니다.</v-flex>
                                <v-flex>전략적인 컨설팅과 새로운 아이디어로 브랜드 이미지와 정확한 타겟을 통한 다양한 광고,</v-flex>
                                <v-flex>프로모션을 진행할 수 있는 종합 마케팅 솔루션 대행사 입니다.</v-flex>
                            </v-flex>
                            <v-layout class="mb-5" style="position:absolute; bottom:0;width:100%;text-align:center">
                                <v-flex class="scroll_container">
                                    <v-flex class="scroll_icon"><v-icon color="#fff">mdi-arrow-down</v-icon></v-flex>
                                    <v-flex class="scroll_icon">SCROLL</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section main_2">
                        <v-flex>
                            <v-flex class="mr-10 mt-15" style="text-align:right;position:absolute; top:0;right:0">
                                <v-flex class="mt-15 mb-5" style="font-size:60px;font-weight:600">기획부터 촬영까지</v-flex>
                                <v-flex style="font-size:40px">'ALL IN ONE PRODUCTION'</v-flex>
                            </v-flex>
                            <v-layout justify-center class="mb-15" style="position:absolute; bottom:0;width:100%;font-size:25px">
                                <v-flex lg2>
                                    <v-flex><img src="@/assets/web/img/icon/icon1.png"></v-flex>
                                    <v-flex>브랜드 영상</v-flex>
                                    <v-flex>기획</v-flex>
                                </v-flex>
                                <v-flex lg2>
                                    <v-flex><img src="@/assets/web/img/icon/icon2.png"></v-flex>
                                    <v-flex>브랜드 영상</v-flex>
                                    <v-flex>활용</v-flex>
                                </v-flex>
                                <v-flex lg2>
                                    <v-flex><img src="@/assets/web/img/icon/icon3.png"></v-flex>
                                    <v-flex>브랜드 영상</v-flex>
                                    <v-flex>제작</v-flex>
                                </v-flex>
                                <v-flex lg2>
                                    <v-flex><img src="@/assets/web/img/icon/icon4.png"></v-flex>
                                    <v-flex>브랜드 영상</v-flex>
                                    <v-flex>홍보</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section">
                        <v-flex style="height:100%;">
                            <v-layout style="height:50%">
                                <v-flex xs6><img src="@/assets/web/img/background/section3_1.png" width="100%" height="100%"></v-flex>
                                <v-flex xs6 class="px-5 py-10" style="font-size:40px;font-weight:600">
                                    <v-flex>창의적인 아이디어와 트렌디 한 감성으로</v-flex>
                                    <v-flex>시청자와 광고주 모두가 만족하는 오아시스 미디어</v-flex>
                                </v-flex>
                            </v-layout>
                            <v-layout style="height:50%">
                                <v-flex xs6 class="px-5 py-10" style="font-size:40px;font-weight:600">
                                    <v-flex class="mb-15" style="text-align:center">다양한 영상 제작 경험을 통한 노하우</v-flex>
                                    <v-flex style="text-align:right;font-size:25px">
                                        <v-flex class="mb-7">지자체,관광지,행사<span class="ml-5">■</span></v-flex>
                                        <v-flex class="mb-7">기업,브랜드,제품,매장<span class="ml-5">■</span></v-flex>
                                        <v-flex class="mb-7">실시간LIVE방송<span class="ml-5">■</span></v-flex>
                                        <v-flex class="mb-7">APP 서비스<span class="ml-5">■</span></v-flex>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs6><img src="@/assets/web/img/background/section3_2.png" width="100%" height="100%"></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section">
                        <v-flex style="height:100%;display:flex;flex-direction:column">
                            <v-flex style="height:75%;flex:1">
                                <v-flex class="my-15" style="font-size:40px;text-align:center;font-weight:600">오아시스 미디어는 자체 생산 체제입니다</v-flex>
                                <v-layout justify-center class="my-10 px-15" style="font-size:30px;color:#fff">
                                    <v-flex md11 lg10>
                                        <v-layout align-center justify-space-between>
                                            <v-flex lg2>
                                                <v-layout align-center class="section4_1">
                                                    <v-flex style="text-align:center">자체제작</v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex lg2>
                                                <v-layout align-center class="section4_2">
                                                    <v-flex style="text-align:center">
                                                        <v-flex>빠른</v-flex>
                                                        <v-flex>커뮤니케이션</v-flex>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex lg2>
                                                <v-layout align-center class="section4_3">
                                                    <v-flex style="text-align:center">
                                                        <v-flex>제작기간</v-flex>
                                                        <v-flex>단축</v-flex>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex lg2>
                                                <v-layout align-center class="section4_4">
                                                    <v-flex style="text-align:center">
                                                        <v-flex>비용</v-flex>
                                                        <v-flex>감소</v-flex>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                                <v-flex  class="px-15 mt-15" style="font-size:18px;font-weight:600">
                                    <v-flex class="mb-5">오아시스 미디어는 모든 영상을 자체 제작하고 있습니다.</v-flex>
                                    <v-flex class="mb-5"> 클라이언트와 1:1 담당자를 배정하여 원활한 소통과 빠른 커뮤니케이션을 통한 기획부터 제작진행</v-flex>
                                    <v-flex class="mb-5">외주 용역 투입, 임대 장비 대여로 인해 발생하는 비용을 절감하고 클라이언트의 의도를 정확히 반영하여</v-flex>
                                    <v-flex class="mb-5">완벽한 영상을 제공하기 위해 직접 생산 체재로 운영되고 있습니다.</v-flex>
                                </v-flex>
                            </v-flex>
                            <Footer/>
                        </v-flex>
                    </v-layout>
                </full-page>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Footer from '@/components/web/common/Footer'
export default {
    components:{
        Footer,
    },
    data() {
        return {
            business:false,
            creator:false,
            work:false
        }
    },
    mounted(){
        if(this.$route.params.view){
            console.log('왜안돼')
            this.$refs.media.click()
        }
    },
    methods:{
        movePage(number){
            if(number == 3){
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

<style>
    .fp-tableCell{display: flex; align-items: center;width:100%}
    .main_1{background-image:url('../../../assets/web/img/background/section1.png'); background-size: 100% 100%;background-position: center;color:#fff;position: relative;}
    .main_2{background-image: url('../../../assets/web/img/background/section2.png'); background-size: 100% 100%;background-position: center;color:#fff;position: relative;text-align: center;}
    .section4_1{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/section4_1.png'); background-size: 100% 100%;background-position: center;width:250px;height:250px;border-radius: 70%;overflow: hidden;}
    .section4_2{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/section4_2.png'); background-size: 100% 100%;background-position: center;width:250px;height:250px;border-radius: 70%;overflow: hidden;}
    .section4_3{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/section4_3.png'); background-size: 100% 100%;background-position: center;width:250px;height:250px;border-radius: 70%;overflow: hidden;}
    .section4_4{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/section4_4.png'); background-size: 100% 100%;background-position: center;width:250px;height:250px;border-radius: 70%;overflow: hidden;}
    .scroll_container{margin-top: 20px;}
    .scroll_icon{animation: motion 0.6s linear 0s infinite alternate;margin-top: 0;}
    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    }
</style>