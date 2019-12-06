import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import { beforeRouteUpdate, beforeRouteEnter } from './RouterGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/projet/:projectId',
    name: 'project',
    component: {
      ...Project,
      beforeRouteEnter,
      beforeRouteUpdate,
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    redirect: () => '/'
    ,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
