<template>
  <div class="personnal-pagination">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled' : previous === null}">
        <span class="page-link" aria-label="Previous" :aria-disabled="previous === null" @click="previous ? loadPage(previous) : null">
          <span aria-hidden="true">&laquo;</span>
        </span>
        </li>
        <li class="page-item" :class="{ active: current === n }" v-for="n in max"><span class="page-link" @click="loadPage(n)">{{ n }}</span></li>
        <li class="page-item" :class="{'disabled' : next === null}">
        <span class="page-link" aria-label="Next" @click="next ? loadPage(next) : null">
          <span aria-hidden="true">&raquo;</span>
        </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    max: { require: true },
    next: { require: true },
    previous: { require: true },
    current: { require: true },
    isInProgress: { require: false, default: false },
  },
  methods: {
    loadPage(index) {
      this.$emit('loadPage', index, this.isInProgress);
    },
  },
};
</script>

<style scoped lang="scss">
  .page-item {
    cursor: pointer;
  }
  .personnal-pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
