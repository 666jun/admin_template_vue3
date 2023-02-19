<template>
	<n-message-provider>
		<div id="root">
			<router-view></router-view>
		</div>
	</n-message-provider>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { NMessageProvider } from 'naive-ui';
</script>

<style scoped></style>
