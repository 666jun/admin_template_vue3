import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/Layout.vue';
import { children } from './route';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserLoginStore ,useKeepAliveRouteListStore} from '../stores/index';

const routes = [
	{
		path: '/',
		name: 'index',
		redirect: '/home',
		component: Layout,
		children: children,
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/base/Login.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('../views/base/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

// 路由白名单 （不进行拦截）
const routeWhiteList = ['/404', '/login'];


NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
	NProgress.start();

	// 如果去的是白名单页面 那么放行
	if (routeWhiteList.includes(to.path)) {
		next();
	} else {
		const userLoginStore = useUserLoginStore();
		// 如果已经登录 那么放行
		if (userLoginStore.user.isLogin) {
			next();
		} else {
			next('/login');
		}
	}
});

router.afterEach((to,from) => {
	const keepAliveRouteListStore = useKeepAliveRouteListStore();
	keepAliveRouteListStore.pushRoute(to);
	NProgress.done();
});

export default router;
