<template>
	<div class="login">
		<!-- <div class="login-bg-l"></div> -->

		<!-- <NButton @click="login">登录</NButton> -->

		<div class="login-box">
			<div class="login-box-left">
				<img :src="getAssetsImg('work.svg')" />
			</div>
			<div class="login-form">
				<h1>welcome~~</h1>
				<span>请输入账号密码登录系统。</span>
				<div class="login-form-main">
					<n-form ref="formRef" :show-label="false" :model="model" size="large">
						<n-form-item>
							<n-input placeholder="用户名" v-model:value="model.username" type="text" />
						</n-form-item>
						<n-form-item>
							<n-input placeholder="密码" v-model:value="model.password" type="password" />
						</n-form-item>
						<n-form-item>
							<n-button type="primary" @click="login">登 录</n-button>
						</n-form-item>
					</n-form>
				</div>

				<div class="login-box-bottom">
					<span>忘记密码？</span>
					<span>注册新账号</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMessage } from 'naive-ui';
import { useRouter } from 'vue-router';
import { useUserLoginStore } from '@/stores/index';
import { getAssetsImg } from '@/utils/index';

const router = useRouter();
const userLoginStore = useUserLoginStore();


const formRef = ref(null);
const message = useMessage();
const model = reactive({
	username: null,
	password: null,
});


function login() {
	userLoginStore.setUser({
		isLogin: true,
	});
	router.push('/home');
	message.success('欢迎回来~~~~')
}
</script>

<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('../../assets/img/login-bg.jpg') no-repeat;
	background-size: 100% 100%;
	.login-box {
		height: 450px;
		background-color: rgba(255, 255, 255, 0.8);
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		display: flex;
		border-radius: 30px;
		overflow: hidden;

		.login-box-left {
			width: 550px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20px;
			flex: 1;
			background: linear-gradient(to top right, #78e6be, #84d000);
		}
		.login-form {
			width: 350px;
			flex-shrink: 0;
			padding: 30px;
			> span {
				color: rgb(154, 152, 152);
				margin-top: 10px;
				display: block;
				letter-spacing: 1px;
			}

			.login-form-main {
				margin-top: 40px;
			 .n-button {
					width: 100%;
				}
			}
		}
		.login-box-bottom {
			margin-top: 10px;
			font-size: 12px;
			display: flex;
			gap: 60px;
			justify-content: center;
			color: #44b43b;
			> span {
				cursor: pointer;
			}
			> span:hover {
				color: #457afa;
			}
		}
	}
}
.login-bg-l {
	position: fixed;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	background: url('../../assets/img/login-left-bg.svg') no-repeat;
	background-size: cover;
}
</style>
