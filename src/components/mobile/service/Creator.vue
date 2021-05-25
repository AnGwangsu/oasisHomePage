<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <HeaderWhite v-if="change==true" />
        <HeaderBlack v-else/>
        <v-layout class="mt-13" style="flex:1">
            <v-flex>
                <v-layout align-center style="height:279px">
                    <v-flex xs6 class="pa-8">
                        <v-flex>
                            <v-flex class="mb-5" style="color:#741DD8;font-size:21px;font-weight:600">
                                <v-flex>MAKE YOUR</v-flex>
                                <v-flex>CONTENTS</v-flex>
                            </v-flex>
                            <v-flex style="font-size:20px;font-weight:600">HI PRAE</v-flex>
                            <v-layout class="mt-5">
                                <v-flex xs5><a href="https://www.instagram.com/baboprae/?hl=ko"><img src="@/assets/mobile/img/icon/instagram.png" width="30" height="30"></a></v-flex>
                                <v-flex xs7><a href="https://www.youtube.com/channel/UCqayQickf1r8kjZyay4proQ"><img src="@/assets/mobile/img/icon/youtube.png" width="30" height="30"></a></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                    <v-flex xs6 class="creator_1"></v-flex>
                </v-layout>
                <v-layout align-center style="background:#303030">
                    <v-flex style="color:#fff;text-align:center;">
                        <v-flex class="mt-10">
                            <v-flex class="mb-3" style="font-size:21px">PARTNER CREATOR</v-flex>
                            <v-flex style="font-size:14px">1000여명의 인플루언서와 함께합니다</v-flex>
                        </v-flex>
                        <v-flex>
                            <v-carousel hide-delimiters >
                                <v-carousel-item>
                                    <v-layout class="mx-14 mt-15" style="background:#fff;height:70%">
                                        <v-flex>
                                            <v-flex class="my-3"><img src="@/assets/mobile/img/background/creator_2_1.png"></v-flex>
                                            <v-flex class="mb-4" style="font-size:20px;font-weight:600;color:#000">Ling cheng</v-flex>
                                            <v-flex style="border-top:1px solid #707070;">
                                                <v-layout align-center style="height:100%;font-size:14px;background:#E8E8E8">
                                                    <v-flex xs6>
                                                        <a href="https://www.youtube.com/user/linglingchengg" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070;r">
                                                                <v-flex style="text-align:right" class="mr-3"><img class="mt-1" src="@/assets/mobile/img/icon/youtube.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="text-align:left;font-size:14px">25.7 M</v-flex>
                                                            </v-layout>
                                                        </a>
                                                    </v-flex>
                                                   <v-flex xs6>
                                                       <a href="https://www.instagram.com/lingchengg/" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070">
                                                                <v-flex><img class="mt-1" src="@/assets/mobile/img/icon/instagram.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="font-size:14px">linchengg</v-flex>
                                                            </v-layout>
                                                       </a>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-layout class="mx-14 mt-15" style="background:#fff;height:70%">
                                        <v-flex>
                                            <v-flex class="my-3"><img src="@/assets/mobile/img/background/creator_2_2.png"></v-flex>
                                            <v-flex class="mb-4" style="font-size:20px;font-weight:600;color:#000">Jang Hongan</v-flex>
                                            <v-flex style="border-top:1px solid #707070;">
                                                <v-layout align-center style="height:100%;font-size:14px;background:#E8E8E8">
                                                    <v-flex xs6>
                                                        <a href="https://www.youtube.com/channel/UCxBGXqprdTZnr6eHaLNvjTQ" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070;r">
                                                                <v-flex style="text-align:right" class="mr-3"><img class="mt-1" src="@/assets/mobile/img/icon/youtube.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="text-align:left;font-size:14px">33.4 M</v-flex>
                                                            </v-layout>
                                                        </a>
                                                    </v-flex>
                                                   <v-flex xs6>
                                                       <a href="https://www.instagram.com/lingchengg/" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070">
                                                                <v-flex><img class="mt-1" src="@/assets/mobile/img/icon/instagram.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="font-size:14px">janghongan</v-flex>
                                                            </v-layout>
                                                       </a>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-layout class="mx-14 mt-15" style="background:#fff;height:70%">
                                        <v-flex>
                                            <v-flex class="my-3"><img src="@/assets/mobile/img/background/creator_2_3.png"></v-flex>
                                            <v-flex class="mb-4" style="font-size:20px;font-weight:600;color:#000">린고</v-flex>
                                            <v-flex style="border-top:1px solid #707070;">
                                                <v-layout align-center style="height:100%;font-size:14px;background:#E8E8E8">
                                                    <v-flex xs6>
                                                        <a href="https://www.youtube.com/channel/UCpNQDTAdRo-cQ5sn-jLcXEA" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070;r">
                                                                <v-flex style="text-align:right" class="mr-3"><img class="mt-1" src="@/assets/mobile/img/icon/youtube.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="text-align:left;font-size:14px">11.1 M</v-flex>
                                                            </v-layout>
                                                        </a>
                                                    </v-flex>
                                                   <v-flex xs6>
                                                       <a href="https://www.instagram.com/takenbymr/" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070">
                                                                <v-flex><img class="mt-1" src="@/assets/mobile/img/icon/instagram.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="font-size:14px">takenbymr</v-flex>
                                                            </v-layout>
                                                       </a>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-layout class="mx-14 mt-15" style="background:#fff;height:70%">
                                        <v-flex>
                                            <v-flex class="my-3"><img src="@/assets/mobile/img/background/creator_2_4.png"></v-flex>
                                            <v-flex class="mb-4" style="font-size:20px;font-weight:600;color:#000">Meichang</v-flex>
                                            <v-flex style="border-top:1px solid #707070;">
                                                <v-layout align-center style="height:100%;font-size:14px;background:#E8E8E8">
                                                    <v-flex xs6>
                                                        <a href="https://www.youtube.com/channel/UCXqtMJC2xCAWPATo4919dTA" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070;r">
                                                                <v-flex style="text-align:right" class="mr-3"><img class="mt-1" src="@/assets/mobile/img/icon/youtube.png" width="28" height="28"></v-flex> 
                                                                <v-flex style="text-align:left;font-size:14px">25.8 M</v-flex>
                                                            </v-layout>
                                                        </a>
                                                    </v-flex>
                                                   <v-flex xs6>
                                                       <a href="https://www.instagram.com/meichannnnn/" style="text-decoration:none;color:#000" target="_blank">
                                                            <v-layout align-center class="py-2" xs6 style="border-right:1px solid #707070">
                                                                <v-flex style="text-align:right"><img class="mt-1" src="@/assets/mobile/img/icon/instagram.png" width="28" height="28"></v-flex> 
                                                                <v-flex>meichannnnn</v-flex>
                                                            </v-layout>
                                                       </a>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout align-center class="creator_3" style="height:413px">
                    <v-flex>
                        <v-flex class="mb-10" style="text-align:center;font-size:20px">
                            <v-flex class="mb-5">MANAGEMENT</v-flex>
                            <v-flex>크리에이터 맞춤 솔루션을 제공합니다</v-flex>
                        </v-flex>
                        <v-flex>
                            <v-layout align-center style="font-size:12px;text-align:center">
                                <v-flex>데이터에 기반한<br>채널 컨설팅 및<br>피드백 제공</v-flex>
                                <v-flex>트렌드 분석을 통한<br>콘텐츠 아이디어 제공</v-flex>
                                <v-flex>크리에이터<br>콜라보 기회 제공</v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout align-center class="creator_4" style="height:413px">
                    <v-flex>
                        <v-flex class="mb-10" style="text-align:center;font-size:20px">
                            <v-flex class="mb-5">PRODUCTION</v-flex>
                            <v-flex>오직 여러분이 원하는 광고를 제작 합니다</v-flex>
                        </v-flex>
                        <v-flex>
                            <v-layout align-center style="font-size:12px;text-align:center">
                                <v-flex>스튜디오 대관<br>및 장비 지원</v-flex>
                                <v-flex>콘텐츠 제작 지원</v-flex>
                                <v-flex>자막 번역<br>언어 서비스 지원</v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout align-center class="creator_5" style="height:413px">
                    <v-flex>
                        <v-flex class="mb-10" style="text-align:center;font-size:20px">
                            <v-flex class="mb-5">BUSINESS</v-flex>
                            <v-flex>오아시스는 비즈니스 환경을 조성합니다</v-flex>
                        </v-flex>
                        <v-flex>
                            <v-layout align-center style="font-size:12px;text-align:center">
                                <v-flex>브랜디드 · PPL<br>광고 대행</v-flex>
                                <v-flex>브랜드 채널 출연 및<br>오프라인 행사<br>참여 기회 제공</v-flex>
                                <v-flex>커머스<br>연계 기회 제공</v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>


<script>
import HeaderBlack from '@/components/mobile/common/Header_black'
import HeaderWhite from '@/components/mobile/common/Header_white'
import Footer from '@/components/mobile/common/Footer'
export default {
    components:{
        HeaderBlack,
        HeaderWhite,
        Footer
    },
    data() {
        return {
            change:false
        }
    },
    created(){
        window.addEventListener('scroll',this.changeAppbar)
    },
    methods:{
        changeAppbar(){
            if(window.scrollY>380){
                this.change=true
            }else{
                this.change=false
            }
        }
    }
}
</script>

<style>
    .creator_1{background-image:url('../../../assets/mobile/img/background/creator_1.png');background-size: cover; background-position: center;height:100%}
    .creator_3{background-image:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/creator_3.png');background-size:cover; background-position: center;color: #fff;}
    .creator_4{background-image:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/creator_4.png');background-size:cover; background-position: center;color: #fff;}
    .creator_5{background-image:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('../../../assets/mobile/img/background/creator_5.png');background-size:cover; background-position: center;color: #fff;}
</style>