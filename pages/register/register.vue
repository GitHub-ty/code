<template>
	<!-- 登录 -->
	<view :style="stylewh" class="content">
		<view class="content-test">
			<view @click="retlog()" style="display: flex;margin-left: -480px; margin-top: 30px;" class="">
				<image src="../../static/register/return.png" mode=""></image>
				<view class="">
					返回
				</view>
			</view>
			<view class="content-test-login">
				<h3 style="margin-bottom: 30px;">注册</h3>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/register/mailbox.png" mode=""></image>
					</view>
					<input placeholder="输入邮箱" type="text" v-model="mailbox" />
				</view>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/register/Verification.png" mode=""></image>
					</view>
					<input placeholder="验证码" type="text" v-model="varcode" />
					<view class="wrap">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
						<span style="color: #007AFF;" @tap="getCode">{{tips}}</span>
					</view>
				</view>
				<view style="margin-bottom: 15px;">
					<radio-group name="identity">
						<text style="margin-left: 30px;">您是？</text>
						<label style="margin-left: 30px;">
							<radio @click="type=2" /><text>教师</text>
						</label>
						<label style="margin-left: 30px;">
							<radio @click="type=1" /><text>学生</text>
						</label>
					</radio-group>
				</view>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/register/Real_name.png" mode=""></image>
					</view>
					<input placeholder="请输入你的真实姓名" v-model="full_name" type="text"/>
				</view>
				<view class="content-test-login-tab">
					<view align="center" style="width: 20%;">
						<image src="../../static/login/password.png" mode=""></image>
					</view>
					<input v-if="sepass" placeholder="密码" width="70%" type="text" v-model="Password" />
					<input v-else width="70%" placeholder="密码" type="password" v-model="Password" />
					<image @click="hipass()" :src="hidepass" mode=""></image>
				</view>
				<p v-show="sepass">验证码错误</p> <!-- 暂时用这个 -->
				<view style="margin-top: 38px;" class="content-test-login-tab1" align="center">
					<u-button @click="Submit()" :ripple="true" plain shape="circle" type="primary">提交</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mailbox: "2958624792@qq.com", //邮箱账号
				tips: '', //提示
				seconds: 60, //倒计时
				varcode: "1234", //验证码
				type: "",  //身份 1为教师，2为学生
				full_name: "",
				Password: "1234", //密码
				hidepass: '../../static/login/eyes.png', //密码图标
				sepass: "", //修改图标参数
				// 动态获取屏幕宽高
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
			//返回登录界面
			retlog() {
				console.log("返回登录界面")
				uni.navigateTo({
					url: '../login/login'
				})
			},
			//获取验证码
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					alert('请查看邮箱验证码')
					console.log("获取验证码")
					console.log(this.mailbox)
					uni.request({
						url: 'http://192.168.1.105:8080/admin/v1/user/email',
						data: {
							email: `${this.mailbox}`,
						},
						method: "GET",
						success: (res) => {
							console.log("成功")
						},
						fail: (res) => {
							console.log("失败")
						}
					});
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						// this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			// 查看密码
			hipass() {
				this.sepass = !this.sepass
				if (this.sepass) {
					this.hidepass = '../../static/login/eye.png'
				} else {
					this.hidepass = '../../static/login/eyes.png'
				}
			},
			//提交信息
			Submit() {
				uni.request({
					url: 'http://192.168.1.105:8080/admin/v1/user/email',
					data: {
						email: `${this.mailbox}`,
						code: `${this.varcode}`,
						type: `${this.type}`,
						full_name:`${this.full_name}`,
						email_password: `${this.Password}`,
					},
					method: "POST",
					success: (res) => {
						console.log("成功")
						console.log(res.data.msg)
					},
					fail: (res) => {
						console.log("失败")
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #f2f4f7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&-test {
			min-width: 1100rpx;
			image {
				width: 18px;
				height: 18px;
			}

			width: 1100rpx;
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
				margin-left: -300px;
				margin-top: 30px;
			}

			&-login {
				margin-top: 64px;
				width: 540px;
				height: 500px;
				margin-left: 150px;

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
