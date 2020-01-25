<template>
  <div class="container pt-5">
    <h1>Ajouter un chantier</h1>
    <form @submit.prevent="create">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="project-name">Nom du chantier</label>
            <input
              id="project-name"
              type="text"
              class="form-control"
              placeholder="Nom du chantier"
              v-model="label">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="project-city">Ville du chantier</label>
            <input
              id="project-city"
              type="text"
              class="form-control"
              placeholder="Ville du chantier"
              v-model="city">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="short-description">Description court du projet</label>
        <textarea class="form-control" id="short-description" rows="3" v-model="shortDescription">
        </textarea>
      </div>
      <div class="form-group">
        <label for="description">Description complète du projet</label>
        <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
      </div>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="isFinish"
          v-model="isFinish">
        <label class="custom-control-label" for="isFinish">Chantier terminé ?</label>
      </div>
      <div class="image-list mt-5">
        <p>Images : </p>
        <div class="mt-3">
          <div
            v-for="(image, index) in images"
            :key="index">
            <image-item
              class="mt-3"
              :index="index"
              :image="image"
              :basic-image="typeof image.basicImage === 'undefined'"
              @imageChange="updateImage"
              @deleteImage="deleteImage"
            />
          </div>
        </div>
        <div class="d-flex justify-content-around mt-5">
          <button type="button" class="btn btn-info" @click="addImage">
            Ajouter une image <i class="fas fa-plus-circle"></i>
          </button>
          <button type="button" class="btn btn-info" @click="addImageBeforeAfter">
            Ajouter une image "Avant / Après" <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>

      <button type="submit" class="mt-5 btn btn-success">Enregistrer le chantier</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import ImageItem from './ImageItem.vue';

export default {
  components: {
    ImageItem,
  },
  data() {
    return {
      label: '',
      city: '',
      description: '',
      shortDescription: '',
      images: [],
      isFinish: false,
      baseUrl: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    async create() {
      try {
        const form = new FormData();

        this.images.forEach((image, index) => {
          if (image.before && image.after) {
            form.append(`before-${index}`, image.before);
            form.append(`after-${index}`, image.after);
          } else {
            form.append(`image-${index}`, image);
          }
        });

        let slug = this.label;


        slug = slug.replace(/\s*$/g, '');
        slug = slug.replace(/\s+/g, '-');

        const imageArray = await axios.post(`${process.env.VUE_APP_API_URL}/api/imge-upload/${slug}`,
          form,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('currentUser')}`,
            },
          });

        await this.$store.dispatch('createProject', {
          label: this.label,
          city: this.label,
          description: this.description,
          shortDescription: this.shortDescription,
          isInProgress: !this.isFinish,
          images: imageArray.data,
        });

        await this.$router.push({ name: 'admin' });
      } catch (e) {
        console.error(e);
      }
    },
    addImage() {
      this.images.push('');
    },
    addImageBeforeAfter() {
      this.images.push({
        before: '',
        after: '',
        basicImage: false,
      });
    },
    updateImage(image, index) {
      this.images[index] = image;
    },
    deleteImage(index) {
      this.images.splice(index, 1);
    },
  },
};
</script>
