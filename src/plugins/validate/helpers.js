const required = () => '';
const numeric = () => 'Значение должно быть числом';

export const props = [
  'price',
  'title',
  'amount',
  'type',
]

export const createDictionary = props => {
  let dictionary = {
    ru: {
      custom: { },
      messages: {
        price: numeric()
      }
    }
  }

  props.forEach(prop => {
    dictionary.ru.custom[prop] = {
      required
    }
  })

  return dictionary
}

export default { createDictionary, props }
