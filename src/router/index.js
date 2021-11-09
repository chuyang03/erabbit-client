import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = [
  
]
/**
 * 创建路由实例
 * vue2.0  new VueRouter({})
 * vue3.0  createRouter({})
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
