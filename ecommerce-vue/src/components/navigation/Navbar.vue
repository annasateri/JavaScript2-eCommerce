<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logoText">
        <router-link :to="'/'"> <img class="logoImg navbar-brand" :src="logotype"> </router-link>
      </div>
  <div class="container">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/NewIn" exact>NEW IN</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Shop" exact>SHOP</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About" exact>ABOUT</router-link>
        </li>
      </ul>
      <ul class="nav-item navbar-nav ml-auto nav-flex-icons">
              
          <div class="nav-item dropdown mx-3">
              <a class="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false">
                <i class="fas fa-user fa-lg" ></i>
              </a>

              <ul class="dropdown-menu dropdown-menu-end p-2 font-weight-bold" aria-labelledby="navbarDropdownMenuLink">

              <li class="nav-item" v-if="loggedIn">
                <router-link class="nav-link" to="/order" exact>My orders</router-link>
              </li>
                
                <li class="nav-item" v-if="!loggedIn">
                <router-link class="nav-link" to="/login" exact>Login</router-link>
              </li>
              <li class="nav-item" v-if="loggedIn">
                <a href="#" class="nav-link" @click="logout">Logout</a>
              </li>
              
              </ul>

          </div>
            <router-link class="nav-link" to="/Cart" exact><i class="fas fa-shopping-bag"></i><span class="badge rounded-pill badge-notification bg-black" v-show="cartItemCount > 0">{{cartItemCount}}</span></router-link>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
    return {
        logotype: require('../../assets/images/imgFrontpage/logoNavbar.png')
      }
    },

  methods: {
    ...mapActions(['getUsers', 'updateUser', 'getOneUser', 'addToCart', 'logout'])

  },
  computed: {
    ...mapGetters(['users', 'user', 'cart', 'cartItemCount', 'loggedIn'])
  }
}
</script>

<style scoped>

  .nav-link:hover {
    text-decoration: underline;
  }

  .fas {
    color: #000;
  }
  .fas:hover {
    color: #ada79a;
  }

  .fa-shopping-bag {
    font-size: 15pt;
  }

  .logoText {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
  }

  .logoImg {
    width: 10rem;
  }

  .nav-link {
    z-index: 2;
  }

  .navbar-nav {
    z-index: 2;
  }

</style>