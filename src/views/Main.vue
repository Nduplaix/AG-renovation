<template>
  <div>
    <router-view/>
    <footer>
      <contact-us />
    </footer>
  </div>
</template>

<script>
import ContactUs from '../components/ContactUs.vue';

export default {
  components: {
    ContactUs,
  },
};
</script>

<style lang="scss" scoped>

  footer {
    margin-top: 30px;
  }

  .fixed-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    img {
      height: 100px;
    }
  }
</style>
