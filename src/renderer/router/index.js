import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-wrap',
      component: require('@/components/MainWrap').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
