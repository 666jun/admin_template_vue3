<template>
	<div class="header">
		<n-icon size="25" @click="toggleCollapsed" class="toggle-icon" :component="List"></n-icon>
		<HeaderBreadcrumb></HeaderBreadcrumb>
		<HeaderAvatar></HeaderAvatar>	
	</div>
	<HeaderNavBar></HeaderNavBar>
</template>

<script setup>
import { List } from '@vicons/ionicons5';
import { useMenuSwitchStore } from '../stores/index';
import HeaderBreadcrumb from './header/HeaderBreadcrumb.vue';
import HeaderNavBar from './header/HeaderNavBar.vue';
import HeaderAvatar from './header/HeaderAvatar.vue';

const { toggleCollapsed } = useMenuSwitchStore();
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 60px;
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 0 30px 0 10px;
	.avatar {
		margin-left: auto;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: rgba(#ccc, 0.5);
	}
	.toggle-icon {
		cursor: pointer;
		color: #333;
	}
}
</style>
