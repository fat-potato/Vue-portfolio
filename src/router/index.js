import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume/Resume'
import Contact from '@/components/Contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
