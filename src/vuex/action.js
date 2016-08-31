import * as types from './mutation-types'

const pad = (val) => {
  val += ''
  if (val.length < 2) return '0' + val
  return val
}

// 知乎
export const zSetAticles = ({ dispatch }, date, arr) => {
  dispatch(types.ZHIHU_SET_ARTICLES, date, arr)
}

export const zSetDatePointer = ({ dispatch }, date) => {
  dispatch(types.ZHIHU_SET_DATE_POINTER, {
    value: date.getFullYear() + pad(date.getMonth() + 1) + pad(date.getDate()),
    format: date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
  })
}

// 今天头条
export const nSetItems = ({ dispatch }, arr) => {
  dispatch(types.NEWS_SET_ITEMS, arr)
}
