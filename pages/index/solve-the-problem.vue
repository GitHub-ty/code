<template>
	<view class="content">

		<view style="margin-left: 3%;" class="content-index">

			<view style="height: 10%;border-bottom: 2px #f2f2f2 solid;">
				<view class="content-index-button">

				</view>
				<view style="font-family: SimSun; font-size: 28px; height: 100%; width: 90%;">学生问题</view>
			</view>

			<view style="height: 90%;">
				<view style="height: 39%;border-bottom: 2px #f2f2f2 solid;">
					1
				</view>
				<view style="height: 61%;">
					1
				</view>
			</view>

		</view>

		<view style="margin-left: 4%;" class="content-index">

			<view style="height: 10%;border-bottom: 2px #f2f2f2 solid;">
				<view class="content-index-button">
					<u-button style="margin-right: 0rpx;" size="medium" @click="submit()" :ripple="true" plain shape="circle" type="primary">
						<b>完成</b></u-button>
				</view>
				<view style="font-family: SimSun; font-size: 28px; height: 100%; width: 90%;">教师解答</view>
			</view>

			<view style="height: 90%;">
				<view style="height: 39%;border-bottom: 2px #f2f2f2 solid;">
					<textarea placeholder="填写您的问题" maxlength="-1" style="height: 100%; width: 100%;" cols="50" rows="20"></textarea>
				</view>
				<view style="height: 61%;">
					<view style="color: #808080;">
						添加图片说明（最多添加6张）
					</view>
					<shmily-drag-image :number="6" :list.sync="imglist">
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
				user: { //学生问题信息
				},
				imglist: [],
				stuuser: [{
					name: "姓名",
					tx: "头像",
					wt: '问题',
					tx1: ['','','','']
				}, {
					name: "姓名",
					tx: "头像",
					wt: '问题',
					tx2: "图片"
				}]
			};
		},
		onLoad(data) {
			this.user = JSON.parse(data.user)
			console.log(this.user)
		}
	}
</script>

<style lang="scss">
	.content {
		font-family: SimSun;
		overflow: hidden;
		background-color: #f2f2f2;
		width: 100%;
		height: 1500rpx;
		display: flex;
		align-items: center;
		// justify-content: center;

		&-index {
			padding: 20px;
			border-radius: 25px;
			background-color: #FFFFFF;
			width: 45%;
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
