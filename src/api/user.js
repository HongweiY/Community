import axios from '@/utils/request'

const userSign = () => axios.get('/user/sign')

const editBaseInfo = (data) => axios.post('/user/updateUserInfo', data)

export {
  userSign,
  editBaseInfo
}
