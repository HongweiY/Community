<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <img src="../assets/images/logo.png" alt="layui">
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
        </li>
        <li class="layui-nav-item">
          <a href="case/case.html"><i class="iconfont icon-iconmingxinganli"></i>案例</a>
        </li>
        <li class="layui-nav-item">
          <a href="/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">

        <template v-if="!isShow">
          <li class="layui-nav-item">
            <router-link class="iconfont icon-touxiang layui-hide-xs" :to="{path:'loginssss'}"></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name:'login'}">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name:'register'}">注册</router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入"
               class="iconfont icon-qq"></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入"
               class="iconfont icon-weibo"></a>
          </li>
        </template>
        <template v-else>
          <!-- 登入后的状态 -->
          <li class="layui-nav-item" @mouseover="showMenu()" @mouseleave="hideMenu()">
            <a class="fly-nav-avatar" href="javascript:;">
              <cite class="layui-hide-xs">{{ userInfo.nickname }}</cite>
              <!--              <i class="iconfont icon-renzheng layui-hide-xs" title="认证信息：layui 作者"></i>-->
              <i class="layui-badge fly-badge-vip layui-hide-xs" v-show="userInfo.isVip">VIP{{ userInfo.isVip }}</i>
              <img :src="userInfo.pic">
            </a>
            <dl class="layui-nav-child layui-anim layui-anim-downbit" :class="{'layui-show':isShowMenu}">
              <dd>
                <router-link :to="{name:'info'}"><i class="layui-icon">&#xe620;</i>基本设置</router-link>
              </dd>
              <dd>
                <router-link :to="{name:'msg'}"><i class="iconfont icon-tongzhi" style="top: 4px;"></i>我的消息
                </router-link>
              </dd>
              <dd><a href="user/home.html"><i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页</a>
              </dd>
              <hr style="margin: 5px 0;">
              <dd><a href="javascript:void(0)" style="text-align: center;" @click="logout()">退出</a></dd>
            </dl>
          </li>
        </template>

      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      isShowMenu: false,
      menuControl: {}
    }
  },
  methods: {
    showMenu () {
      clearTimeout(this.menuControl)
      this.menuControl = setTimeout(() => {
        this.isShowMenu = true
      }, 100)
    },
    hideMenu () {
      clearTimeout(this.menuControl)
      this.menuControl = setTimeout(() => {
        this.isShowMenu = false
      }, 500)
    },
    logout () {
      localStorage.clear()
      this.$store.commit('setUserInfo', {})
      this.$store.commit('setIsLogin', false)
      this.$store.commit('setToken', '')
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    isShow: function () {
      return this.$store.state.isLogin
    },
    userInfo: function () {
      return this.$store.state.userInfo
    }
  }
}
</script>

<style scoped>

</style>
