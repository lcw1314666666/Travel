<template>
    <div ref="wrapper" class="list">
        <div>
            <div class="area">
                <div class="title border-topbuttom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbuttom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item, key) in cities" :key="key">
                <div class="title border-topbuttom" :ref="key">{{ key }}</div>
                <div class="item-list" v-for="value in item" :key="value.id">
                    <div class="item">{{ value.name }}</div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    data () {
        return {

        }
    },
    props: {
        cities: Object,
        hotCities: Array,
        letter: String 
    },
    mounted: function () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter]
                this.scroll.scrollToElement(element)
            }
            
        }
    }
}
</script>

<style scoped>
    .border-topbuttom{
        border-bottom: 0.02rem solid #ccc;
    }
    .list{
        overflow: hidden;
        position: absolute;
        top: 1.6rem;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .title{
        line-height: .44rem;
        background-color: #eee;
        padding-left: .25rem;
        font-size: .26rem;
        color: #666;
    }
    .button-list{
        padding: .1rem .6rem .1rem .1rem;
        overflow: hidden;
    }
    .button-list .button-wrapper{
        float: left;
        width: 33.33%;
    }
    .button-list .button-wrapper .button{
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        font-size: .35rem;
        border-radius: 0.06rem;
    }
    .item-list .item{
        font-size: .3rem;
        line-height: .75rem;
        padding-left: .2rem;
        border-bottom: 0.01rem solid #ccc;
    }
</style>