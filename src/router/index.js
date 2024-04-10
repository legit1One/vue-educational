import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Домашняя',
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'О нас'
      }
    },
    {
      path: '/router',
      name: 'router',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(`../views/RouterExample.vue`),
      meta: {
        title: 'Роутер'
      }
    },
    {
      path: '/users',
      meta: {
        title: 'Users'
      },
      children: [
        {
          // users/:id
          // id - dynamic
          path: '',
          name: 'Users',
          component: () => import(`../views/Users.vue`),
        },
        {
          // users/:id
          // id - dynamic
          path: ':id',
          name: 'User',
          component: () => import(`../views/User.vue`),
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  if(to.name === 'about' && localStorage.getItem('is_about_allowed') === '1') {
    next()
  } else if (to.name === 'about' && localStorage.getItem('is_about_allowed') !== '1'){
    next('/')
  }

  // console.log('to', to)
  // console.log('from', from)
  next()
})

router.afterEach((to, from) => {
  // console.log(from)
  // alert(`Ты перешел на ${to.name} с ${from.path}`)
})

export default router
