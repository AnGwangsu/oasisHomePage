<template>
  <v-app>
    <v-main style="padding:0;">
      <router-view/>
      <!-- <router-view v-else name="mobile"/> -->
      <v-flex class="quickMenu" v-if="isMobile==true">
        <img src="@/assets/mobile/img/icon/quickMenu.png" width="50" height="50" style="cursor:pointer" @click="dialog=true">
        <v-dialog v-model="dialog" width="80%" style="border-radius:12px">
          <v-card style="border-radius:12px">
            <v-layout>
              <v-flex style="text-align:center;">
                <v-flex class="py-2" style="background:#00EAF9;font-weight:600;font-size:20px;border-top-left-radius:12px;border-top-right-radius:12px">OASIS MEDIA</v-flex>
                <v-flex class="py-5">
                  <v-layout align-center class="mb-5">
                    <v-flex class="mr-3" style="text-align:right"><img src="@/assets/mobile/img/icon/phone.png" width="37" height="37"></v-flex>
                    <v-flex style="text-align:left"><a href="tel:02-556-0101" style="text-decoration:none;color:#000;font-size:25px">02-556-0101</a></v-flex>
                  </v-layout>
                  <v-flex class="my-9" style="font-size:16px">번호를 누르시면 자동으로 연결 됩니다.</v-flex>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dialog:false,
      isMobile:false
    }
  },
  // beforeDestroy(){
  //   if(typeof window !== undefined){
  //     window.removeEventListener('resize',this.onResize,{passive:true})
  //   }
  // },
  // mounted(){
  //   this.onResize()
  //   window.addEventListener('resize',this.onResize,{passive:true})
  // },
  created(){
    // window.addEventListener('beforeunload',this.removeExist)
    this.mobileCheck()
  },
  methods:{
    removeExist(){
      localStorage.removeItem('exist')
      localStorage.removeItem('isMobile')
    },
    mobileCheck(){
      var pcDevice = "win16|win32|win64|mac|macintel";
        if ( navigator.platform ) {
          if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
              this.isMobile=true
              this.$router.push({
                path:'/m'
              })
          } else {
              this.isMobile=false
              this.$router.push({
                path:'/'
              })
          }
        }   
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  *{
    font-family: 'Noto Sans KR', sans-serif;
  }
  html,body{
    height:100%
  }
  .quickMenu{position: fixed;bottom:5%;right:10%}
</style>
