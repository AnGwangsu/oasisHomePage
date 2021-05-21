<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <HeaderWhite v-if="change==true" />
        <HeaderBlack v-else/>
        <v-layout class="mt-12" style="flex:1">
            <v-flex>
                <v-flex class="pb-10" style="background:#303030;color:#fff;">
                    <v-flex class="pt-3" style="text-align:center">
                        <v-flex class="mb-3" style="font-size:25px;font-weight:600">WELFARE</v-flex>
                        <v-flex class="mb-5" style="font-size:20px">일 할 때도,<br>놀 때도 부지런 하자!!</v-flex>
                    </v-flex>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_1.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">경조사 경조금 및 화환지급</v-flex>
                            <v-flex style="opacity:.7">직계가족 경조사 및 축하금 지원</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_2.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">탄력 근무제 실시</v-flex>
                            <v-flex style="opacity:.7">본인이 원하는 시간에<br>출 · 퇴근이 가능한 자유로운 회사</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_3.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">음료 및 커피 무한 제공</v-flex>
                            <v-flex style="opacity:.7">사내에 음료&커피&간식이<br>무제한 제공 되며<br>티타임으로 친밀감을 높여 보세요</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_4.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">프로젝트 성과 보상제</v-flex>
                            <v-flex style="opacity:.7">프로젝트 성공시 성과금 지급</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_5.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">직무관련 교육지원</v-flex>
                            <v-flex style="opacity:.7">자기개발에 필요한<br>교육비 무한 지원</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_6.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">스페셜 선물지급</v-flex>
                            <v-flex style="opacity:.7">임직원 생일축하 및 명절선물 지급</v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center class="mb-8" justify-center>
                        <v-flex xs3 class="mr-7" style="text-align:right"><img src="@/assets/mobile/img/work/work_1_7.png" width="50" height="50"></v-flex>
                        <v-flex xs7 style="font-size:15px">
                            <v-flex style="font-weight:500">무상 도서지원</v-flex>
                            <v-flex style="opacity:.7">자기 성장을 위한 도서는 금액과 상관없이 무한 지원 해드립니다</v-flex>
                        </v-flex>
                    </v-layout>

                    <v-layout class="mb-3" justify-center>
                        <v-flex xs10 style="font-size:26px;font-weight:600">OFFICE</v-flex>
                    </v-layout>
                    <v-layout justify-center>
                        <v-flex xs7 style="border-bottom:1px solid #fff;"></v-flex>
                        <v-flex xs3></v-flex>
                    </v-layout>
                    <v-layout class="mt-5" justify-center>
                        <v-flex xs10 >
                            <v-carousel hide-delimiters height="280">
                                <v-carousel-item v-for="(item,i) in carousel" :key="i" :src="item" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-layout>
                    <v-layout class="mt-10 mb-5" justify-center>
                        <v-flex xs6 style="font-size:26px;font-weight:600">LOCATION</v-flex>
                        <v-flex xs4></v-flex>
                    </v-layout>
                    <v-layout class="mb-5" justify-center>
                        <v-flex xs10>
                            <vue-daum-map
                            :appKey="appKey"
                            :center.sync="center"
                            :level.sync="level"
                            :mapTypeId="mapTypeId"
                            :libraries="libraries"
                            @load="onLoad"
                            @update:center="center=$event"
                            class="daum_map" 
                            />
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center>
                        <v-flex xs10 style="font-size:20px">
                            <v-flex>서울 강남구 역삼로 247</v-flex>
                            <v-flex>홍진빌딩 3층</v-flex>
                            <v-flex>247, Yeoksam-ro, Gangnam-gu,<br>Seoul, Republic of Korea</v-flex>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex class="py-10">
                    <v-layout justify-center>
                        <v-flex xs10>
                            <v-flex class="mb-10" style="text-align:center;font-size:26px;font-weight:600">RECRUIT</v-flex>
                            <v-flex>
                                <v-flex class="pb-3" style="border-bottom:1px solid #000;font-size:15px;font-weight:600">오아시스 미디어 채용공고</v-flex>
                                <v-layout class="py-3" style="font-size:12px;border-bottom:1px solid #000;">
                                    <v-flex>[채용]오아시스미디어 채용공고_사람인</v-flex>
                                    <v-flex style="text-align:right"><span class="pa-1" style="background:#6621D8;border-radius:11px;color:#fff">공고확인하기</span></v-flex>
                                </v-layout>
                                <v-layout class="py-3" style="font-size:12px;border-bottom:1px solid #000;">
                                    <v-flex>[채용]오아시스미디어 채용공고_잡코리아</v-flex>
                                    <v-flex style="text-align:right"><span class="pa-1" style="background:#6621D8;border-radius:11px;color:#fff">공고확인하기</span></v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
/* global kakao */
import HeaderBlack from '@/components/mobile/common/Header_black'
import HeaderWhite from '@/components/mobile/common/Header_white'
import Footer from '@/components/mobile/common/Footer'
import VueDaumMap from 'vue-daum-map'
import config from '../../../config'
export default {
    components:{
        HeaderBlack,
        HeaderWhite,
        Footer,
        VueDaumMap
    },
    data() {
        return {
            change:false,
            carousel:[
                require('../../../assets/mobile/img/work/work_2_1.png'),
                require('../../../assets/mobile/img/work/work_2_2.png'),
                require('../../../assets/mobile/img/work/work_2_3.png'),
                require('../../../assets/mobile/img/work/work_2_4.png')
            ],
            appKey: config.appKey,
            center: {lat:37.49794514999162, lng:127.0431446387925}, // 지도의 중심 좌표
            level: 2, // 지도의 레벨(확대, 축소 정도),
            mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
            libraries: [], // 추가로 불러올 라이브러리
            map: null // 지도 객체. 지도가 로드되면 할당됨.
        }
    },
    created(){
        window.addEventListener('scroll',this.changeAppbar)
    },
    methods:{
        changeAppbar(){
            if(window.scrollY>45){
                this.change=true
            }else{
                this.change=false
            }
        },
        onLoad(map){
            this.map = map;
            var markerPosition = new kakao.maps.LatLng(37.49794514999162,127.0431446387925)
            var marker = new kakao.maps.Marker({
                position: markerPosition,
            })
            marker.setMap(map)
        },
    }
}
</script>

<style>
    .daum_map{height: 282px; width: 100%;}
</style>