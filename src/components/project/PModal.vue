<template>
	<n-modal
		v-bind="$attrs"
		class="p-modal"
		preset="card"
		:style="{
			width: $attrs.width || '600px',
		}"
		:bordered="false"
		:segmented="{
			content: 'soft',
			footer: 'soft',
		}"
	>
		<slot></slot>
		<template #footer>
			<slot name="footer" v-if="$slots.footer"></slot>
			<template v-else>
				<n-button type="info" @click="$emit('update:show', false)">确 认</n-button>
				<n-button strong secondary type="info" @click="$emit('update:show', false)">取 消</n-button>
			</template>
		</template>
	</n-modal>
</template>

<style lang="scss">
.p-modal {
	.n-card-header {
		border-bottom: 1px solid #eee;
		padding: 12px 20px;
		.n-card-header__main {
			text-align: center;
		}
	}
	.n-card__content,
	.n-card__footer {
		border: none;
	}
	.n-card__footer {
		display: flex;
		gap: 10px;
		justify-content: center;
	}
}
</style>
