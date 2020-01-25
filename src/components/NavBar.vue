<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-light">
    <router-link class="navbar-brand" :to="{name: 'home'}">
      <img src="../assets/images/logo.png" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="changeDisplayMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="displayMenu">
      <ul class="navbar-nav mr-auto w-100 mr-0 justify-content-around">
        <li class="nav-item active">
          <a class="nav-link" v-scroll-to="'#description'" v-if="$route.name === 'home'">Notre entreprise</a>
          <router-link class="nav-link" to="/#description" v-else>Notre entreprise</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" v-scroll-to="'#projects'" v-if="$route.name === 'home'">Nos chantiers</a>
          <router-link class="nav-link" to="/#projects" v-else>Nos chantiers</router-link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" v-scroll-to="'#contact'" v-if="$route.name === 'home'">Nous contacter</a>
          <router-link class="nav-link" to="/#contact" v-else>Nous contacter</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: !this.isMobile(),
    };
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
    changeDisplayMenu() {
      this.displayMenu = !this.displayMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
  img {
    max-height: 100px;
  }

  .nav-item {
    cursor: pointer;
  }
</style>
