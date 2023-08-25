<script setup>
import {ref} from 'vue'
let title = ref('首页')
let footerList = ref([
    {title:'首页',icon:'icon-shouye',path:'/index'},
    // {title:'发现',icon:'icon-faxian1',path:'/find'},
    // {title:'消息',icon:'icon-xiaoxi1',path:'/message'},
    {title:'我的',icon:'icon-wode-',path:'/my'},
])
</script>

<template>
<footer>
    <div class="footer">
       <div class="footer-list" style="background-color: rgb(3 86 142);">
            <ul>
                <li v-for="(v,i) in footerList" :key="i">
                   <router-link :to="v.path">
                        <i class="iconfont" :class="v.icon" style="color: #ffff;"></i>
                        <span style="color: #ffff;">{{v.title}}</span>
                   </router-link>
                </li>
            </ul>
       </div>
    </div>
</footer>
</template>

<style scoped>
/* v-bind:用于绑定数据和元素的属性 */
</style>
