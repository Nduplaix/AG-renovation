<template>
  <div  v-if="basicImage" class="row d-flex align-items-end">
    <div class="col">
      <p>Image {{ index }}</p>
      <div class="custom-file">
        <label :for="`img-${uid}-before`" class="custom-file-label">
          {{
            internalImage.name ? internalImage.name :
            internalImage ? internalImage : 'Choisir une image'
          }}
        </label>
        <input
          :required="false"
          type="file"
          class="custom-file-input"
          :id="`img-${uid}`"
          @change="processFile($event)">
      </div>
    </div>
    <button
      type="button"
      class="btn btn-danger"
      @click="deleteImage">
      Supprimer <i class="fas fa-trash-alt"></i>
    </button>
  </div>


  <div v-else>
    <p>Image avant / après {{ index }}</p>
    <div class="row d-flex align-items-end">
      <div class="col">
        <p>Avant</p>
        <div class="custom-file">
          <label :for="`img-${uid}-before`" class="custom-file-label">
            {{
              internalImage.before.name ? internalImage.before.name :
              internalImage.before ? internalImage.before : 'Choisir une image'
            }}
          </label>
          <input
            :required="false"
            type="file"
            class="custom-file-input"
            :id="`img-${uid}-before`"
            @change="processBeforeFile($event)">
        </div>
      </div>
      <div class="col">
        <p>Après</p>
        <div class="custom-file">
          <label :for="`img-${uid}-after`" class="custom-file-label">
            {{
              internalImage.after.name ? internalImage.after.name :
              internalImage.after ? internalImage.after : 'Choisir une image'
            }}
          </label>
          <input
            :required="false"
            type="file"
            class="custom-file-input"
            :id="`img-${uid}-after`"
            @change="processAfterFile($event)">
        </div>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-success"
          :class="{ disabled : validated }"
          :disabled="validated"
          @click="validateImage">
          Valider <i class="fas fa-check"></i>
        </button>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteImage">
          Supprimer <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
  data() {
    return {
      uid: uuid.v1(),
      internalImage: this.image,
      validated: true,
    };
  },
  props: {
    basicImage: { require: true, type: Boolean },
    index: { require: true, type: Number },
    image: { require: true },
  },
  methods: {
    processFile(event) {
      this.internalImage = event.target.files[0];
      this.$emit('imageChange', this.internalImage, this.index);
    },
    processBeforeFile(event) {
      this.internalImage.before = event.target.files[0];
      this.validated = false;
    },
    processAfterFile(event) {
      this.internalImage.after = event.target.files[0];
      this.validated = false;
    },
    async validateImage() {
      this.$emit('imageChange', this.internalImage, this.index);
      this.validated = true;
    },
    deleteImage() {
      this.$emit('deleteImage', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
  .disabled {
    cursor: not-allowed;
  }
</style>
