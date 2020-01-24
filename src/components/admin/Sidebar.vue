<template>
  <aside id="sidebar" class="sidebar">
    <div id="top-sidebar" class="top-sidebar">
      <button class="btn btn-primary" @click="disconnect">Deconnection</button>
    </div>
    <div class="order-list">
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr @click="openMenuList">
          <th scope="col">Chantier</th>
          <th scope="col" class="action"><i class="fa" :class="{
            'fa-angle-down' : !showListMenu,
            'fa-angle-up' : showListMenu
          }"></i></th>
        </tr>
        </thead>
        <tbody v-if="showListMenu">
        <tr @click="redirectTo('admin-project-doing-list')">
          <th scope="row">afficher les chantiers en cours</th>
          <td class="action"><i class="fas fa-eye"></i></td>
        </tr>
        <tr @click="redirectTo('admin-project-done-list')">
          <th scope="row">afficher les chantiers finis</th>
          <td class="action"><i class="fas fa-eye"></i></td>
        </tr>
        <tr @click="createProject">
          <th scope="row">ajouter un chantiers</th>
          <td class="action"><i class="fas fa-plus-circle"></i></td>
        </tr>
        </tbody>
      </table>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showListMenu: false,
    };
  },
  methods: {
    createProject() {
      this.$router.push({ name: 'createProject' });
    },
    openMenuList() {
      this.showListMenu = !this.showListMenu;
    },
    redirectTo(pathName) {
      this.$router.push({ name: pathName });
    },
    disconnect() {
      this.$store.commit('logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../assets/scss/variables';

  .sidebar {
    width: 330px;
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: $wd-sidebar-background;
    display: flex;
    justify-content: stretch;
    flex-direction: column;

    .top-sidebar {
      padding: 10px;
      background: $wd-white;
      max-height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .order-list {
      overflow-y: auto;
      width: 100%;
      .table {
        width: 100%;
        tr {
          cursor: pointer;
        }
        .action {
          text-align: center;
        }
      }
    }
  }
</style>
