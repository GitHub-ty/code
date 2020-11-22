<template>
	<view style="overflow: auto; padding: 20rpx; background-color: #FFFFFF;	 border-radius: 10px; box-shadow: 2px 2px 2px #8f8f8f ;height: 100%; width: 100%;">
		<view class="tabbar">
			<u-button size="medium" @click="takenotes()" :ripple="true" plain shape="circle" type="primary">
				<image src="../../static/component/view-notes/notes.png" mode=""></image>
				<b>写笔记</b>
			</u-button>
		</view>
		<view class="Notes-index">
			<view class="Notes-index-notes">
				<image src="../../static/component/view-notes/notebook.png" mode=""></image>
				<text>笔记本</text>
			</view>
			<view class="Notes-index-index">
				<u-search color="#808080" @blur="searchshow=false" @focus="searchshow=true" :style="searchshow?'box-shadow: 0px 0px 5px #8bb7ff;':''"
				 class="Notes-index-index-search" v-model="searchtext" @custom="searchindex()" bg-color="#ffffff" :clearabled="true"></u-search>
			</view>
		</view>
		<view class="Notes-subject">
			<view style="padding-left: 20rpx;padding-top: 20rpx; height: 120rpx;">
				<image style="width: 40rpx;height: 40rpx;" src="../../static/index/portrait.png" mode=""></image>
				<text>用户名</text>
			</view>

			<view style="overflow: scroll; margin-left: 100rpx; width: 85%;height: 685rpx;">
				<view v-for="data in 10" style="margin-bottom: 65rpx;">
					<view style="height: 60rpx;">
						<b>标题1</b>
					</view>
					<view class="Notes-subject-index">
						<view class="">
							文字内容1
						</view>
						<image src="../../static/index/zdtx.jpg" mode=""></image>
						<image src="../../static/index/zdtx.jpg" mode=""></image>
						<image src="../../static/index/zdtx.jpg" mode=""></image>
						<image src="../../static/index/zdtx.jpg" mode=""></image>
					</view>
				</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchtext: "",
				searchshow: false,
			};
		},
		methods: {
			takenotes(){
				uni.navigateTo({
					url:'../../pages/index/takenotes'
				})
			},
			searchindex() {
				console.log(this.searchtext)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		height: 120rpx;
		border-bottom: 1px #f2f2f2 solid;
		display: flex;
		align-items: center;
		margin-left: -1450rpx;

		image {
			width: 30rpx;
			height: 30rpx;
		}
	}

	.Notes-index {

		height: 120rpx;
		border-bottom: 1px #f2f2f2 solid;
		display: flex;
		align-items: center;

		&-notes {
			padding-left: 20rpx;
			color: #9fa9bc;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-index {
			margin-left: 1200rpx;
			height: 72rpx;
			width: 400rpx;
			color: #9fa9bc;
			display: flex;
			align-items: center;

			// justify-content: center;
			&-search {
				border-radius: 25px;
				border: 1px #f0f0f0 solid;
				// box-shadow: 0px 0px 5px #8bb7ff;
			}

			&-searchs {
				// border-radius: 25px;
				// border: 1px #f0f0f0 solid;
				box-shadow: 0px 0px 5px #8bb7ff;
			}
		}

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.Notes-subject { //问题区域	
		&-index{
			image{
				width: 240rpx;
				height: 240rpx;
			}
		}
	}
</style>
