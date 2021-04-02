<template>

<div class="container pt-5">

    <!-- Card image -->
  <div class="text-center mt-3">
    <img class="imgLogo card-img-top" :src="logoFrontpage"
      alt="Card image cap">

        <!-- Card content -->
  <div class="card-body card-body-cascade text-center">

    <!-- Subtitle -->
    <h6 class="font-weight-bold indigo-text py-2">EXCLUSIVE JEWELRY FOR EVERY OCCASION</h6>
    <!-- Text -->
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed debitis accusantium, sapiente quae non aut architecto odit vitae inventore molestias, saepe quasi!<br>Consectetur ducimus nulla corporis explicabo numquam aliquid in sit praesentium culpa iste officiis quisquam mollitia odio assumenda dolorum nesciunt corrupti, quam facere sunt sed. Nostrum, exercitationem nemo.
    </p>

    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum possimus quod animi aperiam dolorem adipisci fugiat et odio. Laboriosam sapiente nam quidem animi, voluptates sequi quam! Quaerat, at quis.<br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nobis dolorem iusto amet ipsam, fugit totam atque architecto, voluptates tenetur eveniet praesentium alias ab fugiat, minus nisi. Est blanditiis, expedita libero omnis, vero unde a id consectetur at itaque aliquid.</p>

    <!-- Linkedin -->
    <a class="px-2 fa-lg li-ic"><i class="fab fa-instagram"></i></a>
    <!-- Twitter -->
    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
    <!-- Dribbble -->
    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>


  </div>

  </div>
<!-- Card -->
<div class="card shadow-0 card-cascade wider reverse">



  

</div>
<!-- Card -->



  <div class="mt-0">

    <div class="row">
        <img class="card-img-top" :src="imageUrl1" href="#">
    </div>

  </div>



</div>



</template>

<script>


export default {
  data() {
    return {
      logoFrontpage: require('../assets/images/imgFrontpage/LogoFrontpage.png'),
      imageUrl1: require('../assets/images/imgFrontpage/frontpage1.png')
    }
  }

}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.fab {
  color: #ada79a;
  cursor: pointer;
}
.fab:hover {
  color: #000;
}

.imgLogo {
  width: 80%;
}

</style>
