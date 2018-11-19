import Vue from 'vue'
import router from './router/router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App'
import htmlfix from './components/htmlfix'
import cssfix from './components/cssfix'
import mmcfix from './components/mmcfix'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

