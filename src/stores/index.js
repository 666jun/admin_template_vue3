import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { children } from '../router/route';
import router from '../router/index';

// 缓存导航数组逻辑
export const useKeepAliveRouteListStore = defineStore('keepAliveRouteList', () => {
	const keepAliveRoute = reactive([]);

	function hasRoute(route, list) {
		let flag;
		for (let item of list) {
			if (item.path === route.path) {
				flag = true;
				break;
			}
			// 有子集那就递归
			if (Array.isArray(item.children)) {
				flag = hasRoute(route, item.children);
			}
		}
		return flag;
	}

	// 添加，去重
	function pushRoute(route) {
		// 先查找是否已经push过
		let repeatFlag = keepAliveRoute.find(i => i.path === route.path);
		if (repeatFlag) return;

		// 查找是否在路由菜单中
		let hasRouteFlag = hasRoute(route, children);
		if (!hasRouteFlag) return;

		keepAliveRoute.push(route);
	}

	// 删除
	function removeRoute(removeItem, currentRoute) {
		let index = keepAliveRoute.findIndex(i => i.path === removeItem.path);
		keepAliveRoute.splice(index, 1);
		// 如果当前的页面路由和关闭的路由一致 删除之后要切换路由
		if (removeItem.path === currentRoute.path) {
			index = index === 0 ? 0 : index - 1;
			router.push(keepAliveRoute[index].path);
		}
	}

	// 删除全部（默认跳回/home）
	function removeAllRoute() {
		keepAliveRoute.length = 0;
		router.push('/home');
	}

	return { keepAliveRoute, pushRoute, removeRoute, removeAllRoute };
});

// 左侧菜单的展开收起逻辑
export const useMenuSwitchStore = defineStore('menuSwitch', () => {
	const collapsed = ref(false);

	function toggleCollapsed() {
		collapsed.value = !collapsed.value;
	}

	return { collapsed, toggleCollapsed };
});

// 模拟用户数据
export const useUserLoginStore = defineStore('userLogin', () => {
	const user = reactive({
		isLogin: true,
	});

	function setUser(data) {
		user.isLogin = data.isLogin;
	}

	function logout() {
		user.isLogin = false
		router.push('/login');
	}

	return { user, setUser ,logout};
});

// 系统设置
export const useSystemSettingStore = defineStore('systemSetting', () => {
	const systemSetting = reactive({
		layout: 'layout_2',
	});

	function setLayout(layout) {
		systemSetting.layout = layout;
	}

	return { systemSetting, setLayout };
});
