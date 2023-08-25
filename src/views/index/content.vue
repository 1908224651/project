<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'

let contentList = ref();

onMounted(async()=>{
//   let res = await axios.get('http://127.0.0.1:7003/api/list'); //请求地址
//   contentList.value = res.data;
});
</script>

<template>
    <div class="content">
        <ul>
            <li v-for="(v,i) in contentList" :key="i">
                <div class="content-item">
                    <div class="content-img">
                        <img :src="v.img_url" alt="">
                    </div>
                    <div class="content-info">
                        <h4>{{v.title}}</h4>
                        <p>建面 {{v.area}}m<sup>2</sup></p>
                        <div class="content-price">
                            <span>{{v.price}}</span>
                            <span>元/m</span>
                            <sup>2</sup>
                        </div>
                        <div class="content-tab">
                            <span v-for="(item,i) in v.tab" :key="i">{{item}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>