const data = {
  namespaced: true,
  state: {
    isDrawerOpen: true,
    tableItems: [],
  },
  mutations: {
    addItemToTable(state, payload) {
      state.tableHeaders.push(payload)
    }
  },
  actions: {
    addItemToTable({commit}, payload) {
      commit('addItemToTable', payload)
    },
  },
  getters: {
    items(state){
      return state.tableItems
    }
  }
}

export default data;
