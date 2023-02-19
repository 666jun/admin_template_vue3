<template>
 	<div class="user-info">
			<img class="user-info-bg" :src="getAssetsImg('card-bg.svg')" alt="" />
			<img :src="getAssetsImg('pinia.svg')" />

			<h3>小何同志</h3>
			<div class="user-info-1">
				<p v-for="l in list" :key="l.label">
					<span>{{ l.label }}</span>
					<span>{{ l.value }}</span>
				</p>
			</div>

			<div class="user-info-2">不以物喜，不以己悲。</div>

			<div class="user-btn-bar">
				<button class="custom-btn btn-1"><span>关 注</span></button>
				<button class="custom-btn btn-1"><span>动 态</span></button>
			</div>
		</div>
</template>

<script setup>
import { getAssetsImg } from '@/utils/index';

const list = [
	{ label: '粉丝', value: '8.8万' },
	{ label: '关注', value: '260' },
	{ label: '点赞', value: '88.8万' },
];
</script>

<style lang="scss" scoped>
.user-info {
	width: 330px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	padding: 30px 0;
	display: flex;
  flex-shrink: 0;
	flex-flow: column;
	align-items: center;
	position: relative;
	overflow: hidden;
  height: fit-content;
	.user-info-bg {
		position: absolute;
		top: 0;
		filter: drop-shadow(0 2px 5px rgba(254, 100, 49, 0.8));
	}
	> img:not(.user-info-bg) {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #eee;
		z-index: 5;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	}
	> h3 {
		margin: 10px 0 8px 0;
	}
	.user-info-1 {
		display: flex;
		> p {
			display: flex;
			flex-flow: column;
			align-items: center;
			gap: 3px;
			padding: 0 20px;
			font-size: 14px;
			> span:nth-child(1) {
				color: #555;
				font-weight: 600;
			}
			> span:nth-child(2) {
				color: #555;
				// color: rgb(254, 100, 49);
			}
		}
		> p:nth-child(2) {
			position: relative;
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				width: 3px;
				height: 50%;
				border-radius: 5px;
				background-color: rgb(254, 100, 49);
				transform: translateY(-50%);
				box-shadow: 0 0 6px rgba(254, 100, 49, 0.5);
			}
			&::before {
				left: 0;
			}
			&::after {
				right: 0;
			}
		}
	}

	.user-info-2 {
		margin: 10px 0;
	}

	.user-btn-bar {
		display: flex;
		gap: 20px;
	}
}
</style>