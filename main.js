import Vue from 'vue'
import App from './App'
//引入uView
import uView from "uview-ui";
Vue.use(uView);
// 引入vuex
import store from './store'
Vue.prototype.$store = store
//引入vue-particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	uView,
	store
})
app.$mount()
