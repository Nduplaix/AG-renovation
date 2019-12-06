import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        img: 'http://placehold.it/100x50',
        label: 'Grosse maison pas loin',
        shortDescription: 'petit projet trop beau et tout et tout et tout et tout et tout et tout',
        description: 'petit projet trop beau et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout',
        imgs: [
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
        ],
      },
      {
        img: 'http://placehold.it/100x50',
        label: 'Grosse maison pas loin',
        shortDescription: 'petit projet trop beau et tout et tout et tout et tout et tout et tout',
        description: 'petit projet trop beau et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout',
        imgs: [
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
        ],
      },
      {
        img: 'http://placehold.it/100x50',
        label: 'Grosse maison pas loin',
        shortDescription: 'petit projet trop beau et tout et tout et tout et tout et tout et tout',
        description: 'petit projet trop beau et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout',
        imgs: [
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
        ],
      },
      {
        img: 'http://placehold.it/100x50',
        label: 'Grosse maison pas loin',
        shortDescription: 'petit projet trop beau et tout et tout et tout et tout et tout et tout',
        description: 'petit projet trop beau et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout et tout',
        imgs: [
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
          'http://placehold.it/100x50',
        ],
      },
    ],
  },
  getters: {
    getProjects: state => state.projects,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
