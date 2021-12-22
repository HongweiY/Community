import axios from '@/utils/request'

const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

const forget = (option) => {
  return axios.post('/forget', {
    ...option
  })
}

const login = (loginInfo) => {
  return axios.post('/login', {
    ...loginInfo
  })
}
const register = (regInfo) => {
  return axios.post('/register', {
    ...regInfo
  })
}

export { getCode, forget, login, register }
