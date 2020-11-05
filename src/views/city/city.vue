<template>
    <div class="city">
        <CityHeader class="header"></CityHeader>
        <CitySearch class="search"></CitySearch>
        <CityList class="list" :hotCities="hotCities" :cities="cities"></CityList>
        <CityAlphabet class="alphabet" :cities="cities" ></CityAlphabet>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/mock/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            console.log(res)
            if (res.ret && res.data) {
                const data = res.data
                console.log(data)
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>


<style scoped>
</style>