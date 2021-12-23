<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">

        <div class="fly-panel" style="margin-bottom: 0;">

          <div class="fly-panel-title fly-filter">
            <a @click.prevent="search()" :class="{'layui-this' : status ==='' && tag==='' }">综合</a>
            <span class="fly-mid"></span>
            <a @click.prevent="search(0)" :class="{'layui-this' : status ==='0'  }">未结</a>
            <span class="fly-mid"></span>
            <a @click.prevent="search(1)" :class="{'layui-this' : status ==='1' }">已结</a>
            <span class="fly-mid"></span>
            <a @click.prevent="search(2)" :class="{'layui-this' : tag==='精华' }">精华</a>
            <span class="fly-filter-right layui-hide-xs">
            <a @click.prevent="search(3)" :class="{'layui-this' : sort ==='create'}">按最新</a>
            <span class="fly-mid"></span>
            <a @click.prevent="search(4)" :class="{'layui-this' :  sort ==='answer' }">按热议</a>
          </span>
          </div>
          <list-item :lists="lists" @nextPage="nextPage()" :isEnd="isEnd"></list-item>
        </div>
      </div>
      <!--      <div class="layui-col-md4">-->
      <!--        <div class="fly-panel fly-rank fly-rank-reply" id="LAY_replyRank">-->
      <!--          <h3 class="fly-panel-title">回贴周榜</h3>-->
      <!--          <dl>-->
      <!--            &lt;!&ndash;<i class="layui-icon fly-loading">&#xe63d;</i>&ndash;&gt;-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--            <dd>-->
      <!--              <a href="user/home.html">-->
      <!--                <img-->
      <!--                  src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>-->
      <!--              </a>-->
      <!--            </dd>-->
      <!--          </dl>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/contents/ListItem'
import { getList } from '@/api/content'

export default {
  name: 'List',
  data () {
    return {
      catalog: '',
      isRepeat: false,
      status: '',
      tag: '',
      sort: 'create',
      page: 1,
      limit: 20,
      lists: [],
      isEnd: false,
      current: ''
    }
  },
  components: {
    ListItem
  },
  mounted () {
    this._getList()
  },
  watch: {
    current (newVal, oldVal) {
      this.init()
    },
    '$route' (newVal, oldVal) {
      console.log(newVal)
      const category = newVal.params.category
      if (typeof category !== 'undefined' && category !== '') {
        this.catalog = category
      }
      this.init()
    }
  },
  methods: {
    init () {
      this.isEnd = false
      this.page = 0
      this.lists = []
      this._getList()
    },
    search (value) {
      if (typeof value === 'undefined' && this.current === '') {
        return
      }
      this.current = value
      switch (value) {
        case 0 :
          this.status = '0'
          break
        case 1 :
          this.status = '1'
          break
        case 2 :
          this.tag = '精华'
          break
        case 3 :
          this.sort = 'create'
          break
        case 4 :
          this.sort = 'answer'
          break
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
      }
    },
    _getList () {
      if (this.isEnd) return
      if (this.isRepeat) return
      this.isRepeat = true
      const options = {
        catalog: this.catalog,
        isTop: 0,
        status: this.status,
        tag: this.tag,
        sort: this.sort,
        page: this.page,
        limit: this.limit
      }
      getList(options).then(res => {
        this.isRepeat = false
        if (res.data.length < this.limit) {
          this.isEnd = true
        }
        if (res.code === 200) {
          if (this.lists.length > 0) {
            this.lists = this.lists.concat(res.data)
          } else {
            this.lists = res.data
          }
        }
      }).catch(errors => {
        this.isRepeat = false
        console.log(errors)
        if (errors) {
          this.$alert(errors.msg || errors.message)
        }
      })
    },
    nextPage () {
      this.page++
      this._getList()
    }
  }
}
</script>

<style scoped lang="scss">
.fly-filter {
  a {
    &:hover {
      cursor: pointer;
    }
  }
}

</style>
