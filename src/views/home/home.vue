<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommend></HomeRecommend>
        <HomeWeekend></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style scoped>

</style>