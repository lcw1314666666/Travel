<template>
    <div class="recommend">
        <div class="title">今日推荐</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button border-bottom">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [
                {
                    id: '001',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '002',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '丽江',
                    desc: '丽江自由行 交通+酒店任意搭配',
                },
                {
                    id: '003',
                    img: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/184449d9-abf1-4985-b16d-a3745a2a8362.jpg_480x320x90_46167377.jpg',
                    title: '北京',
                    desc: '双十一钜惠🔥 国际五星+豪华海景 昆大丽泸沽湖轻奢游 吉普车旅拍+洱海游艇',
                },
                {
                    id: '004',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '005',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '006',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },{
                    id: '007',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                }
            ]
        }
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
        font-size: 0.23rem
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