<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <full-page ref="fullpage" :option="options" id="fullpage">
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
                            <v-layout>
                                <v-flex></v-flex>
                                <v-flex></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section">
                        <v-flex>3</v-flex>
                    </v-layout>
                </full-page>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Header from '@/components/common/Header_white'
// import Footer from '@/components/common/Footer'
export default {
    components:{
        Header,
        // Footer
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
    .business_1{background-image:url('../../assets/img/background/brand1.png'); background-size: 100% 100%;background-position:center;height:100%;position: relative;}
</style>