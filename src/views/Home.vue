<template>
  <div>
    <banniere/>
    <nav-bar/>
    <description/>
    <project-list/>
  </div>
</template>

<script>
import Banniere from '../components/Banniere';
import NavBar from '../components/NavBar';
import Description from '../components/Description';
import ProjectList from '../components/ProjectList';

export default {
  components: {
    Banniere,
    NavBar,
    Description,
    ProjectList,
  },
};
</script>
