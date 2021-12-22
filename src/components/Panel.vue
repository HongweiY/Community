<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link tag="li" class="layui-hide-xs " to="/"><a href="/">首页</a></router-link>
        <router-link v-for="(item,index) in linkLists" :to="item.path" :key="'router'+index" tag="li">
          <a href="#">{{ item.name }}</a>
          <span class="layui-badge-dot" v-if="item.hasNew"></span>
        </router-link>
        <template v-if="isLogin">
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="fly-mid"></span></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="user/index.html">我发表的贴</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a
            href="user/index.html#collection">我收藏的贴</a></li>
        </template>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search"><i class="layui-icon"></i></span>
        <a href="jie/add.html" class="layui-btn">发表新帖</a>
      </div>
      <div class="layui-hide-sm layui-show-xs-block"
           style="margin-top: -10px; padding-bottom: 10px; text-align: center;">
        <a href="jie/add.html" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  data: function () {
    return {
      linkLists: [
        {
          name: '提问',
          path: '/index/ask',
          hasNew: false
        },
        {
          name: '分享',
          path: '/index/share',
          hasNew: false
        },
        {
          name: '讨论',
          path: '/index/discuss',
          hasNew: false
        },
        {
          name: '建议',
          path: '/index/advise',
          hasNew: false
        },
        {
          name: '公告',
          path: '/index/notice',
          hasNew: false
        },
        {
          name: '动态',
          path: '/index/news',
          hasNew: false
        }
      ],
      isLogin: this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>

</style>
