<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <list></list>
      </div>
      <div class="layui-col-md4">
        <router-view></router-view>
        <hot-list></hot-list>
        <ads></ads>
        <links></links>
      </div>
    </div>
  </div>
</template>

<script>

import HotList from '@/views/sidebar/HotList'
import Ads from '@/views/sidebar/Ads'
import Links from '@/views/sidebar/Links'
import List from '@/components/contents/List'

export default {
  name: 'Index',
  components: {
    HotList,
    Ads,
    Links,
    List
  }
}
</script>

<style scoped>

</style>
