<template>
  <div id="projects" class="project-list">
    <p class="h1 project-list__title">Nos projets</p>
    <div v-for="(project, index) in getProjects" :key="index" class="project-list__item">
      <div class="project-list__item__image">
        <img :src="project.img" alt="">
      </div>
      <div class="project-list__item__description">
        <h2>{{project.label}}</h2>
        <p>{{project.shortDescription}}</p>
        <router-link :to="{ name: 'project', params: { 'projectId': project.id } }">
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProjects"]),
  },
};
</script>

<style lang="scss" scoped>
  .project-list {
    padding-top: 100px;

    &__title {
      text-align: center;
      margin-bottom: 30px;
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 10%;

      div {
        width: 50%;

        &.project-list__item__description {
          padding: 20px;
        }
        &.project-list__item__image {
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
