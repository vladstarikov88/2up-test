<template>
  <v-data-table 
    :headers="headers"
    :items="items"
    rows-per-page-text="10"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.title }}</td>
      <td>{{ props.item.amount }}</td>
      <td>{{ props.item.price }}</td>
      <td>{{ props.item.type.text }}</td>
      <td class="actions">
        <v-icon
          small
          v-html="'fas fa-trash'"
          color="red"
          @click="deleteProduct(props.item.id)"
        />
      </td>
    </template>
    <template v-slot:pageText="props">
      Товаров {{ props.pageStart }} - {{ props.pageStop }} из {{ props.itemsLength }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array
    },
    items: {
      type: Array
    },
  },
  methods: {
    deleteProduct(productId) {
      this.$emit('delete-product', productId)
    }
  }
}
</script>

<style>

</style>
