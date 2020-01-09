<template>
  <div class="no-order">
    <h3>
      <i class="fas fa-arrow-left"></i><span>Selectionnez un projet</span>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import '../../assets/scss/variables';

  .no-order {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-basis: 100%;
    height: 100vh;

    h3 {
      font-weight: 400;
      color: $wd-text-light;
      display: flex;
      align-items: center;
      padding: 20px;

      span {
        padding: 10px;
        border-left: 1px solid $wd-text-light;
        font-size: 21px;
        line-height: 1;
        max-width: 300px;
      }

      i {
        font-size: 35px;
        padding: 10px;
      }
    }
  }
</style>
