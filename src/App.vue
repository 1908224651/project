<script setup>
import {ref} from 'vue'
let title = ref('首页')
import Navbottom from './views/navbottom.vue'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <div>
        <router-view />
        <!-- 底部导航 -->
		<!-- <tab-bar  /> -->
        <Navbottom v-if="!route.meta.hideTabBar"/>
    </div>
</template>

<style scoped>

</style>
