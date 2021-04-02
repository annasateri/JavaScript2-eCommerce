<template>

<div class="container mt-5">

  <div class="text-center">
    <img class="card-img-top img" :src="imageLogo">
  </div>

  <!-- Default form register -->
<form class="text-center border border-light p-5" @submit.prevent="onSubmit">

    <p class="h4 mb-4">SIGN UP</p>

    <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input type="text" id="defaultRegisterFormFirstName" class="form-control mb-4" v-model="user.firstName" placeholder="First name">
        </div>

        <div class="col">
            <!-- Last name -->
            <input type="text" id="defaultRegisterFormLastName" class="form-control" v-model="user.lastName" placeholder="Last name">
        </div>
    </div>

    <!-- E-mail -->
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" v-model="user.email" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultRegisterFormPassword" class="form-control mb-4" v-model="user.password" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">


    <!-- Sign up button -->
    <button class="btn signIn btn-block font-weight-bold" type="submit">SIGN UP</button>

    <p class="m-0 py-2">or</p>

    <button class="btn signIn btn-block font-weight-bold"><i class="fab fa-facebook-f pe-2"></i> SIGN UP WITH FACEBOOK</button>

    <!-- Login -->
    <p class="pt-3">Already a member?
        <a class="link" href="/login">Login</a>
    </p>

</form>
<!-- Default form register -->

</div>

</template>

<script>

import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      imageLogo: require('../assets/images/imgFrontpage/LogoFrontpage.png')
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)

         this.$router.push({name: 'Login'})
      }
    }
  }
}

</script>

<style scoped>
    .container {
        width: 35%;
    }
    .signIn {
        background-color: #ada79a;
        color: #fff;
    }
    .fab {
        color: #fff;
    }
    .link {
        color: #ada79a;
        text-decoration: underline;
        font-weight: 500;
    }
    .link:hover {
        color: #000;
        text-decoration: none;
    }
    .img {
      width: 20vw;
    }

</style>