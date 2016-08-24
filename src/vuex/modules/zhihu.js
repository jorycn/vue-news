import {
  SET_ARTICLES,
  SET_DATE_POINTER,
  SET_THEMES
} from '../mutation-types'

const state = {
  datePointer: {
    value: '',
    format: ''
  },
  days: [],
  themes: []
}

const mutations = {
  [SET_ARTICLES] (state, date, arr) {
    state.days.push({
      date: date,
      articles: arr
    })
  },
  [SET_DATE_POINTER] (state, value) {
    state.datePointer = value
  },
  [SET_THEMES] (state, arr) {
    state.themes = arr
  }
}

export default{
  state,
  mutations
}
