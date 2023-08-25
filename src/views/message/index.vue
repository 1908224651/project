<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User, Location } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox, TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
let findlist = ref(['找工作', '部落知识', '求职那些事', '打工生活', '晒工资'])
let finditem = ref()
const router = useRouter()
onMounted(async () => {
	let res = await axios.get('http://127.0.0.1:7003/api/finditem') //请求地址
	finditem.value = res.data
})
const labelPosition = ref('right')
const submit = () => {
	ElMessageBox.alert('已交给下一部门处理', '提交成功', {
		confirmButtonText: 'OK'
	})
}
const topath = () => {
	router.push({
		path: '/unacceptedOrders'
	})
}
const toCompleted = () => {
	router.push({
		path: '/Completed'
	})
}
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab, event)
}
const toInProgress = () => {
	router.push({
		path:'/inProgress'
	})
}
const activeName = ref('first')
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
		<div>
			<el-tabs stretch="true" v-model="activeName" class="demo-tabs" @tab-click="handleClick">
				<el-tab-pane label="未接单" name="first">
					<div class="Unaccepted" style="margin-top: 25px" v-for="i in 3" @click="topath">
						<div class="boxLeft">
							<ul class="timeBox">
								<li class="liTop">08-21</li>
								<li class="liBottom">15:55</li>
							</ul>
						</div>
						<div class="boxRight">
							<ul class="detailBox" style="margin: 7px 12px">
								<li style="margin-right: 55px; font-size: 18px; flex: 2">202308210001</li>
								<li style="color: #a30014; font-size: 18px; flex: 1">未接单</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><User /></el-icon><span style="padding-left: 10px">尹梓源</span>
								</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><Location /></el-icon><span style="padding-left: 10px">29号廊桥扶梯处不锈钢护角变形</span>
								</li>
							</ul>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="进行中" name="second">
					<div class="Unaccepted" style="margin-top: 25px" v-for="i in 3" @click="toInProgress">
						<div class="boxLeft">
							<ul class="timeBox">
								<li class="liTop">08-21</li>
								<li class="liBottom">15:55</li>
							</ul>
						</div>
						<div class="boxRight">
							<ul class="detailBox" style="margin: 7px 12px">
								<li style="margin-right: 55px; font-size: 18px; flex: 2">202308210001</li>
								<li style="color: #027db4; font-size: 18px; flex: 1">进行中</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><User /></el-icon><span style="padding-left: 10px">尹梓源</span>
								</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><Location /></el-icon><span style="padding-left: 10px">29号廊桥扶梯处不锈钢护角变形</span>
								</li>
							</ul>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="已完成" name="third">
					<div class="Unaccepted" style="margin-top: 25px" v-for="i in 3" @click="toCompleted">
						<div class="boxLeft">
							<ul class="timeBox">
								<li class="liTop">08-21</li>
								<li class="liBottom">15:55</li>
							</ul>
						</div>
						<div class="boxRight">
							<ul class="detailBox" style="margin: 7px 12px">
								<li style="margin-right: 55px; font-size: 18px; flex: 2">202308210001</li>
								<li style="color: #70b603; font-size: 18px; flex: 1">已完成</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><User /></el-icon><span style="padding-left: 10px">尹梓源</span>
								</li>
							</ul>
							<ul class="detailBox" style="margin-left: 12px">
								<li style="margin-right: 55px; font-size: 14px">
									<el-icon><Location /></el-icon><span style="padding-left: 10px">29号廊桥扶梯处不锈钢护角变形</span>
								</li>
							</ul>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<style scoped>
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
