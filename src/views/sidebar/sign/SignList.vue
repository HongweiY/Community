<template>
  <div class="modal" v-show="isRankShow">
    <div class="mask" @click="closeModal('isRankShow')"></div>
    <div class="layui-layer">
      <div class="layui-layer-title">
        签到活跃榜-TOP
        <i class="layui-icon-close layui-icon" @click="closeModal('isRankShow')"></i>
      </div>
      <div class="">
        <div class="layui-tab layui-tab-brief">
          <ul class="layui-tab-title">
            <li :class="{'layui-this':currentTab===0}" @click="tabChange(0)">最新签到</li>
            <li :class="{'layui-this':currentTab===1}" @click="tabChange(1)">今日最快</li>
            <li :class="{'layui-this':currentTab===2}" @click="tabChange(2)">总签到榜</li>
          </ul>
          <div class="layui-tab-content">
            <ul class="layui-tab-item layui-show">
              <li v-for="(item,index) in signList" :key="'sign'+index">
                <img src="/img/user.png"> <cite class="fly-link">{{ item.name }} </cite>
                <span class="fly-grey" v-if="currentTab!==2">签到与 <i style="color: orangered">{{
                    item.created
                  }}</i> </span>
                <span class="fly-grey" v-else>已经签到了 <i style="color: orangered">{{ item.days }}</i> 天</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SignList',
  data: function () {
    return {
      currentTab: 0,
      signList: []
    }
  },
  methods: {
    tabChange (val) {
      this.currentTab = val
    },
    closeModal (type) {
      this.$emit('closeModal')
    }
  },
  props: {
    isRankShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
