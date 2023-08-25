<script setup>
import {ref} from 'vue'
import {CountTo} from 'vue3-count-to'
let title = ref('首页')
</script>

<template>
    <div class="houseprices" style="display: flex;">
		<div style="background-color: aqua;width: 100px;height: 100px;"></div>
		<div style="background-color: red;width: 100px;height: 100px;"></div>
		<div style="background-color: black;width: 100px;height: 100px;"></div>
        <!-- <ul> -->
            <!-- <li class="houseprices-state"> -->
                <!-- <img src="@/assets/images/southeast.jpeg" alt=""> -->
                <!-- <p>房价行情</p> -->
            <!-- </li>
            <li class="houseprices-price"> -->
                <!-- <img src="@/assets/images/southeast.jpeg" alt=""> -->

                <!-- <div>
                    <b><countTo :startVal='0' :endVal="88888" :daration="5000"></countTo></b>元/m
                    <sup>2</sup>
                </div>
                <p>最新均价</p> -->
            <!-- </li>
            <li class="houseprices-increase"> -->
                <!-- <img src="@/assets/images/up.png" alt=""> -->
                <!-- <span><countTo :startVal='0' :endVal="0.12" :decimals="2" :daration="3000"></countTo>%</span>
                <p>比上月</p> -->
            <!-- </li>
        </ul> -->
    </div>
</template>

<style scoped>

</style>
