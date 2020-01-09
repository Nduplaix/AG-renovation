<template>
  <div class="img-content">
    <div class="img-content__before">
      <img :src="imgBefore" alt="">
    </div>
    <div class="img-content__after">
      <img :src="imgAfter" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgBefore: { type: String, required: true },
    imgAfter: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.img-content {
  position: relative;
  width: 100%;

  &__before {
    position: relative;
    img {
      position: relative;
      z-index: 1;
      width: 100%;
      clip-path: polygon(0 0, 0% 100%, 100% 0);

      &:hover {
        z-index: 2;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
  }

  &__after {
    position: absolute;
    top: 0rem;
    width: 100%;
    img {
      position: relative;
      z-index: 1;
      width: 100%;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);

      &:hover {
        z-index: 2;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
  }
}
</style>
