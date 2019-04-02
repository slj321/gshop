//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({    //  创建路由器
	//传一个配置对象     配置所有路由
	routes:[
		{							//数组的每一个元素代表一个路由 的配置
			path:'/msite',				//路由是对象类型，有两个属性
			component:MSite,
			meta:{
				showFooter:true,
			}
		},
		{					
			path:'/search',				
			component:Search,
			meta:{
				showFooter:true,
			}
		},
		{					
			path:'/order',				
			component:Order,
			meta:{
				showFooter:true,
			}
		},
		{					
			path:'/profile',				
			component:Profile,
			meta:{
				showFooter:true,
			}
		},
		{                            //默认显示
			path:'/',
			redirect:'/msite'
		},
		{                            //默认显示
			path:'/login',
			component:Login
		}
	]
})

