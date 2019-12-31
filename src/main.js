import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//完整引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入字体图标
import '@/assets/fonts/iconfont.css'

//导入全局样式表
import '@/assets/css/global.css'

import TreeTable from 'vue-table-with-tree-grid'
Vue.use(TreeTable)

//配置请求的根路径
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//请求拦截器
axios.interceptors.request.use(config =>{
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
