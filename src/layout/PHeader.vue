<template>
	<div
		class="p-header"
		:style="{
			height: showNavbar ? '100px' : '60px',
		}"
		:class="fixedHeader ? 'fixed-header' : ''"
	>
		<div class="header">
			<HeaderBreadcrumb></HeaderBreadcrumb>
			<div class="p-header-right">
				<div class="p-header-tool">
					<n-icon
						size="20"
						:component="TrailSignOutline"
						@click="showNavbar = !showNavbar"
						:class="showNavbar ? 'icon-active' : ''"
					></n-icon>
					<n-icon
						size="19"
						:component="EyedropOutline"
						@click="fixedHeader = !fixedHeader"
						:class="fixedHeader ? 'icon-active' : ''"
					></n-icon>
				</div>
				<HeaderAvatar></HeaderAvatar>
			</div>
		</div>
		<transition name="fadeInDown">
			<PHeaderNavBar v-show="showNavbar"></PHeaderNavBar>
		</transition>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { EyedropOutline, TrailSignOutline } from '@vicons/ionicons5';
import HeaderBreadcrumb from './header/HeaderBreadcrumb.vue';
import PHeaderNavBar from './header/PHeaderNavBar.vue';
import HeaderAvatar from './header/HeaderAvatar.vue';

const showNavbar = ref(false);
const fixedHeader = ref(false);
</script>

<style lang="scss" scoped>
.p-header {
	z-index: 100;
	margin: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: height 0.6s ease;
	filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
	.header {
		position: relative;
		z-index: 120;
		width: 100%;
		min-height: 60px;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 0 15px 0 0px;
		border-radius: 30px;
		.p-header-right {
			margin-left: auto;
			display: flex;
			align-items: center;
			.p-header-tool {
				display: flex;
				align-items: center;
				margin-right: 50px;
				gap: 8px;

				.n-icon {
					border-radius: 50%;
					padding: 10px;
					box-sizing: content-box;
					cursor: pointer;
					&:hover {
						color: #18a058;
						filter: drop-shadow(0 0 5px rgba(#18a058, 0.5));
					}
				}
				.icon-active {
					color: #18a058;
					filter: drop-shadow(0 0 5px rgba(#18a058, 0.5));
				}
			}
			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: rgba(#ccc, 0.5);
			}
		}
	}
}

.fixed-header {
	position: sticky;
	top: 16px;
}
</style>
