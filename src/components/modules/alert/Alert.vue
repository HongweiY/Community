<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type==='alert'">
        <div class="btn-common success" @click="closeMsg()">确定</div>
      </div>
      <div v-else class="space-round">
        <div class="btn-common cancel" @click="cancelEvent()">取消</div>
        <div class="btn-common success" @click="confirmEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>

</template>

<script>
export default {
  name: 'Alert',
  props: {
    msg: {
      type: String,
      default: '这是测试消息'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'alert'
    },
    success: {
      type: Function,
      default: () => {
        console.log('confirm')
      }
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('cancel')
      }
    }
  },
  methods: {
    closeMsg: function () {
      this.isShow = false
      this.msg = ''
    },
    closeMask: function () {
      if (this.type === 'alert') {
        this.closeMsg()
      }
    },
    confirmEvent: function () {
      this.success()
      this.closeMsg()
    },
    cancelEvent: function () {
      this.cancel()
      this.closeMsg()
    }
  }
}
</script>

<style scoped lang="scss">
$btn-main: #009688;
$btn-dark: darken($btn-main, 6%);
.alert {
  width: 300px;
  height: 150px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  position: fixed;
  margin-top: -150px;
  margin-left: -75px;
  z-index: 3000;
  border-radius: 6px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, .05);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.flex {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}

.space-round {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.btn-common {
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 6px;

  &.success {
    background: $btn-main;
    color: #fff;

    &:hover {
      background: $btn-dark;
    }
  }

  &.cancel {
    background: #ededed;
    color: #333333;
  }

}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .4);
  overflow: hidden;
  z-index: 2000;
}
</style>
