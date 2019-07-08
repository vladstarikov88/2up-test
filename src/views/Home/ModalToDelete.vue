<template>
  <v-dialog
    v-bind:value="dialogDelete"
    lazy
    @input="change"
    max-width="700px"
  >
    <v-card>
      <v-card-title>
        <h2 class="subtitle">
          {{title}}
        </h2>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
          flat 
          color="blue" 
          @click="cancel"
        >Отменить</v-btn>
        <v-btn 
          flat
          color="error" 
          @click="deleteProduct"
        >Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  model: {
    prop: 'dialogDelete',
    event: 'input'
  },
  props: {
    title: String,
    dialogDelete: Boolean,
  },
  methods: {
    deleteProduct() {
      this.$emit('delete')
      this.$emit('input', false)
    },
    cancel() {
      this.$emit('input', false)
    },
    change(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style>

</style>
