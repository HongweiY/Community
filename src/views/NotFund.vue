<template>
  <div class="layui-container flex">
    <img src="../assets/images/404.png">
    <p>页面找不到了</p>
    <router-link to="/" class="layui-btn">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFund'
}
</script>

<style scoped lang="scss">
.flex {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  p {
    padding: 10px 0 15px 0;
    color: #9F9F9F;
  }
}

</style>
