<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名称或拼音">
    </div>
</template>


<script>
export default {
    name: 'CitySearch'
}
</script>

<style scoped>
    .search{
        position: relative;
        width: 100%;
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
        width: 94%;
        outline: none;
    }
</style>