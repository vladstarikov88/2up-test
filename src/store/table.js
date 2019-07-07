const data = {
  namespaced: true,
  state: {
    isDrawerOpen: true,
    types: [],
    tableProducts: [],
  },
  mutations: {
    addNewProduct(state, payload) {
      state.tableProducts.push(payload)
    },
    getProductTypes(state, payload) {
      state.types = payload
    },
    deleteProductById(state, payload) {
      const index = state.tableProducts.findIndex(product => {
        return product.id === payload
      })

      state.tableProducts.splice(index, 1)
    }
  },
  actions: {
    addNewProduct({commit}, payload) {
      commit('addNewProduct', payload)
    },
    getProductTypes({commit}) {
      /* here we can get some data from server via axios */
      /* but I'll show you simple example */
      const payload = [
        {
          text: 'Продажа',
          value: 'sale'
        },
        {
          text: 'Покупка',
          value: 'purchase'
        },
        {
          text: 'Обмен',
          value: 'swap'
        },
      ]
      commit('getProductTypes', payload)
    },
    deleteProductById({commit}, payload) {
      commit('deleteProductById', payload)
    }
  },
  getters: {
    items(state){
      return state.tableProducts
    }
  }
}

export default data;
