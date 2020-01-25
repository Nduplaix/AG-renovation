<template>
  <div id="description" class="description container">
    <p class="h1 description__title">Connaitre notre entreprise</p>
    <div class="description__content row align-items-center">
      <div class="description__content--splited col-md-6 d-flex justify-content-center">
        <img src="http://placehold.it/300x500">
      </div>
      <div class="description__content--splited col-md-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis cumque ea error
          impedit ipsa iste iusto magni modi molestiae nesciunt, non optio perferendis ratione sunt
          temporibus totam, unde vel?</p>
        <p>Accusamus architecto atque beatae consequuntur cumque dolorem ducimus esse fugit ipsam iste
          iusto, labore maiores molestiae necessitatibus nostrum odio officiis omnis, optio quasi
          reiciendis repellat sequi sunt temporibus, totam voluptate?</p>
        <p>Asperiores iusto quos similique! Aliquid aspernatur cupiditate, deleniti, doloremque ea
          enim est eveniet excepturi expedita fugiat ipsa nesciunt nisi optio pariatur quibusdam
          reiciendis sit tenetur ullam voluptatem, voluptates. Quam, unde?</p>
        <p>Ab aliquid autem blanditiis consectetur ducimus ex iste minus officia omnis quia quibusdam
          quod quos rem, reprehenderit similique, vel veritatis vero voluptatibus? Animi aperiam
          dolores eaque eius et quod repellendus.</p>
        <p>Atque consectetur cumque deserunt dicta ea eligendi enim excepturi expedita fugiat harum
          laborum necessitatibus nobis nostrum odit possimus praesentium quam quod, recusandae
          reiciendis rem reprehenderit similique tenetur totam vel voluptates.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .description {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__title {
      text-align: center;
    }

    &__content {
      text-align: justify;

      &--splited {
        padding: 20px;
      }
    }
  }
</style>
