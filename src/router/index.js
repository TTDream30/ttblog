import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import userRouters from './module/user';
// import store from '@/store';

Vue.use(VueRouter)

let routes = [{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		redirect: '/sign-in'
	},
	{
		path: '/home',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/teamSpace',
		name: 'TeamSpace',
		layout: "dashboard",
		component: () => import('../views/TeamSpace.vue'),
	},
	{
		path: '/teamSpaceEmpty',
		name: 'TeamSpaceEmpty',
		layout: "dashboard",
		component: () => import('../views/TeamSpaceEmpty.vue'),
	},
	{
		path: '/socialSpace',
		name: 'SocialSpace',
		layout: "dashboard",
		component: () => import('../views/SocialSpace.vue'),
	},
	{
		path: '/setting',
		name: 'Setting',
		layout: "dashboard",
		component: () => import('../views/Setting.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},

	...userRouters
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
	route.meta = route.meta || {};
	route.meta.layout = route.layout || parentLayout;

	if (route.children) {
		route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
	}
	return route;
}

routes = routes.map((route) => addLayoutToRoute(route));



const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

router.beforeEach((to, from, next) => {
	if (to.meta.auth) {

		// 判断是否需要登录
		if (store.state.users.token) {

			// 这里还要判断token的有效期，比如向后台发送token时要带上token的有效期，如果token无效则需要重新登录请求token
			next()
		} else {
			// 跳转登录
			router.push({
				name: 'Sign-In'
			})
		}
	} else {
		next()
	}
})
export default router