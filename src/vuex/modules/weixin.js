import {
  WEIXIN_SET_ITEMS
} from '../mutation-types'

// ps:单页数,pno：页码
const state = {
  items: [],
  pno: 1
}

const mutations = {
  [WEIXIN_SET_ITEMS] (state, arr) {
    state.items.push(arr)
    state.pno += 1
  }
}

export default{
  state,
  mutations
}
