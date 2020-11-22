<template>
	<view>
		<view class="">
			<ul style="margin-left: -30px;">
				<view style="width: 100px; border: 1px solid #808080;" class="">123</view>
				<view class="">123</view>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			console.log("测试213")
			console.log(this.$store.state.isShow + "测试")
		},
		methods: {

		}
	}
</script>

<style>

</style>
