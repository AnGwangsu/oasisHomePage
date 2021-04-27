<template>
  <v-app>
    <v-main style="padding:0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
</style>
