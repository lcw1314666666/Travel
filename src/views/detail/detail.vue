<template>
    <div class="detail">
        <DetailBanner 
            :sightName="sightName"
            :gallaryImgs="gallaryImgs"
            :bannerImg="bannerImg"
        ></DetailBanner>
        <keep-alive>
            <DetailHeader></DetailHeader>
        </keep-alive>
        <DetailList :list='list' :categoryList="categoryList"></DetailList>
        <div class="wrapper"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            bannerImg: '',
            categoryList: [],
            gallaryImgs: [],
            sightName: 'String',
            list: [
                {
                    title: '成人票',
                    children: [
                        {
                            title: '全国连锁',
                            children: [
                                {
                                    title: '某店售票'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '学生票'
                },
                {
                    title: '儿童票'
                }
            ]
        }
    },
    methods: {
        getDetailInfo () {
            // console.log(this.$router.currentRoute._rawValue.params.id)
            axios.get('/mock/detail.json', {
                params: {
                    id: this.$router.currentRoute._rawValue.params.id
                }
            })
                 .then(this.getDetailSucc)
        },
        getDetailSucc (res) {
            // console.log(res)
            res = res.data
            if (res.ret && res.data) {
                let data = res.data
                console.log(data) 
                this.bannerImg = data.bannerImg
                this.categoryList = data.categoryList
                this.sightName = data.sightName
                this.gallaryImgs = data.gallaryImgs
            }
        }
    },
    mounted () {
       this.getDetailInfo() 
    }
}
</script>

<style scoped>
    .wrapper{
        height: 2000px;
    }
</style>