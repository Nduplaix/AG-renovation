<template>
  <div>
    <nav-bar />
    <div class="project container">
      <h1>{{ getCurrentProject.label }}</h1>
      <carousel :images="getCurrentProject.imgs"/>
      <div class="project__content">
        <p>{{getCurrentProject.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from '../components/NavBar.vue';
import Carousel from '../components/Project/Carousel';

export default {
  components: {
    NavBar,
    Carousel,
  },
  computed: {
    ...mapGetters(['getCurrentProject']),
  },
};
</script>

<style lang="scss" scoped>
  .project {
    margin-top: 100px;

    h1 {
      font-size: 50px;
      text-align: center;
    }

    .carousel {
      margin: 30px 0;
    }

    &__content {
      text-align: justify;
      padding: 10px 10%;
    }
  }
</style>
