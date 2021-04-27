<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1">
            <v-flex class="px-15">
                <v-flex class="my-10 font-weight-bold" style="font-size:55px;">PARTNERS</v-flex>
                <v-flex class="my-10 px-10" style="text-align:center">
                    <v-layout class="mb-10" align-center>
                        <v-flex lg2><img src="@/assets/img/partners/partner1.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner2.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner3.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner4.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner5.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner6.png"></v-flex>
                    </v-layout>
                    <v-layout class="mb-10" align-center>
                        <v-flex lg2><img src="@/assets/img/partners/partner7.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner8.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner9.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner10.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner11.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner12.png"></v-flex>
                    </v-layout>
                    <v-layout class="mb-10" align-center>
                        <v-flex lg2><img src="@/assets/img/partners/partner13.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner14.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner15.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner16.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner17.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner18.png"></v-flex>
                    </v-layout>
                    <v-layout class="mb-15" align-center>
                        <v-flex lg2><img src="@/assets/img/partners/partner19.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner20.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner21.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner22.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner23.png"></v-flex>
                        <v-flex lg2><img src="@/assets/img/partners/partner24.png"></v-flex>
                    </v-layout>
                </v-flex>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
import Header from '@/components/common/Header_black'
import Footer from '@/components/common/Footer'
export default {
    components:{
        Header,
        Footer
    },
}
</script>