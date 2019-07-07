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
          text: 'Новый',
          value: 'new'
        },
        {
          text: 'Активный',
          value: 'active'
        },
      ]
      commit('getProductTypes', payload)
    }
  },
  getters: {
    items(state){
      return state.tableProducts
    }
  }
}

export default data;
