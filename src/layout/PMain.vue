<template>
	<div class="layout-content">
			<router-view></router-view>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.layout-content {
	color: #000;
	flex: 1;
	border-radius: 10px;
	margin: 16px;
}
</style>
