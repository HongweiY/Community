<template>
  <div>
    <table class="layui-table">
      <thead>
      <tr>
        <th>
          <div class="layui-table-cell pl0">
            <span>帖子标题</span>
          </div>
        </th>
        <th>
          <div class="layui-table-cell">
            <span>状态</span>
          </div>
        </th>
        <th>
          <div class="layui-table-cell">
            <span>结帖</span>
          </div>
        </th>
        <th>
          <div class="layui-table-cell">
            <span>发表时间</span>
          </div>
        </th>
        <th>
          <div class="layui-table-cell">
            <span>数据</span>
          </div>
        </th>
        <th>
          <div class="layui-table-cell">
            <span>操作</span>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-center">
        <td class="text-left">测试数据标题</td>
        <td>打开</td>
        <td>未接</td>
        <td>2021-02-09</td>
        <td>10阅读/20点赞</td>
        <td>
          <button class="layui-btn">编辑</button>
          <button class="layui-btn layui-btn-danger">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyPosts'
}
</script>

<style scoped lang="css">

</style>
