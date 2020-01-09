import Vue from 'vue';
import Vuex from 'vuex';
import { api, basicApi, setJwt } from '../lib/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doingProjects: [],
    doingProjectsPagination: {},
    doneProjects: [],
    doneProjectsPagination: {},
    currentProject: {},
  },
  getters: {
    doingProjects: state => state.doingProjects,
    doingProjectsPagination: state => state.doingProjectsPagination,
    doneProjects: state => state.doneProjects,
    doneProjectsPagination: state => state.doneProjectsPagination,
    getCurrentProject: state => state.currentProject,
  },
  mutations: {
    setDoingProjects(state, response) {
      state.doingProjects = response.data['hydra:member'];
      state.doingProjectsPagination = {
        next: response.data['hydra:view']['hydra:next']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:next'])['page'])
          : null,
        previous: response.data['hydra:view']['hydra:previous']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:previous'])['page'])
          : null,
        max: parseInt(getUrlVars(response.data['hydra:view']['hydra:last'])['page']),
        current: parseInt(getUrlVars(response.data['hydra:view']['@id'])['page']),
      };
    },
    setDoneProjects(state, response) {
      state.doneProjects = response.data['hydra:member'];
      state.doneProjectsPagination = {
        next: response.data['hydra:view']['hydra:next']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:next'])['page'])
          : null,
        previous: response.data['hydra:view']['hydra:previous']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:previous'])['page'])
          : null,
        max: parseInt(getUrlVars(response.data['hydra:view']['hydra:last'])['page']),
        current: parseInt(getUrlVars(response.data['hydra:view']['@id'])['page']),
      };
      console.log(state.doneProjectsPagination);
    },
    setCurrentProject(state, response) {
      state.currentProject = response.data;
      console.log(response);
    },
  },
  actions: {
    async fetchDoingProjects({ commit }, page = 1) {
      try {
        commit('setDoingProjects', await api.get(`/a_g_projects?page=${page}&isInProgress=true`));
      } catch (e) {
        console.error(e);
      }
    },
    async fetchDoneProjects({ commit }, page = 1) {
      try {
        commit('setDoneProjects', await api.get(`/a_g_projects?page=${page}&isInProgress=false`));
      } catch (e) {
        console.error(e);
      }
    },
    async fetchCurrentProject({ commit }, projectId) {
      try {
        commit('setCurrentProject', await api.get(`/a_g_projects/${projectId}`));
      } catch (e) {
        console.error(e);
      }
    },
  },
});

function getUrlVars(url) {
  const vars = {};
  let parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
