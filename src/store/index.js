import { createStore } from 'vuex'
import state from './state'

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

export default createStore({
  state,
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  },
  // actions: {
  //   changeCity (context, city) {
  //     context.commit('updataCity', city)
  //   }
  // },
  modules: {
  }
})
