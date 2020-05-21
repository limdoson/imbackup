import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
const router = new VueRouter({
  	mode: 'history',
  	// base: process.env.BASE_URL,	
  	routes  : [
		{
			path : '/login',
			component : () => import('@v/Login')
		},
		{
			path : '/',
			component : () => import('@v/home/Index'),
			beforeEnter : (to, from, next) => {
				
				/* 
					如果缓存中有登录信息且当前路径不是登录页面，则可以直接进入home页面，并且出发vuex中user模块的userLogin(dispatch)
					如果缓存中没有登录信息，则跳转到登录页面
				*/
				const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
				if (loginInfo &&  from.path !== '/login') {
					store.dispatch('userModule/userLogin', loginInfo)
					next()
				} else {
					store.getters['userModule/sign'] ? next() : next('/login')
				}
			}
		}
	]
})

export default router
