//入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'  //引入路由器

new Vue({
	el:'#app',
	render:function(createElement){
		return createElement(App);
	},
	router
})
