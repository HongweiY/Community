<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinHelp" @click="showModal('isShow')">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinTop" @click="showModal('isRankShow')">活跃榜<span
        class="layui-badge-dot"></span></a>
      <span class="fly-signin-days">已连续签到<cite>{{ count }}</cite>天</span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <template v-if="!isSign">
        <button class="layui-btn layui-btn-danger" id="LAY_signin" @click="sign()">今日签到</button>
        <span>可获得<cite>{{ favs }}</cite>飞吻</span>
      </template>
      <template v-else>
        <button class="layui-btn layui-btn-disabled">今日已签到</button>
        <span>获得了<cite>{{ favs }}</cite>飞吻</span>
      </template>
    </div>
    <SignInfo :isShow="isShow" @closeModal="closeModal('isShow')"></SignInfo>
    <SignList :isRankShow="isRankShow" @closeModal="closeModal('isRankShow')"></SignList>
  </div>
</template>

<script>
import SignInfo from '@/views/sidebar/sign/SignInfo'
import SignList from '@/views/sidebar/sign/SignList'
import { userSign } from '@/api/user'
import dayjs from 'dayjs'

export default {
  name: 'Sign',
  data: function () {
    return {
      isLogin: this.$store.state.isLogin,
      isSign: this.$store.state.userInfo.sign ? this.$store.state.userInfo.sign : false,
      isShow: false,
      isRankShow: false,
      currentTab: 0,
      canSign: '',
      signList: [
        {
          name: 'test1',
          days: 5,
          created: '2021-09-07 12:34:33'
        },
        {
          name: 'test2',
          days: 4,
          created: '2021-09-07 12:34:33'
        },
        {
          name: 'test4',
          days: 3,
          created: '2021-09-07 12:34:33'
        }
      ]
    }
  },
  components: {
    SignInfo,
    SignList
  },
  mounted () {
    const lastSign = this.$store.state.userInfo.lastSign
    const isSign = this.$store.state.userInfo.sign
    const nowData = dayjs().format('YYYY-MM-DD')
    const lastData = dayjs(lastSign).format('YYYY-MM-DD')
    const diff = dayjs(nowData).diff(lastData, 'day')
    if (diff > 0 && isSign === true) {
      this.isSign = false
    } else {
      this.isSign = isSign
    }
  },
  computed: {
    count () {
      if (this.$store.state.userInfo !== {}) {
        if (this.$store.state.userInfo.count !== undefined) {
          return this.$store.state.userInfo.count
        } else {
          return 0
        }
      } else {
        return 0
      }
    },
    favs () {
      const count = this.count
      let result = 0
      switch (true) {
        case count < 5:
          result = 5
          break
        case count >= 5 && count <= 15:
          result = 10
          break
        case count > 15 && count <= 30:
          result = 15
          break
        case count > 30 && count <= 100:
          result = 20
          break
        case count > 100 && count <= 365:
          result = 25
          break
        case count > 365:
          result = 30
          break
      }
      console.log(result)
      return result
    }
  },

  methods: {
    showModal (type) {
      this[type] = true
    },
    closeModal (type) {
      this[type] = false
    },
    tabChange (val) {
      this.currentTab = val
    },
    sign () {
      if (!this.isLogin) {
        this.$pop('shake', '请先登录')
        return
      }
      userSign().then(res => {
        const user = this.$store.state.userInfo
        if (res.code === 200) {
          user.favs = res.favs
          user.cout = res.count

          this.$pop('', res.msg)
        } else {
          this.$pop('', res.msg)
        }
        user.sign = true
        this.isSign = true
        user.lastSign = res.lastSign
        this.$store.commit('setUserInfo', user)
      })
    }
  }
}
</script>

<style lang="scss">
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20000;
  width: 100%;
  height: 100%;
}

.layui-layer {
  z-index: 21000;
  position: fixed;
  width: 300px;
  height: 480px;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  background: #fff;

  &
  .active {
    animation-fill-mode: both;
    animation-duration: 0.7s;
    animation-name: bounceIn;
  }

  .layui-title {
    color: #333;
    height: 42px;
    line-height: 42px;
    background-color: #f8f8f8;
    padding: 0 20px;

  }

  .layui-layer-content {
    padding-left: 20px;
  }

}

.layui-tab-item {
  line-height: 45px;

  li {
    border-bottom: 1px dotted #dcdcdc;

    &
    :last-child {
      border-bottom: none;
    }

  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }

}

.layui-icon-close {
  float: right !important;
  margin-right: -60px !important;
}

</style>
