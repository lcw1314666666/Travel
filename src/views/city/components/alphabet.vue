<template>
    <div class="alphabet">
        <div class="item-list">
            <div class="item"  
            v-for="(item, key) in cities" 
            :key="key"
            :ref="key"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            >{{ key }}</div>    
        </div>
    </div>
</template>


<script>
export default {
    name: 'CityAlphabet',
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    props: {
        cities: Array
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            const letter = e.target.innerText;
            this.$emit('change', letter)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const currentLetterY = e.touches[0].clientY - 79
                    const index = Math.floor((currentLetterY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        // console.log(this.letters[index])
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    },
    updated () {
        this.startY = this.$refs['A'].offsetTop 
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