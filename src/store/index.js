// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cityName:"上海"
  },
  mutations: {
    setName: (state,data) => {
        state.cityName = data;
    },
    updateName: (state,data) => {
        state.cityName = data;
    }
  }
})

export default store
