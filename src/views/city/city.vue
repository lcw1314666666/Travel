<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList 
            :hotCities="hotCities" 
            :cities="cities"
            :letter="letter"
        ></CityList>
        <CityAlphabet 
            :cities="cities"
            @change="handleLetterChange" 
        ></CityAlphabet>
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
            hotCities: [],
            letter: String 
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/mock/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            // console.log(res)
            if (res.ret && res.data) {
                const data = res.data
                // console.log(data)
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>


<style scoped>
</style>