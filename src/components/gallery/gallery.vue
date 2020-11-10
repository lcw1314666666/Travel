<template>
    <div class="gallery" @click="handleGalleryClick">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, index) in imgs" :key='index'>
                <img class="swiper-img" :src="item">
            </swiper-slide>
            
            <div class="swiper-pagination pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    observerParent: true,
                    observer: true
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
        handleGalleryClick () {
            this.$emit('close')
        }
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
        padding-bottom: 100%；
    }
    .gallery .wrapper .swiper-img{
        width: 100%;
    }
</style>