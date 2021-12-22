import AlertComponent from '@/components/modules/alert/Alert'

const Alert = {}

Alert.install = Vue => {
  // 1. 添加全局方法或 property
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 4. 添加实例方法
  Vue.prototype.$alert = (msg) => {
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
  }
  Vue.prototype.$confirm = (msg, success, cancel) => {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true

    if (success !== undefined) {
      success()
    }

    if (cancel !== undefined) {
      cancel()
    }
  }
}

export default Alert
