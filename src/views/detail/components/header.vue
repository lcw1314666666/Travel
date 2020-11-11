<template>
    <div class="header">
        <router-link 
            to="/"
            tag="div"
            class="header-abs"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe6b0;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="headerStyle">
            <router-link 
                to="/" 
                tag="div"
            >
                <div class="header-left">
                    <div class="iconfont">&#xe6b0;</div>
                </div>
            </router-link>    
            城市详情
    </div>
    </div>
</template>

<script>
import { onDeactivated } from 'vue'
export default {
    name: 'Header',
    data () {
        return {
            showAbs: true,
            headerStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {  
            let top = document.documentElement.scrollTop
            if (top > 60) {
                this.showAbs = false
                let opacity = top / 140
                opacity = opacity < 1 ? opacity : 1
                this.headerStyle = {
                    opacity
                }  
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
        console.log('activated')
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
        console.log('deactivated')
    }
}
</script>

<style scoped>
   .header-abs{
       position: absolute;
       left: .2rem;
       top: .2rem;
       width: .8rem;
       height: .8rem;
       border-radius: .4rem;
       background: rgba(0, 0, 0, .8);
       text-align: center
   }
   .header-abs .header-abs-back{
       height: .8rem;
       line-height: .8rem;
       color: #fff;
   }
   .header-fixed{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
        height: .86rem;
        line-height: .86rem;
        width: 100%;
        text-align: center;
        color: #fff;
        background-color:  #00bcd4;
        font-size: 0.32rem;
    }
    .header-fixed .header-left{
        position: absolute;
        color: #ffffff;
        top: 0;
        left: 0;
        font-size: .4rem;
        width: .64rem; 
        text-align: center;
    }
</style>