<template>
  <div class="input-text-field">
    <v-text-field 
      label="Поиск*" 
      single-line
      v-model="searchText"
      @input="debounceFilterData($event)"
      @keyup.enter="filterData($event.target.value)"
    >
      <template v-slot:append>
        <v-btn
          icon
          @click="filterData($event.target.value)"
        >
          <v-icon 
            small
            color="blue darken-3"
            v-html="'fas fa-search'"
          />
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    debounceFilterData: _.debounce(function (event) {
      this.filterData(event)
    }, 1000),
    filterData(text = "") {
      this.$emit('filter-data', text)
    },
  }
}
</script>

<style lang="scss" scoped>
.input-text-field {
  width: 100%;
  margin-left: 2rem;
  /deep/ .v-input{
    padding: 0;
    margin: 0;
  }
}
</style>
