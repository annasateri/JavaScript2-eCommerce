<template>


<div class="container pt-5">


  <div class="mt-0">

    <div class="row">
        <img class="card-img-top newInImg1" :src="newInImg1" href="#">
    </div>

  </div>


    <!-- Card image -->
  <div class="text-center mt-5">
    <img class="newInImg card-img-top" :src="newInImg"
      alt="Card image cap">

      

        <!-- Card content -->
  <div class="card-body card-body-cascade text-center mt-3">

    <!-- Text -->
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed debitis accusantium, sapiente quae non aut architecto odit vitae inventore molestias, saepe quasi!<br>Consectetur ducimus nulla corporis explicabo numquam aliquid in sit praesentium culpa iste officiis quisquam mollitia odio assumenda dolorum nesciunt corrupti, quam facere sunt sed. Nostrum, exercitationem nemo.
    </p>

    <p class="card-text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum possimus quod animi aperiam dolorem adipisci fugiat et odio. Laboriosam sapiente nam quidem animi, voluptates sequi quam! Quaerat, at quis.<br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nobis dolorem iusto amet ipsam, fugit totam atque architecto, voluptates tenetur eveniet praesentium alias ab fugiat, minus nisi. Est blanditiis, expedita libero omnis, vero unde a id consectetur at itaque aliquid.</p>

    <p class="card-text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum a similique nisi sunt culpa dignissimos adipisci harum reprehenderit accusantium?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, esse similique alias, autem ut totam cumque aut reprehenderit illum animi consequuntur numquam eum quia quasi molestias, officiis accusantium aperiam porro.</p>
  </div>

  </div>
<!-- Card -->
<div class="card shadow-0 card-cascade wider reverse">



  

</div>
<!-- Card -->

</div>


</template>

<script>
export default {
  data() {
    return {
      newInImg: require('../assets/images/imgFrontpage/newIn.png'),
      newInImg1: require('../assets/images/imgFrontpage/newInImg1.png')
    }
  }

}
</script>

<style scoped>

  .newInImg {
    width: 50%;
  }

  .newInImg1 {
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: auto auto auto;
  }

</style>