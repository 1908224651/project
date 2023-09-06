import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.js' //./同级 ../ 上一级  @/ 根目录  src
import '@/assets/css/index.css'
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios"

const app = createApp(App).use(router)
axios .defaults.baseURL= "http://localhost:8080/"
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.mount('#app')
