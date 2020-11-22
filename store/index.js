import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token:"", //头部字段
		customer_type:'1', //用户类型
		user_information:{}, //用户信息
		Teacher_name:{}, //教师信息
	},
	mutations: {
		
		},
		logout(state) {
			
		}

})
export default store
