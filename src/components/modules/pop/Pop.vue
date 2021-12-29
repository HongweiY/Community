<template>
  <div class="tips animation" v-show="isShow" :class="{'shake':type==='shake'}" ref="tips">
    <div class="content">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: 'Pop',
  props: {
    // 消息类型
    type: {
      type: String,
      default: ''
    },
    // 消息内容
    msg: {
      type: String,
      default: ''
    },
    // 组件是否显示
    isShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    // 监测isShow，让弹框显示
    isShow (newVal, oldVal) {
      if (newVal !== oldVal && newVal === true) {
        setTimeout(() => {
          // 获取父容器的宽高
          const weight = this.$refs.tips.clientWidth
          const height = this.$refs.tips.clientHeight
          // 让消息剧中显示
          this.$refs.tips.style.marginLeft = -weight / 2 + 'px'
          this.$refs.tips.style.marginTop = -height / 2 + 'px'
        }, 0)
        // 设置消息自动消失定时器
        setTimeout(() => {
          this.isShow = false
          this.msg = ''
          this.type = ''
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss">
// 定义都动动画
@keyframes shake {
  //定义开始结束状态
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.tips {
  position: fixed;
  top: 50%;
  left: 50%;
}

.animation {
  animation-fill-mode: both;
  animation-duration: .3s;
}

.content {
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
}

.shake {
  animation-name: shake;
}
</style>
