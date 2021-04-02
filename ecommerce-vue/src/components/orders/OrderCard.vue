<template>
            <tr>
              <th scope="row"><i class="fas fa-gem"></i></th>
                    <td>{{ order.email }}</td>
                    <td>{{ order._id }}</td>
                    <td>{{ order.totalPrice }} SEK</td>
            </tr>
</template>

<script>
export default {
    props: ['order']

}
</script>

<style>

</style>