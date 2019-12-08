<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <router-link :to="{name: 'home'}">
        <img src="../assets/images/logo.png" alt="">
      </router-link>
    </div>
    <div class="nav-bar__content">
      <div class="nav-bar__content__item">
        <a v-scroll-to="'#description'">Notre entreprise</a>
      </div>
      <div class="nav-bar__content__item">
        <a v-scroll-to="'#projects'">nos projets</a>
      </div>
      <div class="nav-bar__content__item">
        <a v-scroll-to="'#contact'">nous contacter</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: sticky;
    z-index: 99999;
    top:0;
    display: flex;
    align-items: center;
    height: 100px;
    background-color: gray;
    &__logo {
      margin-left: 10px;
      width: 100px;
      height: 100px;

      img {
        height: 100%;
      }
    }
     &__content {
       width: 100%;
       display: flex;
       justify-content: space-around;
       &__item {
         text-align: center;

         a {
           text-decoration: none;
           color: #fff;
           cursor: pointer;
         }
       }
     }
  }
</style>
