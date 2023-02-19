<template>
	<div class="header-avatar">
		<n-dropdown :options="options" :onSelect="handleSelect">
			<img class="avatar-img" src="../../assets/img/pinia.svg" alt="avatar" />
		</n-dropdown>
	</div>

	<PModal v-model:show="showSetting" title="系统设置">
		<div class="system-setting">
			<div class="setting-item">
				<span class="setting-item-title">
					<n-icon :component="GridOutline" size="18"></n-icon>
					设置布局
				</span>
				<div class="setting-item-content">
					<n-radio-group v-model:value="layoutValue" :on-update:value="setLayout" name="radiogroup">
						<n-radio
							v-for="l in layouts"
							:key="l.value"
							:value="l.value"
							style="margin-right: 20px"
						>
							{{ l.label }}
						</n-radio>
					</n-radio-group>
				</div>
			</div>

			<div class="setting-item">
				<span class="setting-item-title">
					<n-icon :component="GridOutline" size="18"></n-icon>
					设置~~设置啥好呢！
				</span>
				<div class="setting-item-content">Q:可以设置宇宙的时间吗</div>
				<div class="setting-item-content">A:不可以</div>
			</div>
		</div>

		<template #footer></template>
	</PModal>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { GridOutline } from '@vicons/ionicons5';
import { useSystemSettingStore, useUserLoginStore } from '@/stores/index';
import PModal from '@/components/project/PModal.vue';

const options = [
	{
		label: '用户资料',
		key: 'profile',
	},
	{
		label: '系统设置',
		key: 'setting',
	},
	{
		label: '退出登录',
		key: 'logout',
	},
];

const router = useRouter();
const { logout } = useUserLoginStore();
let showSetting = ref(false);
function handleSelect(key, item) {
	if (key === 'setting') {
		showSetting.value = true;
	}
	if (key === 'logout') {
		logout();
	}
	if(key==="profile"){
		router.push('/about')
	}
}

const layouts = [
	{ value: 'layout_1', label: '传统布局' },
	{ value: 'layout_2', label: '不知道什么布局' },
];
const systemSettingStore = useSystemSettingStore();
const { setLayout } = systemSettingStore;
const layoutValue = computed(() => systemSettingStore.systemSetting.layout);
</script>

<style lang="scss" scoped>
.header-avatar {
	margin-left: auto;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.avatar-img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgba(#ccc, 0.5);
}

.system-setting {
	display: flex;
	flex-flow: column;
	gap: 30px;
}
.setting-item {
	display: flex;
	flex-flow: column;
	gap: 15px;
	.setting-item-title {
		padding: 6px 8px;
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
		background-color: rgba(24, 160, 88, 0.1);
		border-radius: 5px;
		color: #18a058;
		.n-icon {
			color: #18a058;
		}
	}
	.setting-item-content {
		padding-left: 10px;
	}
}
</style>
