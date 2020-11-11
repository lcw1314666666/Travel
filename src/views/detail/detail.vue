<template>
    <div class="detail">
        <DetailBanner></DetailBanner>
        <keep-alive>
            <DetailHeader></DetailHeader>
        </keep-alive>
        <div class="wrapper"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style scoped>
    .wrapper{
        height: 2000px;
    }
</style>