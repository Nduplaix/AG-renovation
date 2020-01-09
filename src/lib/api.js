import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_API_URL,
};

const instance = axios.create(config);

config.baseURL = `${process.env.VUE_APP_API_URL}/ag-renovation`;

const projectsInstance = axios.create(config);

export function setJwt(jwt) {
  instance.defaults.headers.common = { Authorization: `Bearer ${jwt}` };
}

export const basicApi = instance;
export const api = projectsInstance;
