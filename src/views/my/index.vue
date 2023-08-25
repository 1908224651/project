<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'

let mymodule1 = ref();
let mymodule2 = ref();
let mymodule3 = ref();

onMounted(async()=>{
//   let res = await axios.get('http://127.0.0.1:7003/api/mymodule1'); //请求地址
//   let res1 = await axios.get('http://127.0.0.1:7003/api/mymodule2');
//   let res2 = await axios.get('http://127.0.0.1:7003/api/mymodule3');
//   mymodule1.value = res.data;
//   mymodule2.value = res1.data;
//   mymodule3.value = res2.data;
});

</script>

<template>
    <div class="my">
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
    </div>
</template>

<style scoped>

</style>
