import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import SubContact from '@/components/SubContact'

Vue.use(Router)

const subContact = ['me', 'him', 'her'].map(sub => {
  return {
    path: sub,
    component: SubContact,
    props: {
      title: `Contact ${sub}`
    }
  }
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact,
      children: [
        {
          path: '',
          redirect: '/contact/me'
        },
        ...subContact
      ]
    }
  ]
})
