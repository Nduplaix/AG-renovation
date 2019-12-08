<template>
  <div class="banniere">
    <div class="banniere__opacity"></div>
    <img src="http://placehold.it/30x30" alt="" />
    <div class="banniere__content">
      <h1>A-G-Rénovation</h1>
      <p>Redonnez de l'avenir</p>
      <span class="btn btn-primary" v-scroll-to="'#description'" role="button">
        Connaitre l'entreprise
      </span>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banniere {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
  }
  &__opacity {
    position: absolute;
    background-color: #000;
    z-index: 1;
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }
  &__content {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
  }
}
</style>
