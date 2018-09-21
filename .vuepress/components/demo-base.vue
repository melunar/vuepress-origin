<template>
	<button :style="this.options&&this.options.style"  :disabled="cdisabled" @click="clickHandle">
		<i v-if="cicon" :class="cicon"></i>
		<slot>
			<span v-html="clabel"></span>
		</slot>
	</button>
</template>
<script>
export default {
	props: {
		options: {
			type: Object
		},
		disabled: {},
		color: {},
		size: {},
		label: {},
		icon: {},
		text: {},
		link: {}
	},
	data() {
		return {
			widgetValue: this.value
		};
	},
	computed: {
		cdisabled() {
			return this.disabled === true || (this.options && this.options.disabled === true);
		},
		ccolor() {
			return this.color || (this.options && this.options.color) || "";
		},
		csize() {
			return this.size || (this.options && this.options.size) || "normal";
		},
		clabel() {
			return this.label || this.text || (this.options && this.options.label) || "";
		},
		cicon() {
			return this.icon || (this.options && this.options.icon) || "";
		}
	},
	methods: {
		clickHandle() {
			this.$emit("click");
		}
	}
};
</script>
<style>
</style>
