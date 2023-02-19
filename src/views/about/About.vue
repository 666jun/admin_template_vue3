<template>
	<div class="about">
		<UserInfo></UserInfo>

		<div class="user-dynamic"></div>
	</div>
</template>

<script setup>
import UserInfo from './components/UserInfo.vue';
</script>

<style lang="scss" scoped>
.about {
	display: flex;
	padding: 10px;
}

.user-dynamic {
	margin-left: 30px;
	flex: 1;
	height: 500px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
</style>
