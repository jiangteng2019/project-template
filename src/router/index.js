import { createRouter, createWebHistory } from 'vue-router'

import UserCenter from "../views/user-center/App.vue";
import RoleCenter from "../views/role-center/App.vue"

// 子路由
import userCenterChildRoute from "../views/user-center/route";
import roleCenterChildRoute from "../views/role-center/route"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/userCenter/userManage'
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			component: UserCenter,
			children: userCenterChildRoute
		},
		{
			path: '/roleCenter',
			name: 'roleCenter',
			component: RoleCenter,
			children: roleCenterChildRoute
		},
	]
})

export default router

// lazy-loaded : component: () => import('../views/AboutView.vue')
