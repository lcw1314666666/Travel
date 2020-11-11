<template>
    <div class="list">
        <div 
            class="item"
            v-for="(item, index) in categoryList"
            :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-icon"></span>
                {{ item.title }}
            </div>
            <div class="childredList" :v-if="item.children">
                <DetailList :categoryList="item.children"></DetailList>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailList",
    props: {
        categoryList: Array
    }
}
</script>

<style scoped>
    .item-title{
        width: 100%;
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .item-title .item-icon{
        display: inline-block;
        position: relative;
        width: .36rem;
        height: .36rem;
        left: .2rem;
        top: .1rem;
        background: url('/public/piao.png') 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: 100% 100%; 
    }
    .childredList{
        padding-left: .2rem;
    }
</style>