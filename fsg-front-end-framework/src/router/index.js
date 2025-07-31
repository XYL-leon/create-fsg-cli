import { createRouter, createWebHistory } from 'vue-router';

const PageRouter = [
  {
    path: '/',
    name: '地图页',
    component: () => import( /* webpackChunkName: "page" */ '@/views/index/index.vue'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  // {
  //   path: '/login',
  //   name: '登录页',
  //   component: () => import('@/views/login/index.vue'),
  //   meta: {
  //     keepAlive: true,
  //     isTab: false,
  //     isAuth: false
  //   }
  // },
  {
    path: '/404',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/404.vue'),
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/403',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/403.vue'),
    name: '403',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/500',
    component: () =>
      import( /* webpackChunkName: "page" */ '@/components/error-page/500.vue'),
    name: '500',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*', // 使用这个特殊语法捕获所有未匹配的路由
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "page" */ '@/components/error-page/404.vue')
  }
]

//创建路由
const Router = createRouter({
  base: import.meta.env.VITE_APP_BASE,
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
  routes: PageRouter
})

export default Router
