<template>
  <div class="nav-bar">
<!--    <div class="nav-bar__logo"><img src="http://placehold.it/30x30" alt=""></div>-->
    <div class="nav-bar__content">
      <div class="nav-bar__content__item">Notre entreprise</div>
      <div class="nav-bar__content__item">nos projets</div>
      <div class="nav-bar__content__item">nous contacter</div>
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
    height: 75px;
    background-color: gray;
    &__logo {
      width: 100px;
      height: 100px;

      img {
        width: 100%;
      }
    }
     &__content {
       width: 100%;
       display: flex;
       justify-content: space-around;
       &__item {
         text-align: center;
       }
     }
  }
</style>
