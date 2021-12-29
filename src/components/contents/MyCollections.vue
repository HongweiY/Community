<template>
  <div>
    <table class="layui-table">
      <thead>
      <tr>
        <td>帖子标题</td>
        <td>收藏时间</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>这是我收藏的帖子</td>
        <td>2021-11-24</td>
        <td>
          <button class="layui-btn layui-btn-danger">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyCollections'
}
</script>

<style scoped>

</style>
