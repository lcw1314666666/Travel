import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './assets/reset.css'
import './assets/border.css'
import './assets/style/iconfont.css'

fastClick.attach(document.body)

createApp(App).use(store).use(router).mount('#app')
