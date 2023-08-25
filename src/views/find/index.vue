<script setup>
import { ref, onMounted } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()

onMounted(async () => {
	// let res = await axios.get('http://127.0.0.1:7003/api/finditem') //请求地址
	// finditem.value = res.data
})
const labelPosition = ref('right')
const submit = () => {
	ElMessageBox.alert('已交给下一部门处理', '提交成功', {
		confirmButtonText: 'OK'
	})
}
const cancel = () => {
	router.push({
		path: '/index'
	})
}
</script>

<template>
	<ul class="find" style="display: flex; flex-direction: column">
		<div class="find-hd" style="display: flex; flex-direction: row">
			<div class="fin-hd-item dashboadrd-panel" style="background-color: #03568e; display: flex; align-items: center">
				<div style="width: 9%">
					<img src="@/assets/images/third.png" alt="" />
				</div>
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">工单-报单</span>
			</div>
		</div>
		<div style="flex: 1">
			<el-form inline label-position="right" style="margin: 35px" label-width="100px">
				<el-form-item label="问题描述：" style="margin: 20px">
					<el-input size="" clearable />
				</el-form-item>
				<el-form-item label="具体位置：" style="margin: 20px">
					<el-input size="" clearable />
				</el-form-item>
				<el-form-item label="上传图片:" style="margin: 20px">
					<el-upload action="#" list-type="picture-card" :auto-upload="false">
						<el-icon><Plus /></el-icon>
					</el-upload>
				</el-form-item>
			</el-form>
		</div>
		<div class="buttonBox">
			<el-button @click="submit" class="button" size="large" style="background-color: #70b603;">提交</el-button>
			<el-button @click="cancel" class="button" size="large" style="background-color: #a30014;">取消</el-button>
		</div>
	</ul>
</template>

<style scoped>
.button {
	font-size: 14px;
	flex: 3;
	color: #ffff;
}
.buttonBox {
	display: flex;
	flex: 2;
	height: 100%;
	align-items: center;
	justify-content: center;
	gap: 55px;
	margin: 25px;
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
.find {
	width: 100%;
	height: 100vh;
}
</style>
