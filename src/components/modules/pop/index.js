import PopComponent from '@/components/modules/pop/Pop'

const Pop = {}

Pop.install = (Vue) => {
  // 注册组件
  const PopConstructor = Vue.extend(PopComponent)
  const instance = new PopConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 添加实例方法以供全局使用
  Vue.prototype.$pop = (type, msg) => {
    instance.type = type
    instance.msg = msg
    instance.isShow = true
  }
}

export default Pop
