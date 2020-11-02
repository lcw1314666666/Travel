<template>
    <div class="header">
        <router-link to="/" tag="div">
            <div class="header-left">
                <div class="iconfont">&#xe6b0;</div>
            </div>
        </router-link>    
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHome'
}
</script>

<style scoped>
    .header{
        height: .86rem;
        line-height: .86rem;
        width: 100%;
        text-align: center;
        color: #fff;
        background-color:  #00bcd4;
        font-size: 0.32rem;
    }
    .header .header-left{
        position: absolute;
        width: .64rem;
        left: 0;
        top: 0;
        bottom: 0;
        font-size: 0.3rem;
    }
</style>