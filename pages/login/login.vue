<template>
	<!-- 登录 -->
	<view :style="stylewh" class="content">
		<view class="content-test">
			<h2>ACE.JS编程辅助管理系统</h2>
			<view class="content-test-login">
				<h3 style="margin-bottom: 30px;">登录</h3>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/login/Account.png" mode=""></image>
					</view>
					<input placeholder="请输入账号" type="text" v-model="mailbox" />
				</view>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/login/password.png" mode=""></image>
					</view>
					<input v-if="sepass" placeholder="请输入密码" width="70%" type="text" v-model="Password" />
					<input v-else placeholder="请输入密码" width="70%" type="password" v-model="Password" />
					<image @click="hipass()" :src="hidepass" mode=""></image>
					<text style="color:#cdcdcd;">忘记密码？</text>
				</view>
				<p><input style="font-size: 12px;" disabled="false" v-model="error_message"/></p> <!-- 暂时用这个 -->
				<view style="margin-top: 38px;" class="content-test-login-tab1" align="center">
					<u-button @click="Submit" :ripple="true" plain shape="circle" type="primary">登录</u-button>
				</view>
				<view style="margin-top: 15px; margin-right: 185px;" align="right">
					<text>没有账号？<span @click="register()" style="color: #007AFF;">立即注册</span></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//mailbox: "2958624792@qq.com",//测试教师
				mailbox: "1926055471@qq.com", //测试学生
				Password: "123456",
				hidepass: '../../static/login/eyes.png',
				error_message:"", //错误信息
				sepass: "",
				stylewh: {
					width: document.documentElement.clientWidth + 'px', //实时屏幕宽度
					height: document.documentElement.clientHeight + 'px', //实时屏幕高度	
				}
			}
		},
		mounted() {

		},
		onLoad() {

		},
		methods: {
			// 查看密码
			hipass() {
				this.sepass = !this.sepass
				if (this.sepass) {
					this.hidepass = '../../static/login/eye.png'
				} else {
					this.hidepass = '../../static/login/eyes.png'
				}
			},
			Submit() {
				console.log("登录")
				var that = this
				uni.request({
					url: 'http://192.168.1.126:8080/admin/v1/user/login',
					method: "GET",
					data: {
						email: `${this.mailbox}`,
						email_password: `${this.Password}`,
					},
					success: (res) => {
						console.log("判断")
						console.log(res.data.code)
						if(res.data.code === 0){
							that.$store.state.token = res.data.token
							console.log("状态" + "------" + that.$store.state.token)
							uni.setStorage({
								key: 'token',
								data: res.data.token
							})
							uni.request({
								url: "http://192.168.1.126:8080/admin/v1/user/get_all_info",
								method: "GET",
								header: {
									'Authorization': that.$store.state.token,
								},
								success(res) {
									console.log(res.data.msg)
									uni.setStorage({ //保存状态
										key: "user",
										data: res.data.msg,
									})
									console.log("获取信息成功")
									uni.navigateTo({
										url: '../index/index'
									})
								},
								fail(res) {
									console.log(res)
								}
							})
						}else{
							console.log(res.data.msg) //错误信息
							that.error_message = res.data.msg
							console.log(that.error_message)
						}
						
						// uni.setStorage({ //保存状态
						// 	key:"user",
						// 	data:res.data
						// })


						// const value1 = uni.getStorageSync('storage_key');
						// console.log(value1)
						
					},
					fail: (res) => {
						console.log("失败")
						uni.navigateTo({ //测试
							url: '../index/index'
						})
					}
				});
			},
			// 跳转注册
			register() {
				console.log("跳转")
				uni.navigateTo({
					url: '../register/register'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		font-family: SimSun;
		min-width: 3000rpx;
		background-color: #f2f4f7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&-test {
			min-height: 1168rpx;
			min-width: 1800rpx;
			width: 1800rpx;
			height: 584px;
			border-radius: 25px;
			box-shadow: 5px 5px 5px #888888;
			background-color: #FFFFFF;
			font-family: "微软雅黑";
			display: flex;
			flex-direction: column;
			align-items: center;

			// justify-content: center;
			h2 {
				// margin-left: 34%;
				// margin-right: 34%;
				margin-top: 30px;
			}

			&-login {
				margin-top: 64px;
				width: 540px;
				height: 500px;

				&-tab {
					image {
						width: 18px;
						height: 18px;
					}

					text {
						position: absolute;
						margin-left: 280px;
					}

					font-size: 14px;
					display: flex;
					margin-bottom: 24px;
					width: 360px;
					align-items: center;
					border: 1px solid #e3e8f0;
					height:45px;
					border-radius: 25px;
				}

				&-tab1 {
					width: 360px;
				}

				&-tab:hover {
					border: 1px solid #0000ff;
				}

				p {
					color: #FF0000;
					position: absolute;
					font-size: 12px;
					margin-top: -22px;
					margin-left: 20px;
				}
			}
		}
	}
</style>
