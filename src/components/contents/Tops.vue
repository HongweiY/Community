<template>
  <div>
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a>置顶</a>
        <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #FF5722;">去签到</a>
      </div>
      <list-item :lists="lists" :isShowMore="false"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/contents/ListItem'
import { getList } from '@/api/content'

export default {
  name: 'Tops',
  data () {
    return {
      limit: 10,
      lists: [{
        uid: {
          nickname: 'yhe',
          isVip: 4,
          fav: 66
        },
        catalog: 'ask',
        content: '',
        title: '这是一条测试数据',
        isEnd: '1',
        created: '2021-12-17 23:44:33',
        status: '0',
        answer: 23,
        tags: [{
          name: '精华',
          class: 'layui-bg-red'
        },
        {
          name: '热门',
          class: 'layui-bg-blue'
        }]
      }]
    }
  },
  components: {
    ListItem
  },
  mounted () {
    this._getList()
  },
  methods: {
    _getList () {
      const options = {
        catalog: this.catalog,
        isTop: 1,
        status: this.status,
        tag: this.tag,
        order: this.order,
        page: this.page,
        limit: this.limit
      }
      getList(options).then(res => {

      })
    }
  }

}
</script>

<style scoped>

</style>
