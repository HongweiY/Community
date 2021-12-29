import axios from '@/utils/request'
import store from '../store/index'

const userSign = () => {
  const headers = {
    Authorization: 'Bearer ' + store.state.token,
    'Content-Type': 'application/json'
  }
  return axios.get('/user/sign', {
    headers
  })
}

export {
  userSign
}
