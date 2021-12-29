<template>
  <div class="fly-panel fly-panel-user ">
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name:'myPosts'}">我的发帖</router-link>
        </li>
        <li>
          <router-link :to="{name:'myCollections'}">我的收藏</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'Posts'
}
</script>

<style scoped>

</style>
