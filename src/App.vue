<template>
  <div id="app">
    <div class="layui-container">
      <imooc-header></imooc-header>
      <router-view></router-view>
      <imooc-footer></imooc-footer>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'imooc-header': Header,
    'imooc-footer': Footer
  }
}

</script>

<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
.gray {
  color: #999;
}
</style>
