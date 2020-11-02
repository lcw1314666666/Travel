<template>
<div class="swiper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in list" :key="index">
      <img class="swiper-img" :src="item" alt="">
    </swiper-slide>
    
    <div class="swiper-pagination"></div>
  </swiper>
</div>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true
          // Some Swiper option/callback...
        }
      }
    },
    props: {
      list: String
    }
  }
</script>

<style scoped>
    .swiper{
      overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 27%;
      background-color: #eee;
    }
    .swiper img{
      width: 100%;
    }
</style>

