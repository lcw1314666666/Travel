<template>
    <div class="recommend">
        <div class="title">今日推荐</div>
        <ul>
            <router-link
                tag="li"
                class="item" 
                v-for="item in list" 
                :key="item.comment_num"
                :to="'/detail/'+ item.comment_num" 
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.address }}</p>
                    <p class="item-desc">{{ item.title }}</p>
                    <button class="item-button border-bottom">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
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
    .title{
        margin-top: .2rem;
        line-height: 0.8rem;
        background-color: #eee;
        text-indent: .2rem;
        font-size: 0.3rem
    }
    .item{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        font-size: 0.23rem;
        background: none;
        outline: none;
        text-decoration: none;
        color: #333;
    }
    /* .item .item-img-wrapper{
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
        overflow: hidden;
        background-color: red;
    } */

    .item .item-img-wrapper .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }
    .item .item-info{
        flex: 1;
        padding: 0.1rem;
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
    .item .item-info .item-button{
        display: block;
        background-color: #ff9300;
        height: 0.6rem;
        text-align: center;

        border-radius: 0.06rem;
    }
</style>