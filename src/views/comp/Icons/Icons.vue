<template>
	<div class="icons">
		<div>
			<h3>普通图标</h3>

			<div class="icons-box">
				<n-icon
					color="#FA324C"
					size="25"
					v-for="(item, index) in XIcons"
					:key="index"
					:component="item"
				></n-icon>
			</div>
		</div>

		<div>
			<h3>多彩图标（iconfont）</h3>

			<div class="icons-box">
				<IconFont
					v-for="(item, index) in IconFonts"
					:key="index"
					:name="item"
					class="icon-font"
				></IconFont>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref } from 'vue';
import IconFont from '@/components/project/IconFont.vue';
import {
	Accessibility,
	Home,
	Person,
	Umbrella,
	Alarm,
	AlertCircleSharp,
	ApertureOutline,
	AppsSharp,
	Apps,
	ArchiveSharp,
	ArrowRedoCircle,
	ArrowUpCircleSharp,
	Bag,
	BagRemove,
	Balloon,
	BasketballOutline,
	BatteryHalf,
	Beaker,
	Bookmarks,
	Calendar,
	Chatbox,
	ColorFilter,
	CogOutline,
	Cube,
} from '@vicons/ionicons5';

const XIcons = [
	Accessibility,
	Home,
	Person,
	Umbrella,
	Alarm,
	AlertCircleSharp,
	ApertureOutline,
	AppsSharp,
	Apps,
	ArchiveSharp,
	ArrowRedoCircle,
	ArrowUpCircleSharp,
	Bag,
	BagRemove,
	Balloon,
	BasketballOutline,
	BatteryHalf,
	Beaker,
	Bookmarks,
	Calendar,
	Chatbox,
	ColorFilter,
	CogOutline,
	Cube,
];

const IconFonts = [
	'icon-zhaopinqiuzhi',
	'icon-ershoujiaoyi',
	'icon-shangpuchuzu',
	'icon-fangwuchuzu',
	'icon-kaitonghuiyuan',
	'icon-yaoqinghaoyou',
	'icon-huangguanyonghu',
	'icon-guanjunjiangbei',
	'icon-zhuzhaixiaoqu',
	'icon-qiyezhaopin',
	'icon-xitonggonggao',
	'icon-shequpinglun',
	'icon-shoucangwenjian',
	'icon-xiangce',
	'icon-huodonglipin',
	'icon-wodeqianbao',
	'icon-hunshasheying',
	'icon-huore',
	'icon-lvyoulvhang',
	'icon-rili1',
	'icon-zixun',
	'icon-gongzi',
	'icon-shuji',
	'icon-dianzan',
];
</script>

<style lang="scss" scoped>
.icons {
	display: flex;
	gap: 50px;
	> div {
		width: 350px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		background-color: #fff;
		padding: 20px;

		> h3 {
			text-align: center;
		}
		.icons-box {
			display: flex;
			gap: 6px;
			flex-wrap: wrap;
			justify-content: space-evenly;
			margin-top: 20px;
			> .n-icon {
				background-color: #eee;
				padding: 10px;
				box-sizing: content-box;
				border-radius: 5px;
				cursor: pointer;
			}
			.icon-font {
				font-size: 35px;
				background-color: #eee;
				padding: 5px;
				box-sizing: content-box;
				border-radius: 5px;
				cursor: pointer;
			}
		}
	}
}
</style>
