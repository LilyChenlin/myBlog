import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './router/router'
Vue.config.productionTip = false


// 按需引入element
import { Button, Message, MessageBox, Notification, Popover, Tag, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [ Button, Message, MessageBox, Notification, Popover, Tag, Input]
components.forEach((item) => {
  Vue.component(item.name, item)
  // console.log(item);
})
// 引入自定义i组件
// import sidebar from './components/sidebar.vue'
// import article from './components/article.vue'

Vue.use(VueRouter);
Vue.prototype.$ajax = axios;

const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // template:'<App/>'
}).$mount('#app')
