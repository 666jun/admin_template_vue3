<template>
	<div class="home">
	<div class="home-content">
		<h1>呃呃呃~~</h1>
		<div class="msg">
			闲来无事捣鼓着vue3练练手的中后台模板，很轻量，主要工具技术如下↓↓↓↓↓↓↓↓↓↓。
		</div>
		<div class="info">
			<div v-for="item in card" :key="item.text" class="info-item">
				<img :src="item.img" />
				<span>{{ item.text }}</span>
				<n-button strong secondary type="primary" @click="handleGoto(item.link)">访问官网</n-button>
			</div>
		</div>
	</div>
		
	</div>
</template>

<script setup>
import { getAssetsImg } from '@/utils/index';
const card = [
	{
		text: '热门前端框架Vue3',
		img: getAssetsImg('Vue.svg'),
		link: 'https://cn.vuejs.org/',
	},
	{
		text: '新一代前端开发与构建工具Vite',
		img: getAssetsImg('vite.svg'),
		link: 'https://vitejs.cn/',
	},
	{
		text: 'Vue3专用状态管理库Pinia',
		img: getAssetsImg('pinia.svg'),
		link: 'https://pinia.web3doc.top/',
	},
	{
		text: 'Naive-UI,偶然发现的一个Vue3框架的UI组件库，个人感觉还不错的~~~',
		img: getAssetsImg('naive.svg'),
		link: 'https://www.naiveui.com/zh-CN/light',
	},
];

function handleGoto(link) {
	window.open(link);
}
</script>

<style lang="scss" scoped>
.home {
	padding: 10px;

	.home-content{
		box-shadow: 0 0 5px rgba(0,0,0,.3);
		padding: 20px;
		border-radius: 8px;
		background-color: #FFF;
	}
	.msg {
		letter-spacing: 3px;
	}
	.info {
		margin-top: 30px;
		display: flex;
		gap: 20px;
		.info-item {
			width: 230px;
			padding: 25px;
			border-radius: 5px;
			box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.3);
			display: flex;
			flex-direction: column;
			gap: 20px;
			align-items: center;
			> img {
				width: 180px;
				height: 180px;
			}
			.n-button {
				margin-top: auto;
			}
		}
	}
}
</style>
