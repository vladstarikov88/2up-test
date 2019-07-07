import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home');

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new Router({
  routes
})

export default router;
