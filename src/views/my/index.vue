<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
const change = () => {
	router.push({
		path: '/changePassword'
	})
}
const logOut = () => {
	router.push({
		path: '/login'
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
	<div class="find" style="display: flex; flex-direction: column">
		<div class="find-hd" style="display: flex; flex-direction: row">
			<div class="fin-hd-item dashboadrd-panel" style="background-color: #03568e; display: flex; align-items: center">
				<span style="color: white; font-size: 18px; vertical-align: bottom; margin-left: 15px">济南机场航站楼智慧管控系统</span>
			</div>
		</div>
		<div class="content">
			<ul style="height: 100%; display: flex; flex-direction: column">
				<div class="ulBox">
					<div class="titleleft">姓名</div>
					<div class="titleRight">尹梓源</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">联系电话</div>
					<div class="titleRight">19546100201</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">部门</div>
					<div class="titleRight">航管部</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">科室</div>
					<div class="titleRight">智慧运控科</div>
				</div>
				<div class="ulBox">
					<div class="titleleft">外包单位</div>
					<div class="titleRight">智慧运控</div>
				</div>
				<div style="text-align: center; gap: 55px" class="footerBox">
					<el-button size="large" style="font-size: 14px; flex: 1; background-color: #03568e; color: #ffff" @click="change">修改密码</el-button>
					<el-button size="large" style="font-size: 14px; flex: 1; background-color: #a30014; color: #ffff" @click="logOut">退出登录</el-button>
				</div>
			</ul>
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
