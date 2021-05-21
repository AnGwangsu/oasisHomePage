<template>
    <v-container fluid style="padding:0;height:100%">
        <v-layout>
            <v-flex>
                <Header/>
                <v-flex class="mt-10">
                    <v-flex>
                        <v-layout justify-center>
                            <v-flex class="mt-15 mx-10" lg4 style="font-size:70px;font-weight:600">
                                <v-flex style="color:#741DD8;line-height:1.3">MAKE YOUR</v-flex>
                                <v-flex style="color:#741DD8;line-height:1.0">CONTENTS</v-flex>
                                <v-flex class="my-10">HI PRAE</v-flex>
                                <v-flex>
                                    <v-layout align-center>
                                        <v-flex class="mr-2" lg2 style="height:100px">
                                            <a href="https://www.instagram.com/baboprae/?hl=ko" target="_blank">
                                                <img class="pa-3" src="@/assets/web/img/icon/instagram.png" height="100%" width="100%" style="cursor:pointer">
                                            </a>
                                        </v-flex>
                                        <v-flex class="ml-2" lg2 style="height:100px">
                                            <a href="https://www.youtube.com/c/hiprae/featured" target="_blanck">
                                                <img class="pa-3" src="@/assets/web/img/icon/youtube.png" height="100%" width="100%" style="cursor:pointer">
                                            </a>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-flex>
                            <v-flex lg4 class="mx-10" style="height:650px">
                                <img class="px-10" src="@/assets/web/img/background/list1.png" width="100%" height="100%">
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex class="py-15" style="background:#F3F3F3;">
                        <v-flex class="mb-10" style="text-align:center;font-size:60px;color:#741DD8;font-weight:600">PARTNER CREATOR</v-flex>
                        <v-layout>
                            <v-flex lg3 class="px-10">
                                <v-flex class="mx-15 list2_1" style="height:260px;">
                                   <v-layout class="hover1" align-center style="height:100%;color:#fff;font-size:25px">
                                       <v-flex style="text-align:center">린고</v-flex>
                                    </v-layout> 
                                </v-flex>
                            </v-flex>
                            <v-flex lg3 class="px-10">
                                <v-flex class="mx-15 list2_2" style="height:260px">
                                    <v-layout class="hover2" align-center style="height:100%;color:#fff;font-size:25px">
                                       <v-flex style="text-align:center">Jang Hongan</v-flex>
                                    </v-layout> 
                                </v-flex>
                            </v-flex>
                            <v-flex lg3 class="px-10">
                                <v-flex class="mx-15 list2_3" style="height:260px">
                                    <v-layout class="hover3" align-center style="height:100%;color:#fff;font-size:25px">
                                       <v-flex style="text-align:center">Meichan</v-flex>
                                    </v-layout> 
                                </v-flex>
                            </v-flex>
                            <v-flex lg3 class="px-10">
                                <v-flex class="mx-15 list2_4" style="height:260px">
                                    <v-layout class="hover4" align-center style="height:100%;color:#fff;font-size:25px">
                                       <v-flex style="text-align:center">Ling Cheng</v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                        <v-flex class="mt-15" style="font-size:40px;text-align:center;font-weight:600">1000여명의 인플루언서와 함께합니다</v-flex>
                    </v-flex>
                </v-flex>
            </v-flex>
        </v-layout>
        <Footer/>
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
}
</script>

<style>
    .list2_1{background-image:url('../../../assets/web/img/background/list2_1.png'); background-size: 100% 100%;background-position: center;height:100%;}
    .hover1{opacity: 0;background:#000}
    .list2_1:hover .hover1{background:rgba(0,0,0,.3);opacity: 1;}
    .list2_2{background-image:url('../../../assets/web/img/background/list2_2.png'); background-size: 100% 100%;background-position: center;height:100%;}
    .hover2{opacity: 0;background:#000}
    .list2_2:hover .hover2{background:rgba(0,0,0,.3);opacity: 1;}
    .list2_3{background-image:url('../../../assets/web/img/background/list2_3.png'); background-size: 100% 100%;background-position: center;height:100%;}
    .hover3{opacity: 0;background:#000}
    .list2_3:hover .hover3{background:rgba(0,0,0,.3);opacity: 1;}
    .list2_4{background-image:url('../../../assets/web/img/background/list2_4.png'); background-size: 100% 100%;background-position: center;height:100%;}
    .hover4{opacity: 0;background:#000}
    .list2_4:hover .hover4{background:rgba(0,0,0,.3);opacity: 1;}
</style>