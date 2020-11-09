<template> 
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名称或拼音">
        </div>
        <div class="search-content"
             ref="search" 
             v-show="keyword">
            <ul>
                <li class="search-item boredr-bottom" 
                    v-for="item in list" 
                    :key="item.id"
                    @click="handleChangeCity(item.name)"
                >{{ item.name }}</li>
                <li class="search-item boredr-bottom" 
                    v-show="!list.length"    
                >未找到相应的城市</li>
            </ul>
        </div>
    </div>
    
</template>


<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    props: {
        cities: Object
    },
    methods: {
        handleChangeCity (e) {
            // this.$store.commit('changeCity', e)
            this.changeCity(e)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        keyword () {
            const list = []
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                if (!this.keyword) {
                    this.list = []
                    return 
                }
                for (let i in this.cities) {
                    this.cities[i].forEach((item) => {
                        // console.log(item)
                        if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                            list.push(item)
                        }
                    })
                }
                this.list = list
            }, 100)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    }
}
</script>

<style scoped>
    .search{
        position: relative;
        height: .72rem;
        padding: 0 .1rem;
        background: #00bcd4
    }
    .search .search-input{
        position: absolute;
        box-sizing: border-box;
        height: .62rem;
        line-height: .62rem;
        padding: 0 .1rem;
        color: #666;
        text-align: center;
        border-radius: 0.06rem;
        width: 97%;
        outline: none;
    }
    .search-content{
        overflow: hidden;
        position: absolute;
        top: 1.56rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        z-index: 1;
    }
    .search-content .search-item{
        line-height: 0.6rem;
        font-size: 0.3rem;
        color: #666;
        text-align: center;
        border-bottom: 0.01rem solid #ccc;
    }
</style>