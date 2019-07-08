<template>
  <div class="table-wrapper">
    <v-data-table 
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      hide-actions
      rows-per-page-text="Записей на странице"
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.title }}</td>
        <td class="creation-date">{{ props.item.creationDate }}</td>
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
      <!-- <template v-slot:pageText="props">
        Товаров {{ props.pageStart }} - {{ props.pageStop }} из {{ props.itemsLength }}
      </template> -->
    </v-data-table>
    <!-- <v-layout
      align-center
      justify-center
    >
      <v-flex> -->
        <v-pagination 
          v-model="pagination.page" 
          :length="pages"
        />
      <!-- </v-flex>
    </v-layout> -->
  </div>
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
  data() {
    return {
      pagination: {},
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  methods: {
    deleteProduct(productId) {
      this.$emit('delete-product', productId)
    }
  }
}
</script>

<style lang="scss" scoped>
.creation-date {
  width: 12em;
  display: flex;
  align-items: center;
}
.table-wrapper {
  display: flex;
  flex-direction: column;
  /deep/ .v-pagination {
    margin: 2rem auto 0;
    .v-icon {
      font-size: 1.4rem;
    }
  }
}
</style>
