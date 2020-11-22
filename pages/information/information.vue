<template>
	<view align="center" class="content">
		<view class="content-test">
			<text>上传</text>
			<!-- <image src="../../static/index/BlackNotes.png" mode=""></image> -->
			<image @click="change_avatar" :src="mationobj.imgurl" mode=""></image>
		</view>
	</view>
</template>

<script>
	import JSON from "JSON"
	export default {
		data() {
			return {
				mationobj: {
					imgurl: "",
					dataimg_name: ""
				},
				// imgurl: "../../static/index/zdtx.jpg",
				// full_name: "",
				// dataimg_name: ""
			};
		},
		mounted() {
			this.sxqq()
		},
		methods: {
			//刷新界面请求数据
			sxqq(){
				var that = this
				uni.request({
					url:"http://192.168.1.105:8080/admin/v1/user/hq",
					method:"GET",
					success:(res) => {
						var img_name=res.data.data.head_portrait
						// that.mationobj.dataimg_name = img_name
						console.log("空"+that.mationobj.dataimg_name)
						var imgurl1 = "http://192.168.1.105:8080/" + img_name
						that.mationobj.imgurl = imgurl1
						console.log(that.mationobj.imgurl)
					}
				})
			},
			change_avatar() {
				var that = this
				// if (!that.mationobj.dataimg_name) {
					// console.log("上传头像")
					// uni.chooseImage({
					// 	sizeType: "original",
					// 	success(res) {
					// 		that.mationobj.imgurl = res.tempFilePaths[0]
					// 		console.log(that.mationobj.imgurl)
					// 		uni.uploadFile({
					// 			url: 'http://192.168.1.105:8080/admin/v1/user/hq',
					// 			fileType: "image",
					// 			filePath: that.mationobj.imgurl,
					// 			name: 'head_portrait',
					// 			formData: {},
					// 			success: (res) => {
					// 				console.log("上传成功")
					// 				console.log(res)
					// 				console.log(res.data);
					// 				var datas = JSON.parse(res.data);
					// 				that.mationobj.dataimg_name = datas.data.head_portrait
					// 				console.log(that.mationobj.dataimg_name)
					// 				that.mationobj.imgurl = "http://192.168.1.105:8080/" + datas.data.head_portrait
					// 				console.log(that.mationobj.imgurl)
					// 				console.log("上传成功")
					// 			}
					// 		});
					// 	}
					// })
				// } else {
					console.log("更改头像")
					uni.chooseImage({
						sizeType: "original",
						success(res) {
							console.log(res.tempFilePaths[0])
							that.mationobj.imgurl = res.tempFilePaths[0]
							console.log(that.mationobj.imgurl)
							uni.uploadFile({
								url: 'http://192.168.1.105:8080/admin/v1/user/hq',
								fileType: "image",
								filePath: that.mationobj.imgurl,
								name: 'head_portrait',
								formData: {
									'head_portraits': `${that.mationobj.dataimg_name}`,
								},
								success: (res) => {
									console.log("更改成功")
									console.log(res.data);
									var datas = JSON.parse(res.data);
									that.mationobj.dataimg_name = datas.data.head_portrait
									console.log(that.mationobj.dataimg_name)
									console.log("http://192.168.1.105:8080/" + datas.data.head_portrait)
									that.mationobj.imgurl = "http://192.168.1.105:8080/" + datas.data.head_portrait
									console.log(that.mationobj.imgurl)
									console.log("更改成功")
								}
							});
						}
					})
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		&-test {
			image {
				border-radius: 25px;
				width: 50px;
				height: 50px;
			}
		}
	}
</style>
