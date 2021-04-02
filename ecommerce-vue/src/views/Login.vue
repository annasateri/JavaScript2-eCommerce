<template>

  <div class="container mt-5">

    <div class="text-center">
        <img class="card-img-top img" :src="imageLogo">
    </div>
      <!-- Default form login -->
    <form class="text-center border border-light p-5" @submit.prevent="onSubmit">


    <p class="h4 mb-4">SIGN IN</p>

    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" v-model="email" placeholder="E-mail">
    
    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" v-model="password" placeholder="Password">

    <!-- Sign in button -->
    <button class="btn signIn btn-block font-weight-bold" type="submit">SIGN IN</button>

    <p class="m-0 py-2">or</p>

    <button class="btn signIn btn-block font-weight-bold"><i class="fab fa-facebook-f pe-2"></i> SIGN IN WITH FACEBOOK</button>

        <!-- Register -->
    <p class="pt-3">New at Jewelry Of Sweden?
        <a class="link" href="/register">Join us!</a>
    </p>
 
</form>
<!-- Default form login -->
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: '',
            imageLogo: require('../assets/images/imgFrontpage/LogoFrontpage.png')
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit() {
            if(this.email !== '' && this.password !== '') {
                let user = {
                    email: this.email,
                    password: this.password
                }
                
                this.login(user)

                this.$router.push({name: 'Home'})

                
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