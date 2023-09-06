<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Back, Plus } from '@element-plus/icons-vue'
import { ElMessageBox, TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
import router from '../../../router'
// finditem.value = res.data

const dialogVisible = ref(false)
const Visible = ref(false)
const statementVisible = ref(false)
const handleClose = (done: () => void) => {
	ElMessageBox.confirm('Are you sure to close this dialog?')
		.then(() => {
			done()
		})
		.catch(() => {
			// catch error
		})
}
const toBack = () => {
	router.push({
		path: '/message'
	})
}
const assign = () => {
	dialogVisible.value = true
}
const transfer = () => {
	Visible.value = true
}
const statement = () => {
	console.log(11)

	statementVisible.value = true
}
const value = ref([])

const props = {
	expandTrigger: 'hover' as const
}

const handleChange = value => {
	console.log(value)
}
const options = [
	{
		value: 'guide',
		label: 'Guide',
		children: [
			{
				value: 'disciplines',
				label: 'Disciplines',
				children: [
					{
						value: 'consistency',
						label: 'Consistency'
					},
					{
						value: 'feedback',
						label: 'Feedback'
					},
					{
						value: 'efficiency',
						label: 'Efficiency'
					},
					{
						value: 'controllability',
						label: 'Controllability'
					}
				]
			},
			{
				value: 'navigation',
				label: 'Navigation',
				children: [
					{
						value: 'side nav',
						label: 'Side Navigation'
					},
					{
						value: 'top nav',
						label: 'Top Navigation'
					}
				]
			}
		]
	},
	{
		value: 'component',
		label: 'Component',
		children: [
			{
				value: 'basic',
				label: 'Basic',
				children: [
					{
						value: 'layout',
						label: 'Layout'
					},
					{
						value: 'color',
						label: 'Color'
					},
					{
						value: 'typography',
						label: 'Typography'
					},
					{
						value: 'icon',
						label: 'Icon'
					},
					{
						value: 'button',
						label: 'Button'
					}
				]
			},
			{
				value: 'form',
				label: 'Form',
				children: [
					{
						value: 'radio',
						label: 'Radio'
					},
					{
						value: 'checkbox',
						label: 'Checkbox'
					},
					{
						value: 'input',
						label: 'Input'
					},
					{
						value: 'input-number',
						label: 'InputNumber'
					},
					{
						value: 'select',
						label: 'Select'
					},
					{
						value: 'cascader',
						label: 'Cascader'
					},
					{
						value: 'switch',
						label: 'Switch'
					},
					{
						value: 'slider',
						label: 'Slider'
					},
					{
						value: 'time-picker',
						label: 'TimePicker'
					},
					{
						value: 'date-picker',
						label: 'DatePicker'
					},
					{
						value: 'datetime-picker',
						label: 'DateTimePicker'
					},
					{
						value: 'upload',
						label: 'Upload'
					},
					{
						value: 'rate',
						label: 'Rate'
					},
					{
						value: 'form',
						label: 'Form'
					}
				]
			},
			{
				value: 'data',
				label: 'Data',
				children: [
					{
						value: 'table',
						label: 'Table'
					},
					{
						value: 'tag',
						label: 'Tag'
					},
					{
						value: 'progress',
						label: 'Progress'
					},
					{
						value: 'tree',
						label: 'Tree'
					},
					{
						value: 'pagination',
						label: 'Pagination'
					},
					{
						value: 'badge',
						label: 'Badge'
					}
				]
			},
			{
				value: 'notice',
				label: 'Notice',
				children: [
					{
						value: 'alert',
						label: 'Alert'
					},
					{
						value: 'loading',
						label: 'Loading'
					},
					{
						value: 'message',
						label: 'Message'
					},
					{
						value: 'message-box',
						label: 'MessageBox'
					},
					{
						value: 'notification',
						label: 'Notification'
					}
				]
			},
			{
				value: 'navigation',
				label: 'Navigation',
				children: [
					{
						value: 'menu',
						label: 'Menu'
					},
					{
						value: 'tabs',
						label: 'Tabs'
					},
					{
						value: 'breadcrumb',
						label: 'Breadcrumb'
					},
					{
						value: 'dropdown',
						label: 'Dropdown'
					},
					{
						value: 'steps',
						label: 'Steps'
					}
				]
			},
			{
				value: 'others',
				label: 'Others',
				children: [
					{
						value: 'dialog',
						label: 'Dialog'
					},
					{
						value: 'tooltip',
						label: 'Tooltip'
					},
					{
						value: 'popover',
						label: 'Popover'
					},
					{
						value: 'card',
						label: 'Card'
					},
					{
						value: 'carousel',
						label: 'Carousel'
					},
					{
						value: 'collapse',
						label: 'Collapse'
					}
				]
			}
		]
	},
	{
		value: 'resource',
		label: 'Resource',
		children: [
			{
				value: 'axure',
				label: 'Axure Components'
			},
			{
				value: 'sketch',
				label: 'Sketch Templates'
			},
			{
				value: 'docs',
				label: 'Design Documentation'
			}
		]
	}
]
const tags = ref<boolean>(true)
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
		<div class="backBox" style="position: fixed; /* height: 49px; */ margin-top: 50px">
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
					<div class="titleleft">等级</div>
					<div class="titleRight">紧急</div>
				</div>
				<div class="deliveryImages">
					<div class="titleleft">交付图片</div>
					<li class="container">
						<img src="../../../assets/images/bg.jpg" class="img" />
					</li>
				</div>
				<div style="text-align: center" class="footerBox">
					<el-button size="large" class="buttonBox" style="background-color: #03568e" @click="assign">分派</el-button>
					<el-button size="large" class="buttonBox" style="background-color: #d6d707" @click="transfer">转单</el-button>
				</div>
				<div class="footerBoxTwo">
					<el-button size="large" class="buttonBox" style="background-color: #d74507">退单</el-button>
					<el-button size="large" class="buttonBox" style="background-color: #36be06" @click="statement">结单</el-button>
				</div>
			</ul>
		</div>
		<!-- 分派 -->
		<el-dialog v-model="dialogVisible" title="工单分派" width="300px" :before-close="handleClose">
			<el-form label-width="90px">
				<el-form-item label="工单名称">
					<el-cascader popper-class="cls-attr-cascader" style="max-width: 80%" size="small" v-model="value" :options="options" :props="props" :collapse-tags="tags" @change="handleChange" />
				</el-form-item>
				<el-form-item label="工单负责人">
					<el-cascader style="max-width: 80%" size="small" v-model="value" :options="options" :props="props" @change="handleChange" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
				</span>
			</template>
		</el-dialog>
		<!-- 转单 -->
		<el-dialog fullscreen="true" lock-scroll="true" v-model="Visible" title="工单分派" width="80%" :before-close="handleClose">
			<el-form label-width="90px">
				<el-form-item label="工单名称">
					<el-cascader style="max-width: 80%; overflow: auto" size="small" v-model="value" :options="options" :props="props" :collapse-tags="tags" @change="handleChange" />
				</el-form-item>
				<el-form-item label="工单负责人">
					<el-cascader style="max-width: 80%" size="small" v-model="value" :options="options" :props="props" @change="handleChange" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="Visible = false">取消</el-button>
					<el-button type="primary" @click="Visible = false"> 确定 </el-button>
				</span>
			</template>
		</el-dialog>
		<!-- 结单 -->
		<el-dialog v-model="statementVisible" title="结单" width="80%" style="height: 500px; overflow: auto" :before-close="handleClose">
			<el-form label-width="90px">
				<el-form-item label="结单备注">
					<el-input type="textarea" size="small" style="width: 150px"></el-input>
				</el-form-item>
				<el-form-item label="上传图片:" class="m20">
					<el-upload action="#" list-type="picture-card" :auto-upload="false">
						<el-icon><Plus /></el-icon>
					</el-upload>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="statementVisible = false">取消</el-button>
					<el-button type="primary" @click="statementVisible = false"> 确定 </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<style scoped>
.el-dialog__footer{
	text-align: center;
}
.dialog-footer{
	margin-right: 10px;
	text-align: center;
}
.el-cascader-node {
	max-width: 250px !important;
}

.el-scrollbar__wrap {
	width: 100px;
}
.buttonBox {
	font-size: 14px;
	flex: 1;
	color: #ffff;
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
	height: 100%;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	padding: 5px;
	gap: 55px;
}
.footerBoxTwo {
	text-align: center;
	gap: 55px;
	text-align: center;
	display: flex;
	flex-direction: row;
	height: 100%;
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
.content::before {
	content: '';
	height: 80px;
	display: block;
}
.content::after {
	content: '';
	height: 60px;
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
	height: 145vh;
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
