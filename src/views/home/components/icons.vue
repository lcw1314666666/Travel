<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="(item, index) in page" :key="index">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <div class="icon-title">{{ item.title }}</div>
                </div>
            </swiper-slide>
        </swiper>     
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                // Some Swiper option/callback...
            }
        }
    },
    props: {
        list: Array
    },
    computed: {
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            }) 
            return pages
        }
    }
}
</script>

<style scoped>
/* @import url('../../../asstes/style/mixins.styl'); */
    .icons >>> .icon-img-content{
        height: 0;
        padding-bottom: 50%; 
    }
    .icons{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        /* background-color: pink; */
    }    
    .icons .icon{
        position: relative;
        overflow: hidden;
        width: 25%;
        padding-bottom: 25%;
        float: left;
        /* background-color: red; */
    }
    .icons .icon .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: .1rem;
        /* background-color: blue; */
    }
    .icons .icon .icon-img .icon-img-content{
        display: block;
        margin: 0 auto;
        height: 100%;
    }
    .icons .icon .icon-title{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        color: #333;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.44rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>