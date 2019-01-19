import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from "@/components/register"
import home from "@/components/home"
import item from "@/components/item"
import alertitem from "@/components/alertitem"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/alertitem',
      name: 'alertitem',
      component: alertitem
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
