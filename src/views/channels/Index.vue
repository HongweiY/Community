<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <tops></tops>
        <list></list>
      </div>
      <div class="layui-col-md4">
        <tips></tips>
        <sign></sign>
        <hot-list></hot-list>
        <ads></ads>
        <links></links>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from '@/views/sidebar/Sign'
import Tips from '@/views/sidebar/Tips'
import HotList from '@/views/sidebar/HotList'
import Ads from '@/views/sidebar/Ads'
import Links from '@/views/sidebar/Links'
import List from '@/components/contents/List'
import Tops from '@/components/contents/Tops'

export default {
  name: 'Index',
  components: {
    Tips,
    Sign,
    HotList,
    Ads,
    Links,
    List,
    Tops
  }
}
</script>

<style scoped>

</style>
