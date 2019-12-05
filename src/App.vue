<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {NavBar},
};
</script>

<style lang="scss" scoped>

  .fixed-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    img {
      height: 100px;
    }
  }
</style>
