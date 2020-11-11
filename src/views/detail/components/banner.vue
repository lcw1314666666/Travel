<template>
    <div class="banner" @click="handleBannerClick">
        <img
            class="banner-img" 
            src="https://imgs.qunarzz.com/vs_ceph_b2c_001/f8ad341d-4255-4730-bd93-e636be294f5d.jpg_r_390x260x95_ed2784a9.jpg" 
            alt=""
        >
        <div class="banner-info">
            <div class="banner-title">banner</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xeaf2;</span>
                <span class="num">0</span>
            </div>
        </div>
        <Galler 
            :imgs="imgs" 
            v-show="showGallery"
            @close="handleGalleryClose" 
        ></Galler>
    </div>
</template>

<script>
import Galler from '@/components/gallery/gallery.vue'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallery: false,
            imgs: ['https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_710x360_64983e73.jpg',
                    'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_710x360_c22d14f0.jpg']
        }
    },
    components: {
        Galler
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