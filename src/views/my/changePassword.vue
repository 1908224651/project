<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

let mymodule1 = ref()
let mymodule2 = ref()
let mymodule3 = ref()

onMounted(async () => {
	//   let res = await axios.get('http://127.0.0.1:7003/api/mymodule1'); //请求地址
	//   let res1 = await axios.get('http://127.0.0.1:7003/api/mymodule2');
	//   let res2 = await axios.get('http://127.0.0.1:7003/api/mymodule3');
	//   mymodule1.value = res.data;
	//   mymodule2.value = res1.data;
	//   mymodule3.value = res2.data;
})
const confirm = () => {
	ElMessageBox.alert('请使用新密码重新登录', '修改成功', {
		// if you want to disable its autofocus
		// autofocus: false,
		confirmButtonText: '确定',
		type: 'success'
	})
}
</script>

<template>
	<!-- <div class="my">
        <div class="my-hd">
            <div class="my-hd-icon">
                <i class="iconfont icon-qiandao1"></i>
                <i class="iconfont icon-saoma"></i>
                <i class="iconfont icon-shezhi"></i>
            </div>
            <div class="my-hd-login">
                <div class="login-img">
                    <img src="@/assets/images/head.png" alt="">
                </div>
                <div class="logn-item">
                    <ul>
                        <li><router-link to="/login">注册</router-link></li>
                        <li><router-link to="/login">登录</router-link></li>
                    </ul>
                    <p>登录后可体验更多的服务</p>
                </div>
            </div>
        </div>
        <div class="my-body">
            <div class="module module1 bg-white">
              <ul>
                <li v-for="v in mymodule1" :key="v.id">
                  <svg class="icon-font">
                    <use :xlink:href="v.icon"></use>
                  </svg>
                  <p>{{v.title}}</p>
                </li>
              </ul>
            </div>
            <div class="module module2 bg-white">
              <h3>房产工具</h3>
              <ul>
                <li v-for="(v,i) in mymodule2" :key="i">
                  <i class="iconfont" :class="v.icon"></i>
                  <p>{{v.title}}</p>
                </li>
              </ul>
            </div>
            <div class="module module3 bg-white">
              <h3>房东服务</h3>
              <ul>
                <li v-for="(v,i) in mymodule3" :key="i">
                  <i class="iconfont" :class="v.icon"></i>
                  <p>{{v.title}}</p>
                </li>
              </ul>
            </div>
        </div>
    </div> -->
	<div class="find find-box">
		<div class="find-hd find-hd-box">
			<div class="fin-hd-item dashboadrd-panel" style="background-color: #03568e; display: flex; align-items: center">
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">修改密码</span>
			</div>
		</div>
		<el-form label-position="right" label-width="100px" style="flex: 2">
			<el-form-item label="新密码："><el-input class="inputWt"></el-input></el-form-item>
			<el-form-item label="确认新密码："><el-input class="inputWt"></el-input></el-form-item>
			<el-form-item style="margin-bottom: 15px">
				<el-button size="large" class="confirmChange" @click="confirm">确认修改</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<style scoped>
.inputWt {
	width: 180px;
}
.find-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.find-hd-box {
	display: flex;
	flex-direction: row;
	height: 100px;
	flex: 1;
}
.confirmChange {
	font-size: 14px;
	background-color: #03568e;
	color: #ffff;
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
	height: 70vh;
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
