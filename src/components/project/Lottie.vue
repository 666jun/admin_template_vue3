<template>
	<div ref="bodyAnimation" :style="style"></div>
</template>

<script setup>
import { ref, reactive, onMounted ,onUnmounted} from 'vue';
import lottie from 'lottie-web';
const props = defineProps({
	options: {
		type: Object,
		required: true,
	},
	width: {
		type: Number,
		default: 200,
	},
	height: {
		type: Number,
		default: 200,
	},
});

const style = reactive({
	width: props.width ? `${props.width}px` : '100%',
	height: props.height ? `${props.height}px` : '100%',
});
const bodyAnimation = ref(null);

let lottieIns = null;
onMounted(() => {
	lottieIns=lottie.loadAnimation({
		container: bodyAnimation.value, // the dom element that will contain the animation
		renderer: 'svg',
		loop: props.options.loop !== false,
		autoplay: props.options.autoplay !== false,
		animationData: props.options.animationData,
		//   path: sheepJson // the path to the animation json
	});
});

onUnmounted(()=>{
	lottieIns.destroy();
	lottieIns = null;
})
</script>

<style lang="scss" scoped></style>
