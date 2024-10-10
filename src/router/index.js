import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blogs from '../views/blogs/index.vue'
import CreateBlog from '../views/blogs/create.vue'
import EditBlog from '../views/blogs/edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogs/create',
      name: 'createBlog',
      component: CreateBlog
    },
    {
      path: '/blogs/edit/:id',
      name: 'editBlog',
      component: EditBlog
    }
  ]
})

export default router
