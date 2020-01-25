<template>
  <div id="contact" class="contact">
    <validation-popin type="success" @close="displayValidPopin = false" v-if="displayValidPopin">
      Votre mail a bien été envoyé ! <br>Merci
    </validation-popin>
    <validation-popin type="warning" @close="displayErrorPopin = false" v-if="displayErrorPopin">
      Il y a eu une erreur dans l'envoie de votre mail !
    </validation-popin>
    <div class="row align-items-center w-100">
      <div class="contact__info col-md-3">
        <p class="h2">Angelo Opigez - Gregory Caron</p>
        <p>mail: contact@agrenovation.com</p>
        <p>telephone: 0601010101</p>
      </div>
      <div class="col-md-2">
        <img src="../assets/images/logo.png" alt="" class="contact__logo">
      </div>
      <div class="contact__form col-md-6">
        <p class="h1">Nous contacter</p>
        <form @submit.prevent="sendMail">
          <div class="form-group">
            <label for="contact--email">Votre adresse e-mail</label>
            <input type="email" id="contact--email" class="form-control" v-model="email">
          </div>

          <div class="form-group">
            <label for="contact--content">Votre question</label>
            <textarea rows="5" id="contact--content" class="form-control" v-model="mailContent" />
          </div>

          <button type="submit" class="btn btn-success">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ValidationPopin from './popin/ValidationPopin.vue';

export default {
  components: {
    ValidationPopin,
  },
  data() {
    return {
      email: '',
      mailContent: '',
      displayValidPopin: false,
      displayErrorPopin: false,
    };
  },
  methods: {
    async sendMail() {
      const form = new FormData();

      form.append('email', this.email);
      form.append('mailContent', this.mailContent);

      try {
        await axios.post(`${process.env.VUE_APP_API_URL}/ag-renovation/send-mail`,
          form,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        this.displayValidPopin = true;
        this.email = '';
        this.mailContent = '';
      } catch (e) {
        console.error(e);
        this.displayErrorPopin = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .contact {
    background-color: #3d5170;
    color: #ccd6df;

    &__logo {
      height: auto;
    }

    &__info {
      padding: 40px;

      p:last-child {
        margin: 0;
      }
    }
    &__form {
      padding: 40px;
    }
  }
</style>
