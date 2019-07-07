const required = () => 'Поле является обязательным';
// const numeric = () => 'Значение должно быть числом';

export const createDictionary = props => {
  let dictionary = {
    ru: {
      custom: {

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

export const props = [
  'name',
  'surname',
  'login',
  'password',
  'role',
  'number',
  'type',
  'machine',
  'executor',
  'deadline',
  'serialNumber',
  'location',
]

export default { createDictionary, props }
