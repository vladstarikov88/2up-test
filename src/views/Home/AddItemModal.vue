<template>
  <v-dialog
    v-bind:value="dialog"
    lazy
    @input="change"
    max-width="700px"
  >
    <v-card>
      <v-card-title>
        <h2 class="subtitle">{{ title }}</h2>
      </v-card-title>
      <v-card-text class="card-text">
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex sm4 xs12>
              <v-text-field 
                label="Название *"
                v-model="itemTitle"
                v-validate="'required'"
                data-vv-name="title"
                :error-messages="errors.collect('title')"
              />
            </v-flex>
            <v-flex sm4 xs12>
              <v-text-field 
                label="Цена *"
                v-model="price"
                v-validate="'required|numeric'"
                data-vv-name="price"
                :error-messages="errors.collect('price')"
              />
            </v-flex>
            <v-flex sm4 xs12>
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
import dayjs from 'dayjs'
import { mapState, mapActions } from 'vuex';
import { genetareId } from '@/assets/helpers'
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
      itemTitle: null,
      price: null,
      type: null,
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
      const id = genetareId()
      const type = this.types.find(type => {
        return type.value === this.type
      })

      const creationDate = dayjs().format('DD-MM-YYYY hh:mm')

      const newProduct = {
        id,
        title: this.itemTitle,
        price: this.price,
        type,
        creationDate
      };

      /* Добавить текст на ошибку на ввод строки вместо числа */
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

<style lang="scss" scoped>
.card-text {
  /deep/ .container {
    padding: 0;
  }
}
</style>
