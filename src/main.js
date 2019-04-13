import Vue from 'vue'
import App from './App'

import Config from './config/index'; //全局变量
Vue.prototype.Config = Config;  //绑定到vue原型上

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
