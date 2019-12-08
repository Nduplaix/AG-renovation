<template>
  <div id="contact" class="contact">
    <div class="contact__info">
      <p class="h2">Angelo Opigez - Gregory Caron</p>
      <p>mail: contact@agrenovation.com</p>
      <p>telephone: 0601010101</p>
    </div>
    <img src="../assets/images/logo.png" alt="" class="contact__logo">
    <div class="contact__form">
      <p class="h1">Nous contacter</p>
      <form action="#">
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
</template>

<script>
export default {
  data() {
    return {
      email: '',
      mailContent: '',
    };
  },
};
</script>

<style lang="scss" scoped>
  .contact {
    width: 100%;
    background-color: #3d5170;
    color: #ccd6df;
    display: flex;
    align-items: center;
    justify-content: center;

    &__logo {
      width: 10%;
    }

    &__info {
      padding: 40px;
      margin-left: 10%;
      width: 30%;

      p:last-child {
        margin: 0;
      }
    }
    &__form {
      padding: 40px;
      margin-right: 10%;
      width: 40%;
    }
  }
</style>
