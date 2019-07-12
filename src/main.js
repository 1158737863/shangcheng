// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'; //引入图标字体

import Axios from 'axios'
Vue.prototype.$axios = Axios
//import qs from 'qs' //qs插件用来序列化参数成a=1&b=2之类的形式
//Axios.defaults.baseURL = 'https://api.example.com';//全局配置你的接口请求地址中的服务器地址，比如192.168.30
//Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//全局配置token,看情况使用
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//配置post请求的请求头信息。axios默认post的数据类型是json。而服务器只接受x-www-form-urlencoded类型的数据，因此要把请求头设为这个。同时，设置求情拦截，把所有post请求的参数用qs插件转化为该类型的数据。
// Axios.interceptors.request.use(config=>{
//   if(config.method=='post'){
//     config.data=qs.stringify(data)
//   }
//   return config //这里一定更要返回修改后的config，才能继续
// },err=>{Message.error({message:"加载失败"})})
// 引入mockjs
require('../src/mock/mock.js')

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入时间格式化插件moment
import moment from 'moment'
Vue.filter('dateformat',(datestr,zidingyicanshu='YYYY-MM-DD')=>{            //vue过滤器，一地个参数是过滤器名称，后面是回调函数，第一个参数是需要过滤对象的参数，第二个是自定义参数)
   return moment(datestr).format(zidingyicanshu)
})

import './mui/css/mui.css'
import './mui/css/icons-extra.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
