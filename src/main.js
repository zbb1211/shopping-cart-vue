// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// noinspection JSAnnotator
import Vue from 'vue'
// noinspection JSAnnotator
import App from './App'
// noinspection JSAnnotator
import router from './router'

// 引入mui样式文件
// noinspection JSAnnotator
import '../static/mui/css/mui.css'
// noinspection JSAnnotator
import '../static/mui/css/icons-extra.css'

import '../static/css/base.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
// noinspection JSAnnotator
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
