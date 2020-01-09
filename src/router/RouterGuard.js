import store from '../store/index';

async function handleRouteChange(to, from, next) {
  if (to.name === 'home') {
    await store.dispatch('fetchDoingProjects');
    await store.dispatch('fetchDoneProjects');
  } else if (to.name === 'project') {
    await store.dispatch('fetchCurrentProject', to.params.projectId);
  }

  next();
}

function routerGuard(to, from, next) {
  handleRouteChange(to, from, next);
}

export { routerGuard as beforeRouteUpdate, routerGuard as beforeRouteEnter };
