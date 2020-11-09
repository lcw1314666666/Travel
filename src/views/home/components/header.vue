<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont">&#xe6b0;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe601;</span>
            搜索
        </div>
        <router-link to="/city" tag="div">
            <div class="header-right">
                {{ city }}
                <span class="iconfont">&#xe600;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "HomeHeader",
    computed: {
        // currentCity () {
        //     return this.$store.state.city
        // }
        ...mapState(['city'])
    }
}
</script>

<style scoped>
    .header{
        height: 43px;
        display: flex;
        background-color: #00bcd4;
        color: #fff;
        font-size: 0.32rem;
    }
    .header .header-left{
        width: .64rem;
        float: left;
        text-align: center;
        line-height: 0.8rem;
    }
    .header .header-input{
        flex: 1;
        height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        background-color: #fff;
        border-radius: .1rem;
        color: #ccc;
        line-height: .58rem;
        padding-left: 0.1rem;
    }
    .header .header-right{
        min-width: 1.05rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        line-height: 0.8rem;
    }
</style>
