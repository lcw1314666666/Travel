<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.img" alt="">
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
            weekendList: [
                {
                    id: '001',
                    img: 'https://imgs.qunarzz.com/sight/p0/1904/f3/f30e60e7a00c0923a3.img.jpg_250x250_7464052b.jpg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '002',
                    img: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '003',
                    img: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                },
                {
                    id: '004',
                    img: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
                    title: '宛园',
                    desc: '宛园，位于临清市西北隅，占地110亩，建筑面积一万九千平方米，水面面积一万五千平方米，是一处由苏州园林设计院设计、承建，集园林、展览、游览休闲为一体的社会文化设施。',
                }
            ]
        }
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