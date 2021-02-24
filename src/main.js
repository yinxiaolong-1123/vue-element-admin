import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'    //引入ivew库
import 'iview/dist/styles/iview.css'    // 使用 CSS

import router from './router'
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
