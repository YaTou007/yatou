// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import store from './store'
import VideoPlayer from 'vue-video-player'
import echarts from 'echarts'
import 'jquery'

Vue.prototype.$echarts = echarts
Vue.use(VideoPlayer);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios= axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
