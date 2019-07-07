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
        <v-data-table 
          :headers="headers"
          :items="items"
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
export default {
  components: {
    TableWrapper,
    AddItemModal
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
    ...mapActions('table', ['addNewProduct']),
    openModalToAddNewProduct() {
      this.dialog = true;
    }
  }
}
</script>

<style>

</style>
