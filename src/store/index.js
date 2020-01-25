import Vue from 'vue';
import Vuex from 'vuex';
import { api, basicApi, setJwt } from '../lib/api';

function parseToken(token) {
  return JSON.parse(atob(token.split('.')[1]));
}


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: false,
    currentUser: {},
    doingProjects: [],
    doingProjectsPagination: {},
    doneProjects: [],
    doneProjectsPagination: {},
    currentProject: {},
    adminProjectList: {},
    adminProjectPagination: {},
  },
  getters: {
    currentUser: st => st.currentUser,
    getUserLogged: st => st.userLogged,
    doingProjects: state => state.doingProjects,
    doingProjectsPagination: state => state.doingProjectsPagination,
    doneProjects: state => state.doneProjects,
    doneProjectsPagination: state => state.doneProjectsPagination,
    getCurrentProject: state => state.currentProject,
    adminProjectList: state => state.adminProjectList,
    adminProjectPagination: state => state.adminProjectPagination,
  },
  mutations: {
    setUser(state, token) {
      const payload = parseToken(token);
      if (payload.roles.indexOf('ROLE_ADMIN') !== -1) {
        state.userLogged = true;
        localStorage.setItem('currentUser', token);
        setJwt(token);
        state.currentUser = payload;
      }
    },

    logout(state) {
      state.currentUser = {};
      state.userLogged = false;
      localStorage.removeItem('currentUser');
    },
    setDoingProjects(state, response) {
      state.doingProjects = response.data['hydra:member'];
      state.doingProjectsPagination = {
        next: response.data['hydra:view']['hydra:next']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:next']).page)
          : null,
        previous: response.data['hydra:view']['hydra:previous']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:previous']).page)
          : null,
        max: response.data['hydra:view']['hydra:last']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:last']).page)
          : null,
        current: response.data['hydra:view']['@id']
          ? parseInt(getUrlVars(response.data['hydra:view']['@id']).page)
          : null,
      };
    },
    setDoneProjects(state, response) {
      state.doneProjects = response.data['hydra:member'];
      state.doneProjectsPagination = {
        next: response.data['hydra:view']['hydra:next']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:next']).page)
          : null,
        previous: response.data['hydra:view']['hydra:previous']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:previous']).page)
          : null,
        max: response.data['hydra:view']['hydra:last']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:last']).page)
          : null,
        current: response.data['hydra:view']['@id']
          ? parseInt(getUrlVars(response.data['hydra:view']['@id']).page)
          : null,
      };
    },
    setCurrentProject(state, response) {
      state.currentProject = response.data;
    },
    setAdminProjectList(state, response) {
      state.adminProjectList = response.data['hydra:member'];
      state.adminProjectPagination = {
        next: response.data['hydra:view']['hydra:next']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:next']).page)
          : null,
        previous: response.data['hydra:view']['hydra:previous']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:previous']).page)
          : null,
        max: response.data['hydra:view']['hydra:last']
          ? parseInt(getUrlVars(response.data['hydra:view']['hydra:last']).page)
          : null,
        current: response.data['hydra:view']['@id']
          ? parseInt(getUrlVars(response.data['hydra:view']['@id']).page)
          : null,
      };
    },
  },
  actions: {
    async getAuthToken({ commit }, { username, password }) {
      const response = await basicApi.post('/login_check', {
        username,
        password,
      });
      if (response.data.data.sites.indexOf(3) !== -1) {
        commit('setUser', response.data.token);
        return response;
      }
    },

    setStorageToken({ commit }) {
      const token = localStorage.getItem('currentUser');
      if (token) {
        commit('setUser', token);
      }
    },
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
    async fetchAdminProjectList({ commit }, { page, maxPerPage, inProgress }) {
      try {
        commit('setAdminProjectList', await api.get(`/a_g_projects?page=${page || 1}&perPage=${maxPerPage || 4}&isInProgress=${inProgress}`));
      } catch (e) {
        console.error(e);
      }
    },
    async deleteProject({}, id) {
      try {
        await api.delete(`/a_g_projects/${id}`);
      } catch (e) {
        console.error(e);
      }
    },
    async createProject({}, datas) {
      try {
        await api.post('/a_g_projects', datas);
      } catch (e) {
        console.error(e);
      }
    },
    async editProject({}, { id, data }) {
      try {
        await api.patch(`/a_g_projects/${id}`, data);
      } catch (e) {
        console.error(e);
      }
    },
  },
});

function getUrlVars(url) {
  const vars = {};
  const parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}
