<template>
	<div class="animation-icons">
		<div class="lottie-box" v-for="(item, index) in lotties" :key="index">
			<Lottie
				:options="{
					animationData: item,
					loop: true,
					autoplay: true,
				}"
				:height="300"
				:width="300"
			></Lottie>
		</div>
	</div>
</template>

<script setup>
import Lottie from '@/components/project/Lottie.vue';
import no_dir from '@/assets/lottie/no_dir.json';
import no_task from '@/assets/lottie/no_task.json';
import no_network from '@/assets/lottie/no_network.json';
import no_data from '@/assets/lottie/no_data.json';
import no_info from '@/assets/lottie/no_info.json';
import no_collect from '@/assets/lottie/no_collect.json';

const lotties = [no_dir, no_task, no_network, no_data, no_info, no_collect];
</script>

<style lang="scss" scoped>
.animation-icons {
	// box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
}

.lottie-box{
	box-shadow: 0 0 5px rgba(0,0,0,0.3);
	border-radius: 10px;
	overflow: hidden;
}
</style>
