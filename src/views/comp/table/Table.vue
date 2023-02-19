<template>
	<div class="page-table">
		<div class="search-bar">
			<div class="search-form">
				<n-input type="text" placeholder="姓名" clearable v-model:value="searchData.input" />
				<n-select placeholder="年龄" v-model:value="searchData.select" :options="options" />
			</div>
			<div class="btn-group">
				<n-button strong secondary type="primary" @click="handleSearch">
					<template #icon>
						<n-icon><SearchSharp /></n-icon>
					</template>
					搜 索
				</n-button>
				<n-button strong secondary @click="handleReset">
					<template #icon>
						<n-icon><TrashOutline /></n-icon>
					</template>
					重 置
				</n-button>
			</div>
		</div>

		<div class="tool-bar">
			<n-button size="small" type="primary" secondary @click="handleCreate">
				<template #icon>
					<n-icon><AddCircleOutline /></n-icon>
				</template>
				添加
			</n-button>
			<n-button size="small" type="warning" secondary @click="handleEdit">
				<template #icon>
					<n-icon><CreateOutline /></n-icon>
				</template>
				修改
			</n-button>
			<n-button size="small" type="error" secondary @click="handleDelete">
				<template #icon>
					<n-icon><TrashOutline /></n-icon>
				</template>
				删除
			</n-button>
		</div>

		<div class="table-container">
			<n-data-table :bordered="false" :columns="columns" :data="data" :pagination="pagination" />
		</div>
	</div>
</template>

<script setup>
import { h, reactive } from 'vue';
import { useMessage } from 'naive-ui';
import { SearchSharp, TrashOutline, AddCircleOutline ,CreateOutline} from '@vicons/ionicons5';
import { useTableColumn } from '@/hooks/useTableColumn';
const message = useMessage();
const tableColumn = useTableColumn();

function handleSend(row) {
	message.info(JSON.stringify(row));
}

const columns = [
	{
    type: "selection",
  },
	{
		title: '姓名',
		key: 'name',
	},
	{
		title: '年龄',
		key: 'age',
	},
	{
		title: '完成度',
		width: '180',
		key: 'progress',
		render: row => tableColumn.renderProgress(row),
	},
	{
		title: '名言',
		key: 'text',
	},
	{
		title: '标签',
		key: 'tags',
		render: row => tableColumn.renderTag(row, 'tags'),
	},
	{
		title: 'Action',
		key: 'actions',
		render: row => tableColumn.renderButton(row, handleSend),
	},
];

const data = [
	{
		key: 0,
		name: '何小虎',
		progress: 88,
		age: 26,
		text: '欲买桂花同载酒，终不似，少年游。',
		tags: ['伤感', '怀旧'],
	},
	{
		key: 1,
		name: '陆游',
		progress: 68,
		age: 42,
		text: '夜阑卧听风吹雨，铁马冰河入梦来。',
		tags: ['陆游'],
	},
	{
		key: 2,
		name: '李白',
		progress: 28,
		age: 32,
		text: '桃花流水窅然去，别有天地非人间。',
		tags: ['李白', '唐'],
	},
	{
		key: 3,
		name: '鲁迅',
		progress: 38,
		age: 32,
		text: '空谈之类，是谈不久，也谈不出什麽来的，它始终被事实的镜子照出原形，拖出尾巴而去。',
		tags: ['鲁迅', '民国'],
	},
	{
		key: 4,
		name: '鲁迅',
		progress: 56,
		age: 32,
		text: '？？什么？，又是我说的？',
		tags: ['鲁迅', '民国'],
	},
	{
		key: 5,
		name: '0.0张',
		progress: 66,
		age: 32,
		text: '伤心秦汉经行处，宫阙万间都做了土。兴，百姓苦；亡，百姓苦。',
		tags: ['当今', '中国'],
	},
	{
		key: 6,
		name: '列宁',
		progress: 78,
		age: 32,
		text: '宁要好梨一个，不要烂梨一筐。积极肯干和忠心耿耿的人即使只有两三个，也比十个朝气沉沉的人强。',
		tags: ['列宁', '苏联'],
	},
];

const pagination = {
	pageSize: 10,
};

const searchData = reactive({});

const options = (() => {
	let res = [];
	for (let i = 1; i < 40000; i++) {
		res[i] = { label: `${i}`, value: i };
	}
	return res;
})();

function handleSearch() {
	message.success(JSON.stringify(searchData));
}
function handleReset() {
	for (let key of Object.keys(searchData)) {
		searchData[key] = null;
	}
}


function handleCreate(){
	message.success('假装调用接口添加！~~~~')
}
function handleEdit(){
	message.success('整个也是假的修改！~~~~')
}
function handleDelete(){
	message.success('貌似删除不掉！~~~~')
}
</script>

<style lang="scss" scoped>
.page-table {
	padding: 50px 20px 20px 20px;
	box-shadow: 0 0 5px rgba(0,0,0,.3);
	border-radius: 8px;
	background-color: #FFF;
	.search-bar {
		width: 100%;
		display: flex;
		.search-form {
			width: 500px;
			display: flex;
			gap: 30px;
		}
		.btn-group {
			display: flex;
			gap: 10px;
			margin-left: auto;
		}
	}

	.tool-bar {
		margin: 20px 0;
		display: flex;
		gap: 10px;
	}
	.table-container {
	}
}
</style>
