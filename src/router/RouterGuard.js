import store from '../store/index';

async function handleRouteChange(to, from, next) {
  if (to.name === 'home') {
    await store.dispatch('fetchDoingProjects');
    await store.dispatch('fetchDoneProjects');
  } else if (to.name === 'project') {
    await store.dispatch('fetchCurrentProject', to.params.projectId);
  } else if (to.name === 'admin-project-doing-list') {
    await store.dispatch('fetchAdminProjectList', { maxPerPage: 20, inProgress: true });
  } else if (to.name === 'admin-project-done-list') {
    await store.dispatch('fetchAdminProjectList', { maxPerPage: 20, inProgress: false });
  }

  next();
}

function routerGuard(to, from, next) {
  handleRouteChange(to, from, next);
}

export { routerGuard as beforeRouteUpdate, routerGuard as beforeRouteEnter };
