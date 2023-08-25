<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
let bannerList = ref();
let n = ref(0);  //初始化

function Play(){
    setInterval(autoPlay,2000)  //定时器，过2秒
};
function autoPlay(){
    n.value++;
    if(n.value==bannerList.value.length){
        n.value=0;
    }
};
onMounted(async()=>{
    Play();
    // let res = await axios.get('http://127.0.0.1:7003/api/bannerList'); //请求地址
    // bannerList.value = res.data;
})
</script>

<template>
  <div class="banner">
	<div class="flexColumn" style="align-items: center">
		<div style="display: flex; margin: 15px 15px">
			<div class="box" style="height: 100%">
				<!-- 报单 -->
				<ul style="display: flex; align-items: center; margin-left: 20px">
					<li style="width: 33%; height: 33%">
						<img src="@/assets/images/first.png" alt="" />
					</li>
					<li style="margin-left: 26px">
						<p style="font-weight: bold; font-size: 18px; color: white">报单</p>
					</li>
				</ul>
			</div>
			<div class="box" style="height: 100%">
				<!-- 报单 -->
				<ul style="display: flex; align-items: center">
					<li style="width: 30%; height: 30%; margin-left: 20px">
						<img src="@/assets/images/second.png" alt="" />
					</li>
					<li style="margin-left: 26px">
						<p style="font-weight: bold; font-size: 18px; color: white">接单</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="boxBottom" style="height: 100%">
			<!-- 报单 -->
			<ul style="display: flex; align-items: center">
				<li style="width: 30%; height: 30%; margin-left: 20px">
					<img src="@/assets/images/third.png" alt="" />
				</li>
				<li style="margin-left: 26px">
					<p style="font-weight: bold; font-size: 18px; color: white">我的工单</p>
				</li>
			</ul>
		</div>
	</div>

	
    <img :src="v.img_url" v-for="(v,i) in bannerList" :key="v.id" v-show="n==i"/>
    <ul>
      <li v-for="(v,i) in bannerList" :key="i"  :class="n==i?'select':''"></li>
    </ul>
  </div>
</template>

<style scoped>

</style>