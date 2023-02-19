<template>
	<nav class="nav-bar">
		<transition-group name="fadeInUp">
			<span
				v-for="item in keepAliveRoute"
				:key="item.path"
				@click.stop="handleNavClick(item)"
				:class="$route.path === item.path ? 'span-active' : ''"
			>
				<n-icon :component="item.meta.icon"></n-icon>

				<n-ellipsis style="max-width: 45px">
					{{ item.name }}
				</n-ellipsis>

				<n-icon
					size="15"
					@click.stop="handleNavClose(item)"
					class="close-icon"
					v-if="keepAliveRoute.length > 1"
					:component="CloseCircle"
				></n-icon>
			</span>
		</transition-group>
		<HeaderDropdown v-if="keepAliveRoute.length > 1"></HeaderDropdown>
	</nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import { CloseCircle } from '@vicons/ionicons5';
import { useKeepAliveRouteListStore } from '@/stores/index';
import HeaderDropdown from './HeaderDropdown.vue';

const KeepAliveRouteListStore = useKeepAliveRouteListStore();
const { keepAliveRoute } = storeToRefs(KeepAliveRouteListStore);

const router = useRouter();
function handleNavClick(item) {
	router.push(item.path);
}

const { removeRoute } = KeepAliveRouteListStore;
const currentRoute = useRoute();
function handleNavClose(item) {
	removeRoute(item, currentRoute);
}
</script>

<style lang="scss" scoped>
.nav-bar {
	background-color: #fff;
	padding: 5px;
	box-sizing: border-box;
	width: 100%;
	height: 35px;
	display: flex;
	gap: 5px;
	align-items: center;
	box-shadow: inset 1px 1px 8px rgba(0, 0, 0, 0.1);
	> span {
		width: 100px;
		display: flex;
		gap: 5px;
		height: 100%;
		align-items: center;
		padding: 0 10px 0 8px;
		border-radius: 4px;
		color: #697372;
		background-color: rgba(#697372, 0.1);
		cursor: pointer;
		font-size: 12px;

		&:hover {
		.close-icon  {
				opacity: 1;
			}
		}
	}
	.span-active {
		color: #18a058;
		background-color: rgba(24, 160, 88, 0.1);
	}
	.close-icon {
		margin-left: auto;
		opacity: 0;
		transition: opacity 0.4s ease;
	}
}
</style>
