import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import scrolltest from '@/components/scrolltest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/scrolltest"
    },
    {
      path: '/scrolltest',
      name: 'scrolltest',
      component: scrolltest
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
