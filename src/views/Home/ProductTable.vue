<template>
  <div class="table-wrapper">
    <v-data-table 
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      hide-actions
      disable-initial-sort
      rows-per-page-text="Записей на странице"
      :custom-sort="sortItems"
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
    </v-data-table>
    <v-pagination 
      v-model="pagination.page" 
      :length="pages"
    />
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
      pages: null,
    }
  },
  watch: {
    items(val) {
      this.pagination.totalItems = val.length
      this.countPages()
    }
  },
  mounted() {
    this.countPages()
  },
  methods: {
    deleteProduct(productId) {
      this.$emit('delete-product', productId)
    },
    countPages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) {
        this.pages = 0
      }
      
      const pages = this.pagination.totalItems / this.pagination.rowsPerPage;
      this.pages = Math.ceil(pages)
    },
    sortItems(items, index, isDesc) {
      items.sort((a, b) => {
        if (index === "title") {
          if (!isDesc) {
            console.log(a[index], b[index])
            return a[index] < b[index] ? -1 : 1;
          } else {
            return b[index] - a[index] ? -1 : 1
          }
          return 0
        }

        if (index === "price") {
          if (!isDesc) {
            return a[index] - b[index];
          } else {
            console.log('+')
            return b[index] - a[index]
          }
        }
      });
      return items;
    },
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
