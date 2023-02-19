<template>
	<div class="menu-logo">
		<img src="../assets/img/vite.svg" alt="vite" />
		{{ collapsed ? '' : 'Vite' }}
	</div>
	<n-space vertical>
		<n-layout has-sider>
			<n-layout-sider
				collapse-mode="width"
				:collapsed-width="64"
				:width="240"
				:collapsed="collapsed"
			>
				<n-menu
					:collapsed-width="64"
					:collapsed-icon-size="22"
					:options="menus"
					v-model:value="currentMenu"
					@update:value="handleMenuClick"
				/>
			</n-layout-sider>
		</n-layout>
	</n-space>
</template>

<script setup>
import { watch, ref, h } from 'vue';
import { NIcon } from 'naive-ui';
import {storeToRefs} from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { useMenuSwitchStore } from '@/stores/index';
import { children } from '@/router/route';

const {collapsed} = storeToRefs(useMenuSwitchStore());

function formatterMenu(children) {
	let temp = [];
	for (let c of children) {
		let tempObj = {
			label: c.name,
			key: c.path,
			icon: c.meta.icon && (() => h(NIcon, null, () => h(c.meta.icon))),
		};
		c.children && (tempObj.children = formatterMenu(c.children));
		temp.push(tempObj);
	}
	return temp;
}
const menus = formatterMenu(children);

const router = useRouter();
function handleMenuClick(path, menu) {
	router.push(path);
}

// 菜单根据路由高亮
const route = useRoute();
const currentMenu = ref(route.path);
watch(
	() => route.path,
	() => (currentMenu.value = route.path),
	{ immediate: true }
);
</script>

<style lang="scss" scoped>
.menu-logo {
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	font-size: 16px;
	font-weight: 600;
	gap: 5px;
	> img {
		width: 30px;
		height: 30px;
	}
}
</style>
