<script setup>
import {ref} from 'vue'
let title = ref('首页')
import Navbottom from './views/navbottom.vue'
</script>

<template>
    <div>
        <router-view />
        <!-- 底部导航 -->
        <Navbottom />
    </div>
</template>

<style scoped>

</style>
