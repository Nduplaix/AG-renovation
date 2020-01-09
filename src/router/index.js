import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Main from '../views/Main.vue';
import MainAdmin from '../views/MainAdmin.vue';
import NoProject from '../components/admin/NoProject.vue';
import ProjectListAdmin from '../components/admin/ProjectListAdmin.vue';
import Login from '../views/Login.vue';
import CreateProject from '../components/Project/forms/CreateProject.vue';

import { beforeRouteUpdate, beforeRouteEnter } from './RouterGuard';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin',
    component: {
      ...MainAdmin,
      beforeRouteEnter,
      beforeRouteUpdate,
    },
    children: [
      {
        path: '',
        name: 'admin',
        component: NoProject,
      },
      {
        path: 'chantier/nouveau',
        name: 'createProject',
        component: CreateProject,
      },
      {
        path: 'chantiers-en-cours',
        name: 'admin-project-doing-list',
        component: {
          ...ProjectListAdmin,
          beforeRouteEnter,
          beforeRouteUpdate,
        },
      },
      {
        path: 'chantiers-finis',
        name: 'admin-project-done-list',
        component: {
          ...ProjectListAdmin,
          beforeRouteEnter,
          beforeRouteUpdate,
        },
      },
    ],
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'projet/:projectId',
        name: 'project',
        component: {
          ...Project,
          beforeRouteEnter,
          beforeRouteUpdate,
        },
      },
      {
        path: '',
        name: 'home',
        component: {
          ...Home,
          beforeRouteEnter,
          beforeRouteUpdate,
        },
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
