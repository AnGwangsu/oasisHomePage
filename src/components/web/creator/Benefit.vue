<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <full-page ref="fullpage" :option="options" id="fullpage">
                    <v-layout class="section">
                        <v-flex style="height:100%">
                            <v-flex><Header/></v-flex>
                            <v-layout align-center class="benfit_1">
                                <v-flex class="pa-15">
                                    <v-flex class="ml-15 mb-10" style="font-size:70px;font-weight:600">OASIS MEDIA</v-flex>
                                    <v-flex class="ml-15" style="font-size:45px;font-weight:600">여러분의 꿈을 실현 시켜드릴</v-flex>
                                    <v-flex class="ml-15 mb-15" style="font-size:45px;font-weight:600">가장 최적의 방법</v-flex>
                                    <v-flex md2 lg1 class="ml-15 py-2" style="font-size:20px;border: 1px solid #000000;text-align:center;cursor:pointer">더보기 〉</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="section benfit_2">
                       <v-flex style="color:#fff">
                            <v-layout align-center style="height:100%">
                                <v-flex style="text-align:center;font-size:40px;font-weight:600">
                                    <v-flex class="mb-10">MANAGEMENT</v-flex>
                                    <v-flex>크리에이터 맞춤 솔루션을 제공합니다.</v-flex>
                                </v-flex>
                            </v-layout>
                            <v-layout class="px-15" align-center style="font-size:30px;position:absolute;bottom:10%;width:100%">
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>데이터에 기반한</v-flex>
                                    <v-flex>채널 컨설팅 및 피드백 제공</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>트렌드 분석을 통한</v-flex>
                                    <v-flex>콘텐츠 아이디어 제공</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>크리에이터</v-flex>
                                    <v-flex>콜라보 기회 제공</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section benfit_3">
                        <v-flex style="color:#fff">
                            <v-layout align-center style="height:100%">
                                <v-flex style="text-align:center;font-size:40px;font-weight:600">
                                    <v-flex class="mb-10">PRODUCTION</v-flex>
                                    <v-flex>오직 여러분이 원하는 광고를 제작 합니다.</v-flex>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center class="px-15" style="font-size:30px;position:absolute;bottom:10%;width:100%">
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>스튜디오 대관</v-flex>
                                    <v-flex>및 장비 지원</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>콘텐츠 제작 지원</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                <v-flex style="text-align:center">
                                    <v-flex>자막 번역</v-flex>
                                    <v-flex>언어 서비스 지원</v-flex>
                                </v-flex>
                                <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section benfit_4">
                        <v-flex style="height:100%;display:flex;flex-direction:column;color:#fff">
                            <v-flex style="height:75%;flex:1">
                                <v-layout align-center style="height:70%">
                                    <v-flex style="text-align:center;font-size:40px;font-weight:600">
                                        <v-flex class="mb-10">BUSINESS</v-flex>
                                        <v-flex>오아시스는 비즈니스 환경을 조성합니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                                <v-layout align-center class="px-15" style="font-size:30px;position:absolute;bottom:30%;width:100%">
                                    <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                    <v-flex style="text-align:center">
                                        <v-flex>브랜디드/PPL</v-flex>
                                        <v-flex>광고 대행</v-flex>
                                    </v-flex>
                                    <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                    <v-flex style="text-align:center">
                                        <v-flex>브랜드 채널 출연 및</v-flex>
                                        <v-flex>오프라인 행사</v-flex>
                                        <v-flex>참여 기회 제공</v-flex>
                                    </v-flex>
                                    <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                    <v-flex style="text-align:center">
                                        <v-flex>커머스</v-flex>
                                        <v-flex>연계 기회 제공</v-flex>
                                    </v-flex>
                                    <v-flex style="height:1px; border:2px dashed #fff"></v-flex>
                                </v-layout>
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
import Header from '@/components/web/common/Header_black'
import Footer from '@/components/web/common/Footer'
export default {
    components:{
        Header,
        Footer
    },
    data() {
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                anchors: ['page1', 'page2', 'page3','page4'],
            },
        }
    },
    methods:{
        afterLoad(){
            console.log('event')
        }
    }
}
</script>

<style>
 .benfit_1{background-image:url('../../../assets/web/img/background/benefit_1.png'); background-size: 100% 100%;background-position: center;height:100%; min-width: 1300px;}
 .benfit_2{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/benefit_2.png'); background-size: 100% 100%;background-position: center;height:100%;position: relative;min-width: 1300px;}
 .benfit_3{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/benefit_3.png'); background-size: 100% 100%;background-position: center;height:100%;position: relative;min-width: 1300px;}
 .benfit_4{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../../../assets/web/img/background/benefit_4.png'); background-size: 100% 100%;background-position: center;height:100%;position: relative;min-width: 1300px;}
</style>