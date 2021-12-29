<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree" lay-filter="test">
      <!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
      <li class="layui-nav-item" v-for="(item,index) in list " :key="'icon'+index">
        <router-link :to="{name:item.link}" :active-class="item.activeClass">
          <i class="layui-icon" :class="item.class"></i>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data: function () {
    return {
      list: [
        {
          name: '个人中心',
          class: 'layui-icon-user',
          link: 'users'
        },
        {
          name: '我的主页',
          class: 'layui-icon-home',
          link: 'center'
        },
        {
          name: '基本设置',
          class: 'layui-icon-set',
          link: 'info',
          activeClass: 'layui-this'
        },
        {
          name: '我的帖子',
          class: 'layui-icon-file-b',
          link: 'myPosts',
          activeClass: 'layui-this'
        },
        {
          name: '我的消息',
          class: 'layui-icon-reply-fill',
          link: 'msg'
        },
        {
          name: '其他设置',
          class: 'layui-icon-util',
          link: 'others'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
