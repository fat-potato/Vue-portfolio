import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    }
  ]
})
