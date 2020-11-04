<template>
    <div class="alphabet">
        <div class="item-list">
            <div class="item"  
            v-for="(item, key) in cities" 
            :key="key"
            >{{ key }}</div>    
        </div>
    </div>
</template>


<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Array
    }
}
</script>

<style scoped>
    .item-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.2rem;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        /* background: red; */
    }
    .item-list .item{
        line-height: 0.44rem;
        color: #00bcd4;
        text-align: center;
    }
</style>