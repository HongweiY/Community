<template>
  <div class="modal" v-show="isShow">
    <div class="mask" @click="closeModal('isShow')"></div>
    <div class=" layui-layer layui-layer-page
      " :class="{'active':isShow}">
      <div class="layui-layer-title">
        签到说明
        <i class="layui-icon layui-icon-close" @click="closeModal('isShow')"></i>
      </div>
      <div class="layui-layer-content">
        <div class="layui-text">
          <blockquote class="layui-elem-quote">"签到"可获得积分奖励如下：</blockquote>
          <table class="layui-table">
            <thead>
            <tr>
              <td>连续签到天数</td>
              <td>获得的奖励</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>&lt; 5</td>
              <td>获得5金币</td>
            </tr>
            <tr>
              <td> &ge; 10</td>
              <td>获得20金币</td>
            </tr>
            <tr>
              <td>&ge; 15</td>
              <td>获得30金币</td>
            </tr>
            <tr>
              <td>&ge; 20</td>
              <td>获得40金币</td>
            </tr>
            <tr>
              <td>&ge; 30</td>
              <td>获得60金币</td>
            </tr>
            </tbody>
          </table>
          <div>
            <p>中断签到则规则从新计算</p>
            <p style="color: #FD482C">不可利用规则自动签到，否则封禁账号</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInfo',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>

</style>
