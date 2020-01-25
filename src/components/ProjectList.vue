<template>
  <div id="projects" class="project-list">
    <div class="project-list__done">
      <p class="h1 project-list__title">Nos chantiers terminés</p>
      <div v-for="(project, index) in doneProjects" :key="index" class="project-list__item row align-items-center w-100">
        <div class="project-list__item__image col-md-6">
          <before-after-images
            :img-before="project.images[0].before"
            :img-after="project.images[0].after"
            v-if="project.images[0].before && project.images[0].after"
          />
          <img :src="project.images[0]" alt="" v-else>
        </div>
        <div class="project-list__item__description col-md-6">
          <h2>{{project.label}}</h2>
          <p>{{project.shortDescription}}</p>
          <router-link :to="{ name: 'project', params: { 'projectId': project.id } }">
            En savoir plus
          </router-link>
        </div>
      </div>
      <pagination
        :max="doneProjectsPagination.max"
        :next="doneProjectsPagination.next"
        :previous="doneProjectsPagination.previous"
        :current="doneProjectsPagination.current"
        :isInProgress="false"
        @loadPage="loadProjects"
      />
    </div>
    <div class="project-list__doing mt-5">
      <p class="h1 project-list__title">Nos chantiers en cours</p>
      <div v-for="(project, index) in doingProjects" :key="index" class="project-list__item row align-items-center w-100">
        <div class="project-list__item__image col-md-6">
          <before-after-images
            :img-before="project.images[0].before"
            :img-after="project.images[0].after"
            v-if="project.images[0].before && project.images[0].after"
          />
          <img :src="project.images[0]" alt="" v-else>
        </div>
        <div class="project-list__item__description col-md-6">
          <h2>{{project.label}}</h2>
          <p>{{project.shortDescription}}</p>
          <router-link :to="{ name: 'project', params: { 'projectId': project.id } }">
            En savoir plus
          </router-link>
        </div>
      </div>
      <pagination
        :max="doingProjectsPagination.max"
        :next="doingProjectsPagination.next"
        :previous="doingProjectsPagination.previous"
        :current="doingProjectsPagination.current"
        :isInProgress="true"
        @loadPage="loadProjects"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BeforeAfterImages from './BeforeAfterImages.vue';
import Pagination from './Pagination.vue';

export default {
  components: {
    BeforeAfterImages,
    Pagination,
  },
  computed: {
    ...mapGetters([
      'doingProjects',
      'doneProjects',
      'doneProjectsPagination',
      'doingProjectsPagination',
    ]),
  },
  methods: {
    loadProjects(page, isInProgress) {
      if (isInProgress) {
        this.$store.dispatch('fetchDoingProjects', page);
      } else {
        this.$store.dispatch('fetchDoneProjects', page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .project-list {
    padding-top: 150px;

    &__title {
      text-align: center;
      margin-bottom: 30px;
    }

    &__item {
      padding: 10px 10%;

      &__description {
        padding: 20px;
      }
      &__image {

        & > img {
          width: 100%;
        }
      }

    }
  }
</style>
