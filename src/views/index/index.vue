<script setup>
import {ref,onMounted} from 'vue'
import Header from './header.vue'
import Headerimg from './header-img.vue'
import Navmenu from './navmenu.vue'
import Houseprices from './houseprices.vue'
import Banner from './banner.vue'
import Content from './content.vue'
let title = ref('首页')
let adBack = ref(false);   //开屏广告的显示与隐藏, true 为显示
let n = ref(5);     //默认的时间
let timer = null;   //定时器，作用就是让5秒的时间为0停止
function play(){
    n.value--;
    if(n.value==0){
        adBack.value = false;   //当n为0的时候，隐藏
    }
}
function autoplay(){
    timer=setInterval(play,1000);
}
onMounted(()=>{
    autoplay()
});
function jump(){
    adBack.value = false;
    clearInterval(timer);   //定时器清除
}

</script>

<template>
<div class="page-container">
     <!-- 开屏广告 -->
    <div class="spread" v-show="adBack">
        <span class="jump" @click="jump">点击跳转<b>{{n}}</b></span>
    </div>
    <div v-if="!adBack">
        <Header />
        <Headerimg />
        <Navmenu />
        <!-- <Houseprices /> -->
        <!-- <Banner /> -->
        <!-- <Content /> -->
    </div>
</div>
</template>

<style scoped>

</style>
