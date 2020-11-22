<template>
	<view class="content">
		<!-- 选择教师弹框 -->
		<view v-if="$store.state.user_information.teacher_name" class="content-popup">
			<!-- 遮罩透明度 -->
			<view class="content-popup-transparent"></view>

			<view class="content-popup-choice">
				<view class="content-popup-choice-teacher" v-for="(item,index) in $store.state.Teacher_name" :key="index">
					<view>
						<view style="width: 120px; margin-left: 20rpx;">
							{{item}}
						</view>
					</view>
					<view class="">
						<button @click="tpteacher(item)" style="background-color: #fff;color: #0077DD;" type="default">选择</button>
					</view>
				</view>
			</view>
		</view>


		<!-- 动态背景 -->
		<vue-particles style="pointer-events:none;position:absolute;z-index:1;width: 100%;height: 100%;" color="#ffff7f"
		 :particleOpacity="0.7" :particlesNumber="35" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1"
		 :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab"
		 :clickEffect="true" clickMode="push">
		</vue-particles>

		<view class="content-tanbar" style="align-items: center; justify-content: center; display: flex; background-color: #fffbfc;height: 100rpx;width: 100%;">
			<h1>ACE.JS系统</h1>
			<!-- <view @mouseover="Popupover()" @mouseout="Popupout()" class="content-tanbar-information"> -->
			<view class="content-tanbar-information">
				<image @click="change_avatar()" style="border-radius: 25px; width: 80rpx;height: 80rpx;;" :src="mationobj.imgurl" mode=""></image>
				<span style="size: 13px; margin-top: 20rpx;">{{username}}</span>
				<!-- <view :style="stylepop">修改信息</view> -->
			</view>
		</view>
		<view class="content-index">
			<view class="content-index-tabs">
				<view class="content-index-tabs-mation">
					<image :src="mationobj.imgurl" mode=""></image>
					<view align="center" style="size: 15x;">{{username}}</view>
					<button @click="$store.state.customer_type=!$store.state.customer_type">切换</button>
				</view>
				<view v-if="$store.state.customer_type==1" style="height: 75%;" class="content-index-tabs-list">
					<view @click="fun1 = 1">
						<image :src="LabelBar.ViewNotes.imgsrc1" mode=""></image>
						{{LabelBar.ViewNotes.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.ViewNotes.imgsrc2" mode=""></image>
					</view>
					<view @click="fun1 = 2">
						<image :src="LabelBar.ProGramming.imgsrc1" mode=""></image>
						{{LabelBar.ProGramming.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.ProGramming.imgsrc2" mode=""></image>
					</view>
					<view @click="fun1 = 3">
						<image :src="LabelBar.AskQuestions.imgsrc1" mode=""></image>
						{{LabelBar.AskQuestions.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.AskQuestions.imgsrc2" mode=""></image>
					</view>
				</view>
				<view v-else class="content-index-tabs-list">
					<view @click="fun1 = 4">
						<image :src="LabelBar.SolveProblem.imgsrc1" mode=""></image>
						{{LabelBar.SolveProblem.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.SolveProblem.imgsrc2" mode=""></image>
					</view>
					<view @click="fun1 = 5">
						<image :src="LabelBar.PublishResources.imgsrc1" mode=""></image>
						{{LabelBar.PublishResources.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.PublishResources.imgsrc2" mode=""></image>
					</view>
					<view @click="fun1 = 6">
						<image :src="LabelBar.ViewStatus.imgsrc1" mode=""></image>
						{{LabelBar.ViewStatus.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.ViewStatus.imgsrc2" mode=""></image>
					</view>
					<view @click="fun1 = 7">
						<image :src="LabelBar.SetPermissions.imgsrc1" mode=""></image>
						{{LabelBar.SetPermissions.name}}
						<image style="margin-left: 150rpx;" :src="LabelBar.SetPermissions.imgsrc2" mode=""></image>
					</view>
				</view>
			</view>

			<view style="background-color: #e8eaed;height: 100%;width: 85%;padding-left: 5%;padding-top: 4%;" class="">
				<view style="width: 75%;height: 85%;">
					<view-notes v-if="fun1==1"></view-notes>
					<pro-gramming v-if="fun1==2"></pro-gramming>
					<ask-questions v-if="fun1==3"></ask-questions>
					<solve-problem v-if="fun1==4"></solve-problem>
					<publish-resources v-if="fun1==5"></publish-resources>
					<view-status v-if="fun1==6"></view-status>
					<set-permissions v-if="fun1==7"></set-permissions>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				binding_teacher: false, //判断是否选择老师
				teacherlist: [{ //模拟教师信息
					id: "1",
					name: 'A教师',
				}, {
					id: "2",
					name: 'B教师',
				}, {
					id: "3",
					name: 'C教师',
				}, {
					id: "4",
					name: 'D教师',
				}, {
					id: "5",
					name: 'E教师',
				}],
				stylepop: { //鼠标停留离开显示
					display: "none",
				},
				popupdata: 'none', //动态显示隐藏
				fun1: 4, //控制组件渲染
				imgsrc: "../../static/index/zdtx.jpg", //头像
				username: "彼岸渡",
				mationobj: {
					imgurl: "../../static/index/zdtx.jpg",
					dataimg_name: ""
				},
				//侧面标签栏状态
				LabelBar: {
					ViewNotes: {
						id: "1",
						imgsrc1: "../../static/index/GreyNotes.png",
						name: "查看笔记",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					ProGramming: {
						id: "2",
						imgsrc1: "../../static/index/programming.png",
						name: "在线编程",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					AskQuestions: {
						id: "3",
						imgsrc1: "../../static/index/problem.png",
						name: "问题合集",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					SolveProblem: {
						id: "4",
						imgsrc1: "../../static/index/solve_problem.png",
						name: "解决问题",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					PublishResources: {
						id: "5",
						imgsrc1: "../../static/index/Publishing_resources.png",
						name: "发布资源",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					ViewStatus: {
						id: "6",
						imgsrc1: "../../static/index/view_status.png",
						name: "查看状态",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
					SetPermissions: {
						id: "7",
						imgsrc1: "../../static/index/set_permissions.png",
						name: "设置权限",
						imgsrc2: "../../static/index/WhiteArrow.png",
					},
				},
			};
		},
		mounted() {
			// this.cons()
			// 获取老师信息表
			// this.Improveinformation()
		},
		methods: {
			// cons(){
			// 	console.log("教师姓名"+this.$store.state.user_information.teacher_name)
			// },
			//选择老师
			tpteacher(val){
				var that = this
				console.log(val)
				that.$store.state.user_information.Teacher_name = val
				uni.request({
					url:"http://192.168.1.126:8080/admin/v1/user/tj",
					method:"POST",
					header:{
						'Authorization': that.$store.state.token,
					},
					data:{
						'teacher_name':	val
					},
					
					success(res) {
						console.log(res)
					}
				})
			},
			
			
			
			//鼠标悬停离开事件
			// Popupover() {
			// 	this.stylepop.display = "block"
			// },
			// Popupout() {
			// 	this.stylepop.display = "none"
			// },
			//上传头像
			change_avatar() {
				var that = this
				console.log("更改头像")
				uni.chooseImage({
					sizeType: "original",
					success(res) {
						console.log(res.tempFilePaths[0])
						that.mationobj.imgurl = res.tempFilePaths[0]
						console.log(that.mationobj.imgurl)
						uni.uploadFile({
							url: 'http://192.168.1.126:8080/admin/v1/user/hq',
							fileType: "image",
							filePath: that.mationobj.imgurl,
							name: 'head_portrait',
							header:{
								'Authorization': that.$store.state.token,
							},
							formData: {
								'head_portraits': `${that.mationobj.dataimg_name}`,
							},
							success: (res) => {
								console.log("更改成功")
								console.log(res.data);
								var datas = JSON.parse(res.data);
								that.mationobj.dataimg_name = datas.data.head_portrait
								console.log(that.mationobj.dataimg_name)
								console.log("http://192.168.1.126:8080/" + datas.data.head_portrait)
								that.mationobj.imgurl = "http://192.168.1.126:8080/" + datas.data.head_portrait
								console.log(that.mationobj.imgurl)
								console.log("更改成功")
							}
						});
					}
				})
			},

			//弹出选择老师
			Improveinformation() {
				var that = this
				uni.getStorage({
					key:'user',
					success(res) {
						console.log(res.data)
						that.$store.state.user_information = res.data
						that.imgsrc=that.$store.state.user_information.head_portrait
						that.username=that.$store.state.user_information.full_name
						
					}
				});
				if (!that.$store.state.user_information.teacher_name) {
					alert("请您选择老师"),
						console.log("选择老师"),
						uni.request({
							url:"http://192.168.1.126:8080/admin/v1/user/get_tea",
							method:"GET",
							header:{
								'Authorization': that.$store.state.token,
							},
							success: (res) => {
								// console.log(res.data.data.teacher_info)
								that.$store.state.Teacher_name = res.data.data.teacher_info
								console.log(that.$store.state.Teacher_name)
							},
							fail: (res) => {
								console.log("失败")
							}
						})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 1500rpx;
		width: 100%;
		min-width: 3000rpx;
		min-height: 1500rpx;
		overflow: hidden;

		&-popup {
			height: 1500rpx;
			min-height: 1500rpx;
			width: 100%;
			width: 3000rpx;
			position: absolute;
			z-index: 999;
			display: flex;
			align-items: center;
			justify-content: center;

			&-transparent {
				background-color: #f2f2f2;
				opacity: 0.8;
				width: 100%;
				height: 100%;

			}

			&-choice {
				position: absolute;
				width: 55%;
				height: 75%;
				border-radius: 15px;
				padding: 15px;
				background-color: #ffffff;

				&-teacher {
					display: flex;
					align-items: center;
					justify-content: center;

					view {
						width: 20%;
					}

					image {
						border-radius: 25px;
						width: 50px;
						height: 50px;
					}
				}
			}


		}

		&-tanbar {
			background-color: #000000;
			height: 100rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fffbfc;

			&-information {
				display: flex;
				margin-left: 70%;
				width: 10%;
			}
		}

		&-index {
			height: 1400rpx;
			width: 100%;
			display: flex;

			&-tabs {
				height: 100%;
				width: 15%;
				min-width: 450rpx;
				background-color: #ffffff;

				&-mation {
					border-bottom: 1px solid #e6e6e6;
					height: 25%;
					margin: 0 auto;
					background-color: #ffffff;

					image {
						margin-left: 85px;
						margin-top: 50px;
						width: 60px;
						height: 60px;
						border-radius: 30px;
					}
				}

				&-list {
					height: 75%;

					view {
						width: 100%;
						height: 9%;
						display: flex;
						align-items: center;
						// justify-content: center;
						line-height: 100rpx;

						image {
							margin-left: 48rpx;
							margin-right: 24rpx;
							height: 22px;
							width: 22px;
						}
					}

					view:hover {
						background-color: #2d85ff;
					}
				}
			}
		}
	}
</style>
