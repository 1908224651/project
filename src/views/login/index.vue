<script setup lang="ts">
import { reactive, ref } from '@vue/runtime-dom'
import { useRouter } from 'vue-router'
const hideRequired = ref<boolean>(true)
const router = useRouter()
const queryForm = reactive<any>({
	username: '',
	password: ''
})
const login = () => {
	router.push({
		path: '/index'
	})
	queryForm.username = ''
	queryForm.password = ''
}
const rules = {
	username: [
		{ required: true, message: 'Please input Activity name', trigger: 'change' },
		{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change' }
	],
	password: [
		{ required: true, message: 'Please input Activity name', trigger: 'blur' },
		{ min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
	]
}
const passwordShow = ref<boolean>(false)
</script>
<template>
	<div style="height: 100vh">
		<ul style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto">
			<li class="container">
				<img src="../../assets/images/bg.jpg" class="img" />
			</li>
			<li class="flex1">
				<p style="color: #333333; font-weight: bold; font-size: 18px">济南机场智慧管控系统</p>
			</li>
			<li style="flex: 2">
				<el-form :model="queryForm" :rules="rules" :hide-required-asterisk="hideRequired">
					<el-form-item label="账号:" prop="username"> <el-input style="width: 200px" v-model="queryForm.username" clearable /> </el-form-item>
					<el-form-item label="密码:" prop="password"> <el-input type="password" show-password style="width: 200px" v-model="queryForm.password" clearable> </el-input> </el-form-item>
				</el-form>
			</li>
			<li style="flex: 2">
				<el-button style="background-color: #03568e; color: #ffff; width: 100px" @click="login">登录</el-button>
			</li>
		</ul>
	</div>
</template>
<style>
.box1 {
	width: 300px;
	height: 300px;
	margin: 0 auto;
	background-color: #bfa;
	background-image: url('../../assets/images/bg.jpg');
	/* background-image:url('./img/中等图jpg.jpg'); */
	background-repeat: no-repeat;
	background-position: center;
}
.container {
	width: 300px;
	height: 300px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.img {
	border-radius: 10px;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}
</style>
