<template>
  <v-dialog
    v-bind:value="dialog"
    @input="change"
    max-width="700px"
  >
    <v-card>
      <v-card-title>
        <h3 class="subtitle">{{ title }}</h3>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex sm6 xs12>
              <v-text-field 
                label="Название *"
                v-model="itemTitle"
                v-validate="'required'"
                data-vv-name="title"
                :error-messages="errors.collect('title')"
              />
            </v-flex>
            <v-flex sm6 xs12>
              <v-text-field 
                label="Кол-во *"
                v-model="amount"
                v-validate="'required'"
                data-vv-name="amount"
                :error-messages="errors.collect('amount')"
              />
            </v-flex>
            <v-flex sm6 xs12>
              <v-text-field 
                label="Цена *"
                v-model="price"
                v-validate="'required'"
                data-vv-name="price"
                :error-messages="errors.collect('price')"
              />
            </v-flex>
            <v-flex sm6 xs12>
              <v-select
                flat
                label="Тип *"
                :items="types"
                v-model="type"
                v-validate="'required'"
                data-vv-name="type"
                :error-messages="errors.collect('type')"
              />
            </v-flex>
          </v-layout>
        </v-container>
        <small>* Обязательные поля</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
          flat 
          color="error" 
          @click="cancel"
        >Отменить</v-btn>
        <v-btn 
          flat
          color="success" 
          @click="addNewProduct"
        >Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  model: {
    prop: 'dialog',
    event: 'input'
  },
  props: {
    dialog: Boolean,
    title: String,
  },
  data() {
    return {
      itemTitle: '',
      amount: null,
      price: null,
      type: null
    }
  },
  computed: {
    ...mapState('table', ['types'])
  },
  beforeMount() {
    this.getProductTypes()
  },
  methods: {
    ...mapActions('table', ['getProductTypes']),
    change(val) {
      this.$emit('input', val)
    },
    cancel() {
      this.$emit('input', false)
    },
    addNewProduct() {
      const newProduct = {

      }

      this.$validator
        .validateAll()
        .then(res => {
          if(res) {
            this.$emit('addNewProduct', newProduct)
            this.$emit('input', false)
          }
        })
    }
  }
}
</script>

<style>

</style>
