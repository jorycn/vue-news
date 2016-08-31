import {
  NEWS_SET_ITEMS
} from '../mutation-types'

const state = {
  items: []
}

const mutations = {
  [NEWS_SET_ITEMS] (state, arr) {
    state.items.push(arr)
  }
}

export default{
  state,
  mutations
}
