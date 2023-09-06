<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Back } from '@element-plus/icons-vue'
import { ElMessageBox, TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
import router from '../../../router'
// finditem.value = res.data
const toBack = () => {
	router.push({
		path: '/message'
	})
}
</script>

<template>
	<div class="find" style="display: flex; flex-direction: column">
		<div class="find-hd" style="display: flex; flex-direction: row">
			<div class="fin-hd-item dashboadrd-panel" style="background-color: #03568e; display: flex; align-items: center">
				<div style="width: 9%">
					<img src="@/assets/images/third.png" alt="" />
				</div>
				<span class="titleBox">工单-接单</span>
			</div>
		</div>
		<div class="backBox" style="position: fixed;top: 50px;bottom: 10px;">
			<ul class="backContent">
				<li style="flex: 2.5">
					<el-button style="color: #fff" link @click="toBack"
						><el-icon :size="30"><Back /></el-icon
					></el-button>
				</li>
				<li class="backTitle">工单详情</li>
			</ul>
		</div>

		<div class="content">
			<ul style="height: 100%; display: flex; flex-direction: column">
				<div class="ulBox">
					<div class="titleleft">工单号</div>
					<div class="titleRight">202308210001</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">状态</div>
					<div class="titleRight">已派遣</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">联系人</div>
					<div class="titleRight">尹梓源</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">联系电话</div>
					<div class="titleRight">19546100201</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">负责部门</div>
					<div class="titleRight">工程维护科</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">具体位置</div>
					<div class="titleRight">南指廊</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">问题描述</div>
					<div class="titleRight">29号廊桥扶梯处不锈钢护角变形</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">派单时间</div>
					<div class="titleRight">2023-08-21 15:55</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">接单时间</div>
					<div class="titleRight">2023-08-21 15:55</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">结单时间</div>
					<div class="titleRight">2023-08-21 15:55</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">等级</div>
					<div class="titleRight">紧急</div>
				</div>
				<div class="deliveryImages">
					<div class="titleleft">上报图片</div>
					<li class="container">
						<img src="../../../assets/images/bg.jpg" class="img" />
					</li>
				</div>
				<div class="deliveryImages imageBox">
					<div class="titleleft">交付图片</div>
					<li class="container">
						<img src="../../../assets/images/bg.jpg" class="img" />
					</li>
				</div>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.imageBox::after{
	content: '';
	height: 60px;
	display: block;
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
.deliveryImages {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(205, 205, 206, 0.5);
	height: 100%;
	/* align-items: center; */
	justify-content: center;
	font-size: 16px;
	border-radius: 5px;
	padding: 5px;
}
.footerBox {
	display: flex;
	flex-direction: row;
	height: 15vh;
	align-items: center;
	justify-content: end;
	font-size: 16px;
	padding: 5px;
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
	height: 80px;
	display: block;
}
.backBox {
	background-color: #027db4;
	height: 50px;
	width: 100%;
}
.backContent {
	height: 100%;
	display: flex;
	align-items: center;
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
	height: 155vh;
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
