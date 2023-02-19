<template>
	<div class="layout" v-if="layout === 'layout_1'">
		<div class="layout-menu">
			<Menu></Menu>
		</div>
		<div class="layout-main">
			<Header></Header>
			<Main></Main>
		</div>
	</div>

	<div class="p-layout" v-if="layout === 'layout_2'">
		<div class="p-layout-bg"></div>
		<div class="layout-p-menu">
			<PMenu></PMenu>
		</div>
		<n-scrollbar class="layout-p-main">
			<PHeader></PHeader>
			<PMain></PMain>
		</n-scrollbar>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useSystemSettingStore } from '@/stores/index';
import Menu from './Menu.vue';
import Header from './Header.vue';
import Main from './Main.vue';
import PMenu from './PMenu.vue';
import PHeader from './PHeader.vue';
import PMain from './PMain.vue';

const layout = computed(() => useSystemSettingStore().systemSetting.layout);
</script>

<style lang="scss" scoped>
.layout {
	width: 100%;
	height: 100vh;
	display: flex;
	.layout-menu {
		background-color: #fff;
		border-right: 1px solid #eee;
	}
	.layout-main {
		flex: 1;
		display: flex;
		flex-flow: column;
	}
}

.p-layout {
	display: flex;
	height: 100vh;
	width: 100%;
	z-index: 10;
	.p-layout-bg {
		position: fixed;
		width: 100%;
		height: 100vh;
		background: url('@/assets/img/wave.svg') no-repeat;
		background-size: cover;
		z-index: -1;
	}
	.layout-p-menu {
	}

	.layout-p-main {
		flex: 1;
	}
}
</style>
