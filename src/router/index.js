import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path:"*",//没有匹配到任何路径，跳转到home
      name:"home",
      component:()=>import("../page/home"), //路由组件懒加
     
    },
    {
      path: '/', //根路径默认匹配到home
      name: 'home',
      component:()=>import("../page/home")  //路由组件懒加载
    },
    {
      path: '/home',
      name: 'home',
      component:()=>import("../page/home"),  //路由组件懒加载
      children:[                         //子路由，路由出口必须在其亲父亲路由上。这里就是home组件
        {
          path:'/home/news',
          name:"news",
          component:()=>import('../page/home/news/news.vue')
        },
        {
          path:'/home/newsinfo', //动态路由。类似于路由params传参的简写
          name:"newsinfo",
          component:()=>import('../page/home/news/newsinfo.vue')
        }


    ]
    },
    {
      path: '/menber',
      name: 'menber',
      component:()=>import("../page/menber")  //路由组件懒加载
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component:()=>import("../page/shopcart")  //路由组件懒加载
    },
    {
      path: '/search',
      name: 'search',
      component:()=>import("../page/search")  //路由组件懒加载
    }
  ]
})
