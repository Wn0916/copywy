/*
所有路由配置对象的文件
 */

import Home from '../pages/Home'
import categoryList from '../pages/categoryList/categoryList'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      showFooter:true,
      showHeader:true
    }
  },
  {
    path: '/categoryList',
    component: categoryList,
    meta: {
      showFooter: true
    },

  },
  {
    path:'/',
    redirect:'/home'
  }
  ]
