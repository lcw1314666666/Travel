<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiper"></HomeSwiper>
        <HomeIcons :list='icons'></HomeIcons>
        <HomeRecommend :list='recommend'></HomeRecommend>
        <HomeWeekend :list='weekend'></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            swiper: [],
            icons: [],
            recommend: [],
            weekend: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/mock/index.json')
                .then(this.getHomeInfoSuccess)   
        },
        getHomeInfoSuccess (res) {
            res = res.data
            if (res.ret && res.data) {//服务区返回数据，并且有数据
                const data = res.data
                this.swiper = data.swiperList
                this.icons = data.iconList
                this.recommend = data.itemList
                this.weekend = data.weekendList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>