import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import { createDictionary, props } from './helpers'

const dictionary = createDictionary(props)
Validator.localize(dictionary);

Vue.use(VeeValidate, {
  locale: 'ru'
})
