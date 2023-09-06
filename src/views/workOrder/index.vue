<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User, Location } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox, TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const orderList = [
	{
		number: '202308210001',
		text: '29号廊桥扶梯处不锈钢护角变形',
		derparment: '工程维护科'
	},
	{
		number: '202308210001',
		text: 'hhhhhhhhhh',
		derparment: '工程维hrtert护科'
	},
	{
		number: '202308210001',
		text: '29号廊桥扶梯处不锈钢护角变形',
		derparment: '工程维护科'
	},
	{
		number: '202308210001',
		text: 'hhhhhhhhhh',
		derparment: '工程维hrtert护科'
	},
	{
		number: '202308210001',
		text: '29号廊桥扶梯处不锈钢护角变形',
		derparment: '工程维护科'
	},
	{
		number: '202308210001',
		text: 'hhhhhhhhhh',
		derparment: '工程维hrtert护科'
	},
	{
		number: '202308210001',
		text: '29号廊桥扶梯处不锈钢护角变形',
		derparment: '工程维护科'
	},
	{
		number: '202308210001',
		text: 'hhhhhhhhhh',
		derparment: '工程维hrtert护科'
	},
]
const aaa = () => {
	orderList.forEach(item => {
		console.log(item.number)
	})
}
onMounted(() => {
	aaa()
})
const toDetail = () => {
	router.push({
		path:'/orderDetail'
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
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">我的工单</span>
			</div>
		</div>
		<div class="orderBox" v-for="i in orderList">
			<ul class="orderContent" @click="toDetail">
				<div class="orderLeft">
					<span class="font-16">{{ i.number }}</span>
					<span class="font-16">{{ i.text }}</span>
				</div>
				<div class="orderRight">{{ i.derparment }}</div>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.font-16 {
	font-size: 16px;
}
.orderBox {
	background-color: #f2f2f2;
	width: 80%;
	height: 100px;
	margin: 15px auto;
	border-radius: 5px;
}
.orderContent {
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
}
.orderLeft {
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 8px;
}
.orderRight {
	background-color: #027db4;
	flex: 1.6;
	border-radius: 5px 5px;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffff;
	font-size: 18px;
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
	border-radius: 10px 0 0 10px;
}
.boxRight {
	background-color: #f2f2f2;
	flex: 2;
	border-radius: 0 10px 10px 0;
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
	border-radius: 15px;
	margin-bottom: 50px;
}
.find {
	width: 100%;
	height: 100%;
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
