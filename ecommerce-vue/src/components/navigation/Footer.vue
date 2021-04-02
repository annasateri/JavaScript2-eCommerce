<template>

<footer class="bg text-center">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Form -->
    <section>
      <form>
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto mb-3">
            <p class="pt-2">
              <strong>Subscribe to receive updates,<br>access to exclusive deals and more.</strong>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12 mt-3">
          <!-- Email -->
          <input type="email" class="form-control" placeholder="E-mail">
          <!--Grid column-->
          </div>

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn btn-rounded font-weight-bold mt-3">
              Subscribe
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="small text-center p-3 bg-black text-white">
    © 2021 Copyright:
    <a class="footerLink" href="/">Jewelryofsweden.com</a>
  </div>
  <!-- Copyright -->
</footer>

</template>

<script>
export default {

}
</script>

<style scoped>

  .bg {
    background: linear-gradient(90deg, rgba(230,221,200,0.33610538942139356) 0%, rgba(196,190,177,0.3333042689732143) 100%);
  }
  .footerLink {
    color: #ada79a;
  }
  .footerLink:hover {
    color: #fff;
  }
  .btn {
    background-color: #ada79a;
    color: #fff;
  }
  .btn:hover {
    background-color: #fff;
    color: #ada79a;
  }

</style>