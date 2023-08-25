<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Back } from '@element-plus/icons-vue'
import { ElMessageBox, TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
import router from '../../../router'
// finditem.value = res.data
const toBack= () =>{
	router.push({
		path:'/message'
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
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">工单-接单</span>
			</div>
		</div>
		<div class="backBox">
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
			<div class="content">
				<ul style="height: 100%; display: flex; flex-direction: column">
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">工单号</div>
						<div style="flex: 1; display: contents">202308210001</div>
					</div>
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">状态</div>
						<div style="flex: 1; display: contents">已派遣</div>
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
						<div style="flex: 1; font-weight: bold">负责部门</div>
						<div style="flex: 1; display: contents">工程维护科</div>
					</div>
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">具体位置</div>
						<div style="flex: 1; display: contents">南指廊</div>
					</div>
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">问题描述</div>
						<div style="flex: 1; display: contents">29号廊桥扶梯处不锈钢护角变形</div>
					</div>
					<div class="ulBox">
						<div style="flex: 1; font-weight: bold">派单时间</div>
						<div style="flex: 1; display: contents">2023-08-21 15:55</div>
					</div>
					<div style="text-align: center;  gap:55px" class="footerBox">
						<el-button size="large" style="font-size: 14px;flex: 1;background-color: #03568E;color: #ffff;">分派</el-button>
						<el-button size="large" style="font-size: 14px;flex: 1;background-color: #D6D707;color: #ffff;">转单</el-button>
					</div>
					<div style="text-align: center;gap:55px" class="footerBox">
						<el-button size="large" style="font-size: 14px;flex: 1;background-color: #D74507;color: #ffff;">退单</el-button>
						<el-button size="large" style="font-size: 14px;flex: 1;background-color: #36BE06;color: #ffff;">结单</el-button>
					</div>
				</ul>
			</div>
		</div>
	</div>

</template>
	
<style scoped>
.footerBox {
	display: flex;
	flex-direction: row;
	height: 100%;
	align-items: center;
	justify-content: center;
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
	margin-top: 5px;
	height: 100%;
	background-color: #ffff;
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
	height: 90vh;
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