<script setup lang="ts">
import { Back, MoreFilled,ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const toBack = () => {
	router.push({
		path: '/workOrder'
	})
}
const activities = [
	{
		content: 'Custom icon',
		timestamp: '2018-04-12 20:46',
		size: 'large',
		type: 'primary',
		icon: MoreFilled
	},
	{
		content: 'Custom color',
		timestamp: '2018-04-03 20:46',
		color: '#0bbd87'
	},
	{
		content: 'Custom size',
		timestamp: '2018-04-03 20:46',
		size: 'large'
	},
	{
		content: 'Custom hollow',
		timestamp: '2018-04-03 20:46',
		type: 'primary',
		hollow: true
	}
]
</script>

<template>
	<div class="find" style="display: flex; flex-direction: column">
		<div class="find-hd" style="display: flex; flex-direction: row">
			<div class="fin-hd-item dashboadrd-panel" style="background-color: #03568e; display: flex; align-items: center">
				<div style="width: 9%">
					<img src="@/assets/images/third.png" alt="" />
				</div>
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">我的工单</span>
			</div>
		</div>

		<div class="backBox" style="position: fixed; /* height: 49px; */ margin-top: 50px">
			<ul class="backContent">
				<li style="flex: 2.5">
					<el-button style="color: #fff" link @click="toBack"
						><el-icon :size="30"><Back /></el-icon
					></el-button>
				</li>
				<li class="backTitle">进度追踪</li>
			</ul>
		</div>
		<div class="content" style="flex: 1">
			<ul style="height: 100%; display: flex; flex-direction: column">
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">工单号</div>
					<div style="flex: 1; display: contents">202308210001</div>
				</div>
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">报单时间</div>
					<div style="flex: 1; display: contents">2023-08-21 15:55</div>
				</div>
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">联系人</div>
					<div style="flex: 1; display: contents">尹梓源</div>
				</div>
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">联系电话</div>
					<div style="flex: 1; display: contents">19546100201</div>
				</div>
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">具体位置</div>
					<div style="flex: 1; display: contents">南指廊</div>
				</div>
				<div class="ulBox">
					<div style="flex: 1; font-weight: bold">问题描述</div>
					<div style="flex: 1; display: contents">29号廊桥扶梯处不锈钢护角变形</div>
				</div>
				<div class="deliveryImages">
					<div style="flex: 1; font-weight: bold">交付图片</div>
					<li class="container">
						<img src="../../assets/images/bg.jpg" class="img" />
					</li>
				</div>
				<div class="deliveryImagesTwo">
					<div style="flex: 1; font-weight: bold">进度展示</div>
					<li class="container">
						<!-- <img src="../../assets/images/bg.jpg" class="img" /> -->
						<el-timeline>
							<el-timeline-item style="margin-bottom: 0;height: 50px;" v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
								{{ activity.content }}
							</el-timeline-item>
						</el-timeline>
					</li>
				</div>
				<!-- <div class="ulBox">
						<div style="flex: 1; font-weight: bold">派单时间</div>
						<div style="flex: 1; display: contents">2023-08-21 15:55</div>
					</div>
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">等级</div>
						<div style="flex: 1; display: contents">紧急</div>
					</div> -->
				<!-- <div style="text-align: center; gap: 55px" class="footerBox">
						<el-button size="large" style="font-size: 14px; flex: 1; background-color: #70b603; color: #ffff">接单</el-button>
						<el-button size="large" style="font-size: 14px; flex: 1; background-color: #a30014; color: #ffff">退单</el-button>
					</div> -->
			</ul>
		</div>
	</div>
</template>

<style scoped>
.content ul {
    column-count: 2;
    column-gap: 10px;
}

.img {
	border-radius: 10px;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}
.container {
	width: 230px;
	height: 230px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px 5px;
}
.footerBox {
	display: flex;
	flex-direction: row;
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	padding: 5px;
}
.deliveryImages {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(205, 205, 206, 0.5);
	height: 100%;
	/* align-items: center; */
	justify-content: center;
	font-size: 16px;
	padding: 5px;
}
.deliveryImagesTwo {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(205, 205, 206, 0.5);
	height: 100%;
	/* align-items: center; */
	justify-content: center;
	font-size: 16px;
	padding: 5px;
}
.deliveryImagesTwo::after {
	content: '';
	height: 100px;
	display: block;
}
.ulBox {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid rgba(205, 205, 206, 0.5);
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	padding: 5px;
}
.content {
	height: 100%;
	background-color: #ffff;
}
.content::before {
	content: '';
	height: 90px;
	display: block;
}
.backBox {
	background-color: #027db4;
	height: 50px;
	width: 100%;
}
.backBox::after {
	content: '';
	height: 50px;
	display: block;
}
.backContent {
	height: 100%;
	display: flex;
	align-items: center;
}
.backContent::after {
	content: '';
	height: 50px;
	display: block;
}
.backTitle {
	flex: 3;
	color: #ffff;
	font-size: 16px;
	font-weight: bold;
}
.detailBox {
	height: 30%;
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: row;
}
.boxLeft {
	background-color: #027db4;
	flex: 1;
	height: 100px;
}
.boxRight {
	background-color: #f2f2f2;
	flex: 2;
	display: flex;
	flex-direction: column;
}
.timeBox {
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.liTop {
	border-bottom: 1px solid #ffff;
	font-size: 18px;
	padding: 10px;
	color: #ffff;
}
.liBottom {
	font-size: 18px;
	padding: 10px;
	color: #ffff;
}
.Unaccepted {
	width: 80%;
	height: 100px;
	margin: 0 auto;
	/* background-color: #6b778c; */
	display: flex;
	margin-bottom: 50px;
}
.find {
	width: 100%;
	height: 130vh;
	overflow-y: hidden;
}
.el-tabs__item.is-active {
	color: rgb(218, 16, 16);
}
.demo-tabs > .el-tabs__content {
	height: 1000px;
	padding: 32px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}
</style>
