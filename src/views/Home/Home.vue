<template>
  <v-layout 
    align-center 
    justify-center
  >
    <v-flex md6 sm8 xs12>
      <table-wrapper>
        <v-data-table 
          :headers="headers"
          :items="items"
        />
      </table-wrapper>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import { headers } from '@/assets/tableData'
import TableWrapper from '@/components/TableWrapper'
export default {
  components: {
    TableWrapper
  },
  data() {
    return {
      headers: headers
    }
  },
  computed: {
    ...mapGetters('data', ['items'])
  }
}
</script>

<style>

</style>
