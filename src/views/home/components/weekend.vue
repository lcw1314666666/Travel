<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
        }
    },
    props: {
        list: Array
    }
 }
</script>

<style scoped>
    .weekend{
        font-size: .3rem;
    }
    .title{
        line-height: 0.8rem;
        background-color: #eee;
        text-indent: .2rem;
        font-size: 0.3rem
    }
    
    .item .item-img-wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%;
    }

    .item .item-img-wrapper .item-img{
        width: 100%;
    }
    .item .item-info{
        /* padding: 0.1rem; */
        min-width: 0;
    }
    .item .item-info .item-title{
        line-height: 0.54rem;
        font-size: 0.32rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .item .item-info .item-desc{
        line-height: 0.4rem;
        color: #ccc;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>