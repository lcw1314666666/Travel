import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/reset.css'
import './assets/border.css'
import './assets/style/iconfont.css'

import 'swiper/dist/css/swiper.css'


// Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')
