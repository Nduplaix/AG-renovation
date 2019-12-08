import store from '../store/index';

async function handleRouteChange(to, from, next) {
  await store.dispatch("fetchCurrentProject", to.params.projectId);
  console.log(to);
  next();
}

function routerGuard(to, from, next) {
  handleRouteChange(to, from, next);
}

export { routerGuard as beforeRouteUpdate, routerGuard as beforeRouteEnter };
