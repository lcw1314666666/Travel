<template>
    <div class="detail">
        <DetailBanner></DetailBanner>
        <keep-alive>
            <DetailHeader></DetailHeader>
        </keep-alive>
        <DetailList :list='list'></DetailList>
        <div class="wrapper"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
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
    }
}
</script>

<style scoped>
    .wrapper{
        height: 2000px;
    }
</style>