<template>
	<n-dropdown trigger="hover" :options="options">
		<n-icon class="down-trigger"><Grid /></n-icon>
	</n-dropdown>

	<PModal title="查找路由" v-model:show="show" width="450px">
		<div class="search-container">
			<n-input
				placeholder="关键字搜索"
				clearable
				@input="handleKeywordInput"
				:loading="searchLoading"
			>
				<template #prefix><n-icon :component="Search" /></template>
			</n-input>
			<n-scrollbar class="search-result-scroll">
				<ul class="search-result">
					<li
						v-for="s in searchResult"
						:key="s.originPath || s.path"
						:class="$route.path === s.path || $route.path === s.originPath ? 'li-active' : ''"
						@click="handleLiClick(s)"
					>
						<n-icon size="20" :component="s.meta.icon" />
						<div>
							<span v-html="s.name"></span>
							<span v-html="s.path"></span>
						</div>
					</li>
				</ul>
			</n-scrollbar>
		</div>
		<template v-slot:footer></template>
	</PModal>
</template>

<script setup>
import { reactive, h, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NScrollbar, NPopover, NIcon, NDropdown, NMenu } from 'naive-ui';
import { Grid, Search, CloseCircleOutline } from '@vicons/ionicons5';
import { useKeepAliveRouteListStore } from '@/stores/index';
import PModal from '@/components/project/PModal.vue';

const KeepAliveRouteListStore = useKeepAliveRouteListStore();
const keepAliveRoute = KeepAliveRouteListStore.keepAliveRoute;
const { removeAllRoute } = KeepAliveRouteListStore;

function renderCustomHeader() {
	return h(
		'div',
		{
			class: 'down-header',
		},
		[
			h(
				NPopover,
				{ trigger: 'hover' },
				{
					trigger: () => h(NIcon, { onClick: openSearchModal }, () => h(Search)),
					default: () => '搜索一下！！~~',
				}
			),
			h(
				NPopover,
				{ trigger: 'hover' },
				{
					trigger: () => h(NIcon, { onClick: removeAllRoute }, () => h(CloseCircleOutline)),
					default: () => '关闭全部！！！！！',
				}
			),
		]
	);
}
function renderScrollMenu() {
	return h(NScrollbar, { class: 'dropdown-scroll' }, () =>
		h(
			NMenu,
			{
				options: menuOption,
				iconSize: 16,
				indent: 20,
				class: 'v-nmenu',
				value: currentMenu.value,
				onUpdateValue: handleMenuClick,
			},
			null
		)
	);
}
const options = reactive([
	{
		key: 'header',
		type: 'render',
		render: renderCustomHeader,
	},
	{
		key: 'header-divider',
		type: 'divider',
	},
	{
		key: 'NScrollbar',
		type: 'render',
		render: renderScrollMenu,
	},
]);

// 动态菜单
const menuOption = reactive([]);
watch(
	keepAliveRoute,
	() => {
		menuOption.length = 0;
		for (let item of keepAliveRoute) {
			menuOption.push({
				key: item.path,
				label: item.name,
				icon: () => h(NIcon, null, () => h(item.meta.icon)),
			});
		}
	},
	{ immediate: true }
);

// 菜单根据路由高亮
const route = useRoute();
const currentMenu = ref(route.path);
watch(
	() => route.path,
	() => (currentMenu.value = route.path),
	{ immediate: true }
);
const router = useRouter();
function handleMenuClick(path, menu) {
	router.push(path);
}

// 查找路由
let show = ref(false);
let searchLoading = ref(false);
let searchResult;
let timerID;
function openSearchModal() {
	show.value = true;
	searchResult = reactive([...keepAliveRoute]);
}
// 使用setTimeout 防抖
function handleKeywordInput(value) {
	searchLoading.value = true;
	if (timerID) {
		clearTimeout(timerID);
	}
	timerID = setTimeout(() => {
		searchResult.length = 0;
		for (let k of keepAliveRoute) {
			let { name, path } = k;
			let flag = false;
			if (name.includes(value)) {
				name = name.replaceAll(value, `<strong style="color:#e91e63">${value}</strong>`);
				flag = true;
			}
			if (path.includes(value)) {
				path = path.replaceAll(value, `<strong style="color:#e91e63">${value}</strong>`);
				flag = true;
			}
			if (flag) searchResult.push({ ...k, name, path, originPath: k.path });
		}
		searchLoading.value = false;
	}, 500);
}
function handleLiClick(s) {
	router.push(s.originPath || s.path);
}
</script>

<style lang="scss" scoped>
.search-result {
	list-style: none;
	display: flex;
	flex-flow: column;
	gap: 5px;
	margin-top: 20px;
	> li {
		border-radius: 5px;
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 14px;
		gap: 15px;
		color: #697372;
		background-color: rgba(#697372, 0.1);
		padding: 6px 10px;
		cursor: pointer;
		> div {
			display: flex;
			flex-direction: column;
		}
	}
	> .li-active {
		color: #18a058;
		background-color: rgba(24, 160, 88, 0.1);
	}
}
</style>

<style lang="scss">
.down-trigger {
	margin: 0 10px 0 auto;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	color: #555;
	cursor: pointer;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.down-header {
	display: flex;
	align-items: center;
	padding: 8px 12px;
	gap: 10px;
	.n-icon {
		width: 25px;
		height: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		font-size: 16px;
		color: #555;
		cursor: pointer;
		background-color: rgba(#555, 0.1);
	}
	.n-icon:hover {
		color: #18a058;
	}
}

.v-nmenu {
	display: flex;
	flex-flow: column;
	width: 160px;
	.n-menu-item {
		height: 30px;
		font-size: 12px;
		display: flex;
		align-items: center;
		width: 100%;
		.n-menu-item-content {
			width: 100%;
		}
	}
}

.dropdown-scroll {
	max-height: 50vh;
}

.search-result-scroll {
	max-height: 50vh;
}
</style>
