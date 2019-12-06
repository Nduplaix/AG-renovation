<template>
  <div>
    <nav-bar />
    <div class="project">
      <h1>{{ getCurrentProject.label }}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(['getCurrentProject']),
  },
};
</script>

<style lang="scss" scoped>
  .project {
    margin-top: 100px;
  }
</style>
