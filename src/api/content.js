import axios from '@/utils/request'
import qs from 'qs'

const getList = (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}
const getTips = (options) => {
  return axios.get('/public/tips')
}
const getLinks = () => {
  return axios.get('/public/links')
}
const getTop = () => {
  return axios.get('/public/top')
}

export {
  getList,
  getTop,
  getTips,
  getLinks
}
