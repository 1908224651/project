<script setup>
import {ref} from 'vue'
let title = ref('首页')
</script>

<template>
    <header>
        <div class="search" style="background-color: rgb(3 86 142);">
            <div class="search-list">
				<p>济南机场航站楼智慧管控系统</p>
                <!-- <div class="search-box"> -->
                    <!-- <i class="iconfont icon-sousuo"></i>
                    <input type="text">
                        <ul>
                            <li>名企招聘</li>
                            <li>买仓库</li>
                            <li>商业地产</li>
                            <li>附近超值保洁</li>
                            <li>名企招聘</li>
                        </ul>
                    <button>搜索</button> -->
                <!-- </div> -->
                <!-- <div class="search-sign">
                    <i class="iconfont icon-qiandao1"></i>
                </div> -->
            </div>
        </div>
    </header>
</template>

<style scoped>
.search-list{
	text-align: center;
	color: white;
	font-size: 18px;
	font-weight: bold;
}
</style>
