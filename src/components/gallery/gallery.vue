<template>
    <div class="gallery">
        <div  class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key='index'>
                    <img class="swiper-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data () {
        return {
            swiperOptions: {
                swiperOption: {
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer:true,
                    observeParents:true,
                    // observeSlideChildren:true,
                }
                // Some Swiper option/callback...
            }

        }
        
    },
    props: {
        imgs: {
            type: Array
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .gallery{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        color: #fff;
    }
    .gallery .wrapper{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
    }
    .gallery .wrapper img{
        width: 100%;
    }
</style>