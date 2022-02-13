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

.err {
  color: #FD482C;
}

.text-center {
  text-align: center;
}

.pl0 {
  padding-left: 0;
}

@for $i from 0 through 5 {
  .pd#{$i} {
    padding: $i*10+px;
  }
}

.text-left {
  text-align: left;
}
</style>
