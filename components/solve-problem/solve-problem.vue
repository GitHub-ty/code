<template>
	<view style="overflow: hidden; box-shadow: 2px 2px 2px #8f8f8f; padding: 20rpx; background-color: #FFFFFF;border-radius: 10px;height: 100%; width: 100%;">
		<view style="display: flex;align-items: center;width: 100%;height: 5%;">
			<image src="../../static/index/Student_issues.png" mode=""></image>
			学生问题
		</view>
		<view style="height: 95%; overflow: scroll;">
			<block v-for="(item,index) in Job_list" :key="index">
				<view @click="solvepro(item)" class="job-list">
					<view class="job-list-inf">
						<image :src="item.head_portrait" mode=""></image>{{item.name}}
					</view>
					<view class="job-list-index">
						<view class="">
							{{item.problem}}
						</view>
						<!-- <image :src="item.Problem_image" mode=""></image> -->
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Job_list: [{
						name: "姓名1",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名2",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名3",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名4",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名5",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名6",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					},
					{
						name: "姓名7",
						head_portrait: "../../static/index/zdtx.jpg",
						problem: "问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1问题内容1",
						Problem_image: "../../static/index/zdtx.jpg"
					}

				]
			};
		},
		methods: {
			solvepro(val) {
				console.log(val)
				uni.navigateTo({
					url: '../../pages/index/solve-the-problem?user=' + JSON.stringify(val),
				})
			}
		}
	}
</script>

<style lang="scss">
	.job-list {
		border: #f2f2f2 1px solid;
		height: 20%;
		margin-bottom: 5px;
		border-radius: 10px;

		&-inf {
			padding-left: 2%;
			height: 80rpx;
			display: flex;
			align-items: center; //垂直居中
			// justify-content: center; //水平居中
			border-bottom: 1px #f2f2f2 solid;
		}

		&-index {
			padding-left: 5%;
			padding-top: 1%;
			width: 85%;
			height: 40%;
			text-indent: 2em;

			view {
				display: -webkit-box;
				word-break: break-all;
				text-overflow: ellipsis;
				overflow: hidden;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}

		}
	}

	image {
		width: 60rpx;
		height: 60rpx;
		border-radius: 25px;
	}
</style>
