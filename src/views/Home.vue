<template>
  <div>
    <banniere/>
    <nav-bar/>
    <description/>
    <project-list/>
  </div>
</template>

<script>
import Banniere from '../components/Banniere.vue';
import NavBar from '../components/NavBar.vue';
import Description from '../components/Description.vue';
import ProjectList from '../components/ProjectList.vue';

export default {
  components: {
    Banniere,
    NavBar,
    Description,
    ProjectList,
  }
};
</script>
