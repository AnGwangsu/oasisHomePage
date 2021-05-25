<template>
    <v-container fluid style="padding:0;height:100%">
        <v-layout style="height:100%">
            <v-flex>
                <Header/>
                <v-flex class="mt-8 work_wrap">
                    <v-flex class="py-5 px-15" style="background:#303030;color:#fff">
                        <v-flex class="mb-15" style="text-align:center;font-size:50px;font-weight:600">WELFARE</v-flex>
                        <v-layout class="mb-15" style="font-size:20px">
                            <v-flex style="font-size:30px;font-weight:600">
                                <v-flex>일 할 때도,</v-flex>
                                <v-flex>놀 때도 부지런 하자!!</v-flex>
                            </v-flex>
                            <v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">경조사 경조금 및 화환지급</v-flex>
                                    <v-flex style="opacity:.8;">직계가족 경조사 및 축하금 지원</v-flex>
                                </v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">탄력 근무제 실시</v-flex>
                                    <v-flex style="opacity:.8;">본인이 원하는 시간에</v-flex>
                                    <v-flex style="opacity:.8;">출 · 퇴근이 가능한 자유로운 회사</v-flex>
                                </v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">음료 및 커피 무한 제공</v-flex>
                                    <v-flex style="opacity:.8;">사내에 음료&커피&간식이</v-flex>
                                    <v-flex style="opacity:.8;">무제한 제공 되며</v-flex>
                                    <v-flex style="opacity:.8;">티타임으로 친밀감을 높여 보세요</v-flex>
                                </v-flex>
                            </v-flex>
                            <v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">프로젝트 성과 보상제</v-flex>
                                    <v-flex style="opacity:.8;">프로젝트 성공시 성과금 지급</v-flex>
                                </v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">직무관련 교육지원</v-flex>
                                    <v-flex style="opacity:.8;">자기개발에 필요한 교육비 무한 지원</v-flex>
                                </v-flex>
                                <v-flex class="mb-5">
                                    <v-flex style="font-weight:600">스페셜 선물지급</v-flex>
                                    <v-flex style="opacity:.8;">임직원 생일축하 및 명절선물 지급</v-flex>
                                </v-flex>
                                <v-flex>
                                    <v-flex style="font-weight:600">무상 도서지원</v-flex>
                                    <v-flex style="opacity:.8;">자기 성장을 위한 도서는 금액과 상관없이 무한 지원 해드립니다</v-flex>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                        <v-flex class="mb-15" style="text-align:center;font-size:50px;font-weight:600">OFFICE</v-flex>
                        <v-layout class="mb-10">
                            <v-flex xs6>
                                <v-carousel class="pa-15" hide-delimiters>
                                    <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                    reverse-transition="fade-transition"
                                    transition="fade-transition">  
                                    </v-carousel-item>
                                </v-carousel>
                            </v-flex>
                            <v-flex xs6>
                                <v-flex class="mr-15" style="text-align:center;font-size:23px"><v-icon size="30" color="#fff">mdi-map-marker</v-icon>서울특별시 강남구 역삼로247 (역삼동,홍진빌딩 3층)</v-flex>
                                <v-flex class="pa-6" style="height:100%">
                                    <vue-daum-map
                                    :appKey="appKey"
                                    :center.sync="center"
                                    :level.sync="level"
                                    :mapTypeId="mapTypeId"
                                    :libraries="libraries"
                                    @load="onLoad"
                                    @update:center="center=$event"
                                    class="daum_map_web" 
                                    />
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        <v-flex class="my-15" style="text-align:center;font-size:50px;font-weight:600">RECRUIT</v-flex>
                        <v-flex class="mx-15 pb-5" style="font-size:35px;font-weight:600;border-bottom:2px solid #000">오아시스 미디어 채용공고</v-flex>
                        <v-layout align-center class="mx-15 mt-5 pb-5" style="border-bottom:2px solid #000">
                            <v-flex style="font-size:30px">[채용]진행중인 공고가 없습니다.</v-flex>
                            <v-flex md2 lg1 class="py-2" style="background:#E86610;color:#fff;border-radius:11px;text-align:center;font-size:18px;cursor:pointer">공고확인하기</v-flex>
                        </v-layout>
                        <v-layout align-center class="mx-15 mt-5 mb-10">
                            <v-flex style="font-size:30px">[채용]진행중인 공고가 없습니다.</v-flex>
                            <v-flex md2 lg1 class="py-2" style="background:#E86610;color:#fff;border-radius:11px;text-align:center;font-size:18px;cursor:pointer">공고확인하기</v-flex>
                        </v-layout>
                    </v-flex>
                </v-flex>
                <Footer/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
/* global kakao */
import Footer from '@/components/web/common/Footer'
import Header from '@/components/web/common/Header_black'
import VueDaumMap from 'vue-daum-map'
import config from '../../../config'
export default {
    components:{
        Header,
        Footer,
        VueDaumMap
    },
    data() {
        return {
            items: [
          {
            src: require('../../../assets/web/img/background/office1.png'),
          },
          {
            src: require('../../../assets/web/img/background/office2.png'),
          },
          {
            src: require('../../../assets/web/img/background/office3.png'),
          },
          {
            src: require('../../../assets/web/img/background/office4.png'),
          },
        ],

            appKey: config.appKey,
            center: {lat:37.49794514999162, lng:127.0431446387925}, // 지도의 중심 좌표
            level: 2, // 지도의 레벨(확대, 축소 정도),
            mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
            libraries: [], // 추가로 불러올 라이브러리
            map: null // 지도 객체. 지도가 로드되면 할당됨.
        }
    },
    methods:{
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
    .daum_map_web{
        width:40vw;height:47vh;
    }
    .work_wrap{min-width: 1400px;}
</style>