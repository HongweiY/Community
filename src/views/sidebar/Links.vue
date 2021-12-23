<template>
  <div class="fly-panel fly-link">
    <h3 class="fly-panel-title">友情链接</h3>
    <dl class="fly-panel-main">
      <dd v-for="(item,index) in list" :key="'links'+index">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </dd>
      <dd>
        <a href="#" class="fly-link">申请友链</a>
      </dd>
    </dl>
  </div>
</template>

<script>
import { getLinks } from '@/api/content'

export default {
  name: 'Links',
  data: function () {
    return {
      list: []
    }
  },
  mounted () {
    getLinks().then(res => {
      if (res.code === 200) {
        this.list = res.data
      }
    }
    )
  }
}
</script>

<style scoped>

</style>
