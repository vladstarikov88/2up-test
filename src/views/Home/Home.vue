<template>
  <v-layout 
    align-center 
    justify-center
  >
    <v-flex md10 sm10 xs12>
      <table-wrapper>
        <template v-slot:actions>
          <v-btn
            dark
            color="blue darken-3"
            @click="openModalToAddNewProduct"
          >
            Создать
          </v-btn>
          <v-btn
            dark
            color="error"
          >
            Удалить
          </v-btn>
          <v-btn>
            Прочитанные
          </v-btn>
          <v-btn>
            Непрочитанные
          </v-btn>
          <search-field 
            @filter-data="filterData"
          />
        </template>
        <product-table 
          :headers="headers"
          :items="filteredItems"
          @delete-product="openModalToDelete"
        />
      </table-wrapper>
    </v-flex>
    <add-item-modal
      v-model="dialog"
      title="Добавить запись в таблицу"
      @addNewProduct="addNewProduct"
    />
    <modal-to-delete 
      v-model="dialogDelete"
      title="Удалить?"
      @delete="deleteProductById(deletedItem)"
    />
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { headers } from '@/assets/tableData'
import TableWrapper from '@/components/TableWrapper'
import SearchField from '@/components/SearchField'
import AddItemModal from './AddItemModal'
import ModalToDelete from './ModalToDelete'
import ProductTable from './ProductTable'
export default {
  components: {
    TableWrapper,
    AddItemModal,
    ModalToDelete,
    ProductTable,
    SearchField,
  },
  data() {
    return {
      headers: headers,
      dialog: false,
      dialogDelete: false,
      deletedItem: null,
      filteredItems: [],
    }
  },
  computed: {
    ...mapGetters('table', ['items'])
  },
  watch: {
    items(val) {
      this.filterData('')
    }
  },
  mounted() {
    this.filterData('')
  },
  methods: {
    ...mapActions('table', ['addNewProduct', 'deleteProductById']),
    openModalToAddNewProduct() {
      this.dialog = true;
    },
    openModalToDelete(val) {
      this.deletedItem = val
      this.dialogDelete = true
    },
    filterData(val) {
      this.filteredItems = this.items.filter(item => {
        return item.title.indexOf(val) > -1
      })
    }
  }
}
</script>

<style>

</style>
