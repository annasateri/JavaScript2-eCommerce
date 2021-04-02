<template>
  <div>
      <div class="d-flex justify-content-center bg-dark text-white">
        <p class="navText">DELIVERY IN 2-4 DAYS | FREE SHIPPING OVER 499:-</p>
      </div>
    
    <navbar />
    <router-view/>
    <get-in-touch />
    <app-footer />
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import GetInTouch from './components/navigation/GetInTouch.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    AppFooter: Footer,
    GetInTouch
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}

</script>

<style scoped>

  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .navText {
    margin: 0;
    padding: 0.7rem;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 8.5pt;
  }

</style>
