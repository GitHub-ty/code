<template>
	<view align="center" class="content">
			<view class="content-teacher" v-for="(item,index) in teacherlist" :key="index">
				{{item}}
				<!-- <view>
					{{item.id}}
				</view> -->

				<!-- <image :src="item.imgurl" mode=""></image>

				<view>
					<view style="margin-left: 20rpx;">
						{{item.name}}
					</view>
				</view> -->
				<view class="">
					<button @click="tpteacher(item)" style="background-color: #fff;color: #0077DD;" type="default">选择</button>
				</view>
			</view>
	</view>
</template>

<script>
	import JSON from "JSON"
	export default {
		data() {
			return {
				token:"",
				teacherlist:[],
			};
		},
		beforeMount() {
			this.obtainteacher()
		},
		methods: {
			obtainteacher(){
				var that = this
				uni.getStorage({
				    key: 'token',
				    success: function (res) {
						console.log("完善信息1") 
				        console.log(res.data);
						that.token = res.data
						console.log('测试1测试'+that.token)
						uni.request({
							url:"http://192.168.1.126:8080/admin/v1/user/get_tea",
							method:"GET",
							header:{
								'Authorization': that.token,
							},
							success: (res) => {
								console.log(res.data.data.teacher_info)
								that.teacherlist = res.data.data.teacher_info
								console.log(that.teacherlist)
							},
							fail: (res) => {
								console.log("失败")
							}
						})
				    }
				});
			},
			tpteacher(val){
				var that = this
				console.log(val)
				var teacher_name = val
				uni.request({
					url:"http://192.168.1.126:8080/admin/v1/user/tj",
					method:"POST",
					header:{
						Authorization: that.token,
					},
					data:{
						'teacher_name':	val
					},
					
					success(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		&-teacher {
				display: flex;
				align-items: center;
				justify-content: center;
				view{
					width: 20%;
				}
				image {
					border-radius: 25px;
					width: 50px;
					height: 50px;
				}
		}
	}
</style>
