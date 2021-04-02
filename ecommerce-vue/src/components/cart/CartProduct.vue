<template>
          <!-- First row -->
          <tr>
            <th scope="row">
              <img :src="require('@/assets/images/imgProducts/' + item.product.img)" alt="" class="img-fluid z-depth-0 image-width">
            </th>
            <td>
              <p class="text-muted">{{ item.product.title }}</p>
            </td>
            <td>{{ item.product.description }}</td>
            <!-- <td></td> -->
            <td>{{ item.quantity }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <button type="button" class="btn btn-sm btnColor" data-toggle="tooltip" data-placement="top" title="Remove item" @click="deleteProduct(item, item.quantity)">X</button>
            </td>
          </tr>
          <!-- First row -->


</template>

<script>
import { mapActions } from 'vuex';


export default {
  props: ['item'],

  methods: {
    ...mapActions(['deleteProduct'])
  }

}
</script>

<style scoped>
.image-width {
  width: 150px;
}

.btnColor {
  background-color: #ada79a;
  color: #fff;
}

</style>