<template>
	<view style="box-shadow: 2px 2px 2px #8f8f8f; padding: 20rpx; background-color: #FFFFFF;	 border-radius: 10px;height: 100%; width: 100%;">
		<view style="height: 100%;overflow: hidden;">
			<view style="display: flex;">
				<image style="width: 88rpx; height: 88rpx;" src="../../static/index/portrait.png" mode=""></image>
				<u-button style="margin-right: 0rpx;" size="medium" @click="Submit()" :ripple="true" plain shape="circle" type="primary">
					<b>提交</b></u-button>
			</view>
			<view style="background-color: #FFFFFF; border-top:1px solid #f2f2f2;width: 100%;height: 50%;">
				<textarea placeholder="填写您的问题" v-model="stu.problem" maxlength="-1" style="height: 100%; width: 100%;" cols="50"
				 rows="20"></textarea>
			</view>
			<view style="background-color: #FFFFFF; border-top:1px solid #f2f2f2;width: 100%;height: 35%;">
				<view style="color: #808080;">
					添加图片说明（最多添加5张）
				</view>
				<shmily-drag-image :list.sync="stu.imglist">
				</shmily-drag-image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 //存放图片地址
				stu: {
					head_portrait: "",
					name: "学生姓名",
					problem: "",
					imglist: []
				}
			};
		},
		methods: {
			Submit() {
				var that = this
				uni.uploadFile({
					url: 'http://192.168.1.126:8080/admin/v1/user/ask_question',
					fileType: "image",
					filePath: that.stu.imglist[0],
					name: 'problem_image',
					header:{
						'Authorization': that.$store.state.token
					},
					formData: {
						'problem': that.stu.problem,
					},
					success: (res) => {
						console.log(res)
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
