<template>
    <div ref="wrapper">
        <div class="list">
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
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbuttom">A</div>
                <div class="item-list">
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                    <div class="item">尼泊尔</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style scoped>
    .border-topbuttom{
        /* border-top: 0.02rem solid #ccc; */
        border-bottom: 0.02rem solid #ccc;
    }
    .list{
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 1.6rem;
        bottom: 0;
        z-index: -1;
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