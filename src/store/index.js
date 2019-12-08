import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    currentProject: {},
  },
  getters: {
    getProjects: state => state.projects,
    getCurrentProject: state => state.currentProject,
  },
  mutations: {
    setProjects(state, response) {
      state.projects = response;
    },
    setCurrentProject(state, response) {
      state.currentProject = response;
    },
  },
  actions: {
    fetchProjects({ getters, commit }, page) {
      try {
        commit('setProjects', getters.getProjects);
      } catch (e) {
        console.error(e);
      }
    },
    fetchCurrentProject({ getters, commit }, projectId) {
      try {
        commit('setCurrentProject', getters.getProjects.find(elem => elem.id === parseInt(projectId)));
      } catch (e) {
        console.error(e);
      }
    },
  },
});
