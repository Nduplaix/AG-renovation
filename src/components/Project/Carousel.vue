<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="index in images.length"
        :key="index"
        data-target="#carouselExampleIndicators"
        data-slide-to="index"
        :class="{ active : index === 0 }"
      />
    </ol>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(image, index) in images"
        :key="index"
        :class="{active: index === 0}">
        <before-after-images
          :img-before="image.before"
          :img-after="image.after"
          v-if="image.before && image.after"
        />
        <img :src="image" class="d-block w-100" alt="..." v-else>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import BeforeAfterImages from '../BeforeAfterImages.vue';

export default {
  components: { BeforeAfterImages },
  props: {
    images: { type: Array, required: true },
  },
};
</script>
