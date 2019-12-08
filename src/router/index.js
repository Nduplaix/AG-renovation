import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';

import { beforeRouteUpdate, beforeRouteEnter } from './RouterGuard';

Vue.use(Router);

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

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
