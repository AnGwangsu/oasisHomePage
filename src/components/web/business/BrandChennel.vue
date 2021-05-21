<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <full-page ref="fullpage" id="fullpage">
                    <v-layout class="section">
                        <v-flex class="business_1">
                            <Header/>
                            <v-layout class="mx-15" align-center style="color:#fff;height:100%">
                                <v-flex class="mx-15" style="font-size:50px">
                                    <v-flex class="mb-10">MAKE YOUR IDENTITY</v-flex>
                                    <v-flex class="mb-10">당신의 아이덴티티를</v-flex>
                                    <v-flex>만들어보세요</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section">
                        <v-flex>
                            <v-layout justify-center>
                                <v-flex lg3>
                                    <v-flex class="mx-15 px-3 pt-3" style="border:1px solid rgba(54,54,54,.3);height:450px;border-radius:16px 16px 0 0"><img src="@/assets/web/img/background/brand2_1.png" height="100%" width="100%"></v-flex>
                                    <v-flex class="mx-15 mt-8" style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:25px;color:#741DD8;font-weight:600">Brand Collaboration</v-flex>
                                        <v-flex class="mb-3" style="font-weight:600;font-size:18px">브랜드에 딱 맞는 컨텐츠와 크리에이터</v-flex>
                                        <v-flex class="mx-5" style="font-size:18px;color:rgba(54,54,54,.8)">브랜드 특성에 맞는 크리에이터를 매칭하여 기획부터 리포트 까지 최적화 된 콜라보레이션을 제안합니다</v-flex>
                                    </v-flex>
                                </v-flex>
                                <v-flex lg3></v-flex>
                                <v-flex lg3>
                                    <v-flex class="mx-15 px-3 pt-3" style="border:1px solid rgba(54,54,54,.3);height:450px;border-radius:16px 16px 0 0"><img src="@/assets/web/img/background/brand2_2.png" height="100%" width="100%"></v-flex>
                                    <v-flex class="mx-15 mt-8" style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:25px;color:#741DD8;font-weight:600">Brand Channel</v-flex>
                                        <v-flex style="font-weight:600;font-size:18px">브랜드도 하나의 크리에이터다</v-flex>
                                        <v-flex class="mx-5" style="font-size:18px;color:rgba(54,54,54,.8)">다양한 노하우를 통해, 브랜드와 소비자간 니즈를 파악하여 최적화 된 컨텐츠와 채널을 대행하며 제작 · 운영합니다</v-flex>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section">
                        <v-flex style="display:flex;flex-direction:column;height:100%">
                            <v-layout class="mt-10" justify-center style="flex:1">
                                <v-flex lg3>
                                    <v-flex class="mx-15 px-3 pt-3" style="border:1px solid rgba(54,54,54,.3);height:450px;border-radius:16px 16px 0 0"><img src="@/assets/web/img/background/brand3_1.png" height="100%" width="100%"></v-flex>
                                    <v-flex class="mx-15 mt-8" style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:25px;color:#741DD8;font-weight:600">LIVE - commerce</v-flex>
                                        <v-flex class="mb-3" style="font-weight:600;font-size:18px">브랜딩을 넘어 판매까지!</v-flex>
                                        <v-flex class="mx-5" style="font-size:18px;color:rgba(54,54,54,.8)">브랜드 특성에 맞는 크리에이터를 매칭하여 기획부터 리포트 까지 최적화 된 콜라보레이션을 제안합니다</v-flex>
                                    </v-flex>
                                </v-flex>
                                <v-flex lg3></v-flex>
                                <v-flex lg3>
                                    <v-flex class="mx-15 px-3 pt-3" style="border:1px solid rgba(54,54,54,.3);height:450px;border-radius:16px 16px 0 0"><img src="@/assets/web/img/background/brand3_2.png" height="100%" width="100%"></v-flex>
                                    <v-flex class="mx-15 mt-8" style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:25px;color:#741DD8;font-weight:600">Brand Channel</v-flex>
                                        <v-flex style="font-weight:600;font-size:18px">브랜드도 하나의 크리에이터다</v-flex>
                                        <v-flex class="mx-5" style="font-size:18px;color:rgba(54,54,54,.8)">다양한 노하우를 통해, 브랜드와 소비자간 니즈를 파악하여 최적화 된 컨텐츠와 채널을 대행하며 제작 · 운영합니다</v-flex>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                            <Footer/>
                        </v-flex>
                    </v-layout>
                </full-page>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Header from '@/components/web/common/Header_white'
import Footer from '@/components/web/common/Footer'
export default {
    components:{
        Header,
        Footer
    },
    data() {
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style>
    .business_1{background-image:url('../../../assets/web/img/background/brand1.png'); background-size: 100% 100%;background-position:center;height:100%;position: relative;}
</style>