<template>
  <v-data-table 
    :headers="headers"
    :items="items"
  >
    <template v-slot:items="props">
      <td>{{ props.item.title }}</td>
      <td>{{ props.item.amount }}</td>
      <td>{{ props.item.price }}</td>
      <td>{{ props.item.type }}</td>
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
  }
}
</script>

<style>

</style>
