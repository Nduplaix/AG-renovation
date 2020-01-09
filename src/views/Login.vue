<template>
  <div id="login" class="login popin">
    <div class="popin-dialog">
      <form @submit.prevent="checkForm">
        <div class="alert alert-danger" role="alert" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="form-group">
          <label for="username">
            Adresse email
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label for="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          id="submit"
          class="popin-btn btn btn-success btn-block"
        >
          Connexion
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({ username: 'nduplaix62@gmail.com', password: 'azerty', errorMessage: null }),
  methods: {
    ...mapActions(['getAuthToken']),
    async checkForm() {
      const { username, password } = this;
      this.errorMessage = null;
      try {
        await this.getAuthToken({ username, password });
        if (!this.$store.getters.getUserLogged) {
          this.errorMessage = "Vous n'êtes pas administrateur du site";
        } else {
          await this.$router.push({ name: 'admin' });
        }
      } catch (e) {
        if (e.response && e.response.data && e.response.data.code === 401) {
          this.errorMessage = e.response.data.message;
        } else {
          console.error(e);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/scss/_variables.scss';

  .login {
    .form-group {
      display: flex;
      flex-direction: column;

      label {
        font-size: $wd-h2-font-size;
        font-weight: $wd-headings-font-weight;
        color: $wd-border-color-light;
      }
      input {
        height: 40px;
        border: solid 1px $wd-gray-medium;
        border-radius: $wd-border-radius-small;
      }
    }
    .popin-btn {
      margin-top: $wd-margin-large;
    }
  }
</style>
