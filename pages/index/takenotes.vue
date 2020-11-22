<template>
	<view class="content">

		<view class="content-index">

			<view style="height: 10%;border-bottom: 2px #f2f2f2 solid;">
				<view class="content-index-button">
					<u-button
					style="margin-right: 0rpx;"
					size="medium"
					@click="submit()"
					:ripple="true"
					plain shape="circle"
					type="primary">
					<b>提交</b></u-button>
				</view>
				<textarea placeholder="请输入标题" maxlength="100" style="font-family: SimSun; font-size: 28px; height: 100%; width: 90%;" cols="50" rows="20"></textarea>
			</view>

			<view style="height: 90%;">
				<view style="height: 60%;border-bottom: 2px #f2f2f2 solid;">
					<textarea placeholder="填写您的问题" maxlength="-1" style="height: 100%; width: 100%;" cols="50" rows="20"></textarea>
				</view>
				<view style="height: 40%;">
					<view style="color: #808080;">
						添加图片说明（最多添加5张）
					</view>
					<shmily-drag-image :list.sync="imglist">
					</shmily-drag-image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imglist: [],
			};
		},
		methods:{
			submit(){
				console.log("提交")
			}
		}
	}
</script>

<style lang="scss">
	.content {
		font-family: SimSun;
		overflow: hidden;
		background-color: #f2f2f2;
		width: 100%;
		height: 1350rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		&-index {
			padding: 20px;
			border-radius: 25px;
			background-color: #FFFFFF;
			width: 75%;
			height: 85%;

			&-button {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 25px;
				float: right;
				width: 7%;
				height: 70%;
			}
		}
	}
</style>
