<template>
	<div class="p-menu">
		<div class="menu-logo">
			<img src="../assets/img/vite.svg" alt="vite" />
		</div>
		<n-scrollbar class="p-menu-scroll">
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
		</n-scrollbar>

		<div class="menu-switch">
			<NIcon
				@click="toggleCollapsed"
				:component="ArrowBackCircleSharp"
				size="35"
				:class="collapsed ? 'rotate-icon' : ''"
			></NIcon>
		</div>
	</div>
</template>

<script setup>
import { watch, ref, h } from 'vue';
import { NIcon } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { ArrowBackCircleSharp } from '@vicons/ionicons5';
import { useMenuSwitchStore } from '@/stores/index';
import { children } from '@/router/route';


const menuSwitchStore = useMenuSwitchStore();
const { collapsed } = storeToRefs(menuSwitchStore);
const { toggleCollapsed } = menuSwitchStore;

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
.p-menu {
	margin: 16px 16px 16px 16px;
	background-color: #fff;
	border-radius: 16px;
	overflow: hidden;
	position: sticky;
	top: 16px;
	z-index: 100;
	max-height: calc(100vh - 32px);
	box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.menu-logo {
	padding: 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	> img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: #fff;
		padding: 10px;
		box-sizing: content-box;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	}
}

.menu-switch {
	padding: 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	&::before {
		content: '';
		width: 100%;
		height: 50%;
		bottom: 0;
		position: absolute;
		box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
		background-color: #fff;
	}
	&::after {
		content: '';
		position: absolute;
		width: 45px;
		height: 45px;
		box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		z-index: -1;
	}

	.n-icon {
		cursor: pointer;
		position: relative;
		z-index: 100;
		color: rgb(250, 50, 76);
		border-radius: 50%;
		width: 45px;
		background-color: #fff;
		transition: transform 0.4s ease;
	}
	.rotate-icon {
		transform: rotate(180deg);
	}
}
</style>

<style>
.p-menu-scroll {
	max-height: 50vh;
}
</style>
