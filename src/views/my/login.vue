<script setup>
import {ref} from 'vue'
// useRouter相当于this.$router 
// 引入路由
import {useRouter} from 'vue-router'
const router = useRouter();

function goBack(){
    router.push('/my');
}
</script>

<template>
    <div class="login">
        <div class="login-list">
            <div class="login-hd">
                <div @click="goBack">X</div>
                <h2>登录后更精彩</h2>
                <p>实现一个人对于家的梦</p>
                <input type="text" placeholder="请输入手机号">
                <input type="password" placeholder="请输入密码">
                <div class="agreement">
                    <input type="checkbox">
                    <span>阅读并同意《用户服务协议》及《隐私政策》</span>
                </div>
                <button>登录</button>
                <div class="login-title">
                    <span>手机验证码登录</span>
                    <span>忘记密码</span>
                </div>
            </div>
            <div class="login-way">
                <p>其它方式登录</p>
                <ul>
                    <li>
                        <i class="iconfont icon-weixin"></i>
                        <p>微信</p>
                    </li>
                    <li>
                        <i class="iconfont icon-QQ"></i>
                        <p>QQ</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
