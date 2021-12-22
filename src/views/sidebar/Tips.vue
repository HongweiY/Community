<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear quick">
        <li class="layui-col-xs6" v-for="(item,index) in list" :key="'tag'+index">
          <a :href="item.link" target="_blank">{{ item.title }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTips } from '@/api/content'

export default {
  name: 'Tips',
  data: function () {
    return {
      list: []
    }
  },
  mounted () {
    getTips().then(res => {
      if (res.code === 200) {
        this.list = res.data
      }
    })
  }
}
</script>

<style scoped lang="scss">
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
}

.quick {
  border: 1px solid $border-color;
  border-bottom: none;
  border-right: none;

  .layui-col-xs6 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    text-align: center;
    border: 1px solid $border-color;
    border-top: none;
    border-left: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      display: block;
    }
  }
}

</style>
