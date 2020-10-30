<template>
<div class="swiper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
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
        },
        swiperList: [
                {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
                },
                {
                    id: '002',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
                },
                {
                    id: '003',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg'
                },
                {
                    id: '004',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg'
                },
                {
                    id: '005',
                    imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/7176acd77332a433af9636eb9a2c338c.jpeg'
                }]
      }
    },
  }
</script>

<style scoped>
    .swiper{
      overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 31.25%;
      background-color: #eee;
    }
    .swiper img{
      width: 100%;
    }
</style>

