import { extend, localize } from 'vee-validate'
import { required, email, min, length, confirmed, max } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    code: '验证码',
    username: '用户名',
    nickname: '昵称'
  },
  fields: {
    email: {
      email: '请输入正确的_field_'
    }
  }
})
