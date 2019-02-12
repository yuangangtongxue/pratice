import Vue from 'vue'
import Router from 'vue-router'
import mine from '@/components/mine/mine.vue'
import home from '@/components/home/home.vue'
import dianxiaoer from '@/components/dianxiaoer/dianxiaoer.vue'
import cart from '@/components/cart/cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dianxiaoer',
      name: 'dianxiaoer',
      component: dianxiaoer
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
