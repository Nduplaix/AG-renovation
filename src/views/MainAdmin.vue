<template>
  <div>
    <sidebar/>
    <main id="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/admin/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
  @import '../assets/scss/variables';
  main {
    padding-left: 330px;
    display: flex;
    width: 100%;
    background: $wd-bright;
    min-height: 100%;
  }
</style>
