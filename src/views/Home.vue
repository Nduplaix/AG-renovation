<template>
  <div>
    <banniere/>
    <nav-bar/>
    <description/>
  </div>
</template>

<script>
import Banniere from '../components/Banniere';
import NavBar from '../components/NavBar';
import Description from '../components/Description';

export default {
  components: {
    Banniere,
    NavBar,
    Description,
  },
};
</script>
