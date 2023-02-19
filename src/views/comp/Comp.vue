<template>
	<div class="comp">
		<RouterView></RouterView>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.comp{
	// padding: 20px;
	// box-shadow: 0 0 5px rgba(0,0,0,.3);
	// border-radius: 8px;
	// background-color: #FFF;
	padding: 10px;
}
</style>
