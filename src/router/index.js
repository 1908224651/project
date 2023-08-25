import { createRouter,createWebHashHistory } from "vue-router"

const routes =[
    {
        path:'/',   //首页
        redirect:'/index'
    },
    {
        path:'/index',   //首页
        name:'index',  
        component:()=>import('../views/index/index.vue')
    },
    {
        path:'/find',  //发现
        name:'find',  
        component:()=>import('../views/find/index.vue')
    },
    {
        path:'/message',   //消息
        name:'message',  
		component:()=>import('../views/message/index.vue')
    },
    {
        path:'/my',   //我的
        name:'my',  
        component:()=>import('../views/my/index.vue')
    },
    {
        path:'/login',   //登录
        name:'login',  
        component:()=>import('../views/my/login.vue')
    },
	{
        path:'/unacceptedOrders',   //未接单
        name:'unacceptedOrders',  
		component:()=>import('../views/message/components/unacceptedOrders.vue')
    },
	{
        path:'/Completed',   //未接单
        name:'Completed',  
		component:()=>import('../views/message/components/Completed.vue')
    },
	{
        path:'/inProgress',   //进行中
        name:'inProgress',  
		component:()=>import('../views/message/components/inProgress.vue')
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
    linkActiveClass:'selected'
})
export default router