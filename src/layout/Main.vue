<template>
	<div class="layout-content">
		<n-scrollbar class="scroll-container">
			<router-view></router-view>
		</n-scrollbar>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.layout-content {
	background-color: #eee;
	color: #000;
	flex: 1;
	overflow: hidden;
	// padding: 10px;


	:deep(.scroll-container)  {
		height: 100%;
		overflow: auto;
	}
}
</style>
