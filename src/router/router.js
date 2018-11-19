import Vue from 'vue'
import Router from 'vue-router'
import htmlfix from '../components/htmlfix'
import cssfix from '../components/cssfix'
import mmcfix from '../components/mmcfix'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          component: htmlfix
        },
        {
          path: '/cssfix',
          component: cssfix
        },
        {
            path: '/mmcfix',
            component: mmcfix
          }
      ]
})