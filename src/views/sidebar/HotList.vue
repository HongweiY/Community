<template>
  <div>
    <dl class="fly-panel fly-list-one top-week">
      <dt class="fly-panel-title">本周热议</dt>
      <template v-if="topWeek!==''">
        <dd v-for="(item,index) in topWeek" :key="'topWeek'+index">
          <a href="jie/detail.html">{{ item.title }}</a>
          <span><i class="iconfont icon-pinglun1"></i> {{ item.answer }}</span>
        </dd>
      </template>
      <div class="fly-none" v-else>没有相关数据</div>
    </dl>
  </div>
</template>

<script>
import { getTopWeek } from '@/api/content'

export default {
  name: 'HotList',
  data: function () {
    return {
      topWeek: []
    }
  },
  mounted () {
    getTopWeek().then(res => {
      if (res.code === 200) {
        this.topWeek = res.data
      }
    })
  }
}
</script>

<style scoped lang="scss">
.top-week {
  min-height: 180px;
}
</style>
