<template>
    <div class="banner" @click.stop="handleBannerClick">
        <img
            class="banner-img" 
            :src="bannerImg" 
            alt=""
        >
        <div class="banner-info">
            <div class="banner-title">{{ sightName }}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xeaf2;</span>
                <span class="num">0</span>
            </div>
        </div>
        <FadeAnimation>
            <Galler 
                :imgs="gallaryImgs" 
                v-show="showGallery"
                @click.stop="handleGalleryClose" 
            ></Galler>
        </FadeAnimation>
    </div>
</template>

<script>
import Galler from '@/components/gallery/gallery.vue'
import FadeAnimation from '@/components/FadeAnimation/fadeAnimation.vue'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallery: false,
        }
    },
    props: {
        bannerImg: String,
        sightName: String,
        gallaryImgs: Array,
    },
    components: {
        Galler,
        FadeAnimation
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        handleGalleryClose () {
            this.showGallery = false
        }
    }
}
</script>

<style scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        font-size: 0.32rem;
    }
    .banner .banner-img{
        width: 100%;
    }
    .banner .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    }
    .banner-info .banner-title{
        flex: 1; 
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .banner-info .banner-number{
        padding: 0 0.4rem;
        margin-top: .14rem;
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.24rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
    }
    .banner-info .banner-number .num{
        text-align: center;
        height: 0.32rem;
        line-height: 0.32rem;
    }
    .banner-info .banner-number .banner-icon{
        font-size: 0.24rem;
    }
</style>