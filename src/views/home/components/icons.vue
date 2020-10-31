<template>
    <div class="icons">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.url" alt="">
                    </div>
                    <div class="icon-title">{{ item.desc }}</div>
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
            },
            iconList: [
                {
                    id: '001',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '002',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                },
                {
                    id: '003',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                    desc: '火车票'
                },
                {
                    id: '004',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc: '度假'
                },
                {
                    id: '005',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '景点门票'
                },
                {
                    id: '006',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                    desc: '机票'
                },
                {
                    id: '007',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                    desc: '酒店'
                },
                {
                    id: '008',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                    desc: '火车票'
                },
                {
                    id: '009',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                    desc: '度假'
                },
                {
                    id: '010',
                    url: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '景点门票'
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
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