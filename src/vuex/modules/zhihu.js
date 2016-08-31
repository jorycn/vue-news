import {
  ZHIHU_SET_ARTICLES,
  ZHIHU_SET_DATE_POINTER
} from '../mutation-types'

const state = {
  datePointer: {
    value: '',
    format: ''
  },
  days: []
}

const mutations = {
  [ZHIHU_SET_ARTICLES] (state, date, arr) {
    state.days.push({
      date: date,
      articles: arr
    })
  },
  [ZHIHU_SET_DATE_POINTER] (state, value) {
    state.datePointer = value
  }
}

export default{
  state,
  mutations
}
