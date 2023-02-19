<template>
	<div class="bread">
		<transition-group name="fadeInRight">
			<span v-for="item in breadList" :key="item.path" @click="handleBreadClick(item)">
				{{ item.name }}
			</span>
		</transition-group>
	</div>
</template>

<script setup>
import { watch, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
let breadList = reactive([]);
watch(
	() => route.path,
	() => {
		const matched = route.matched;
		breadList.length = 0;
		for (let i = 1, k = 0; i < matched.length; i++, k++) {
			breadList[k] = matched[i];
		}
	},
	{ immediate: true }
);

const router = useRouter();
function handleBreadClick(item) {
	router.push(item.path);
}
</script>

<style lang="scss" scoped>
.bread {
	margin-left: 20px;
	display: flex;
	align-items: center;
	> span {
		display: flex;
		align-items: center;
		padding: 0 16px 0 16px;
		height: 28px;
		border-radius: 6px 0 0 6px;
		clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%);
		color: #697372;
		background-color: rgba(#697372, 0.1);
		font-size: 14px;
		cursor: pointer;
		&:first-child {
			clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%);
		}
		&:last-child:not(:first-child) {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 8px 50%);
			border-radius: 0px 6px 6px 0px;
		}
		&:hover {
			color: #18a058;
			background-color: rgba(24, 160, 88, 0.1);
		}
	}
}
</style>
