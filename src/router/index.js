import Vue from 'vue'
import Router from 'vue-router'


const Index = r => require.ensure([], () => r(require('@/components/front/index')), 'Index')


const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')
const Test = r => require.ensure([], () => r(require('@/components/Test')), 'Test')
const Admin = r => require.ensure([], () => r(require('@/components/admin')), 'Admin')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children:[
        {
          path: 'admin',
          name: 'Admin',
          component: Admin
        }
      ]
    }
  ]
})
