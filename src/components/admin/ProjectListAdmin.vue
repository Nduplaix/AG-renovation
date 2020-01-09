<template>
  <div>
    <h1 class="text-center">{{ pageTitle }}</h1>
    <div class="list">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Ville</th>
          <th scope="col action-label">actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(project, index) in adminProjectList" :key="index">
          <th scope="row">{{project.id}}</th>
          <td>{{project.label}}</td>
          <td>{{project.city}}</td>
          <td class="action">
            <div @click="editProject(project.id)"><i class="fas fa-edit"></i></div>
            <div @click="deleteProject(project.id)"><i class="fas fa-trash-alt"></i></div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <popup v-if="showDeletePopup">
      <h1>Voulez vous <b>SUPPRIMER</b> ce chantier?</h1>
      <button class="btn btn-danger" @click="confirmDelete"><b>SUPPRIMER</b> le chantier</button>
      <button class="btn btn-info mt-2" @click="deleteProject"><b>Annuler</b></button>
    </popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Popup from '../Popup.vue';

export default {
  components: {
    Popup,
  },
  data() {
    return {
      pageTitle: '',
      showDeletePopup: false,
      currentProjectId: null,
    };
  },
  mounted() {
    console.log(this.$route.name);
    if (this.$route.name === 'admin-project-doing-list') {
      this.pageTitle = 'Chantiers en cours';
    } else {
      this.pageTitle = 'Chantiers finis';
    }
  },
  computed: {
    ...mapGetters([
      'adminProjectList',
      'adminProjectPagination',
    ]),
  },
  methods: {
    deleteProject(id = null) {
      this.showDeletePopup = !this.showDeletePopup;
      this.currentProjectId = id;
    },
    async confirmDelete() {
      this.showDeletePopup = false;
      await this.$store.dispatch('deleteProject', this.currentProjectId);
      this.$router.push({ name: 'admin' });
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  display: flex;
  justify-content: space-around;
}
.action-label {
  display: flex;
  justify-content: center;
}
</style>
