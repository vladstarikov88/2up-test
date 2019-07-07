<template>
  <v-layout 
    align-center 
    justify-center
  >
    <v-flex md6 sm8 xs12>
      <table-wrapper>
        <template v-slot:actions>
          <v-btn
            dark
            color="blue darken-3"
            @click="openModalToAddNewProduct"
          >
            Создать
          </v-btn>
        </template>
        <product-table 
          :headers="headers"
          :items="items"
          @delete-product="deleteProductById"
        />
      </table-wrapper>
    </v-flex>
    <add-item-modal
      v-model="dialog"
      title="Добавить запись в таблицу"
      @addNewProduct="addNewProduct"
    />
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { headers } from '@/assets/tableData'
import TableWrapper from '@/components/TableWrapper'
import AddItemModal from './AddItemModal'
import ProductTable from './ProductTable'
export default {
  components: {
    TableWrapper,
    AddItemModal,
    ProductTable,
  },
  data() {
    return {
      headers: headers,
      dialog: false,
    }
  },
  computed: {
    ...mapGetters('table', ['items'])
  },
  methods: {
    ...mapActions('table', ['addNewProduct', 'deleteProductById']),
    openModalToAddNewProduct() {
      this.dialog = true;
    },
  }
}
</script>

<style>

</style>
