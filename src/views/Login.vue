<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name:'register'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <ValidationObserver v-slot="{ handleSubmit }" ref="loginForm">
                <form method="post" @submit.prevent="handleSubmit(submit)">
                  <validation-provider v-slot="{errors}" name="用户名" rules="required|email">
                    <div class="layui-form-item">
                      <label class="layui-form-label">用户名</label>
                      <div class="layui-input-inline">
                        <input type="text" name="username" v-model="username" placeholder="请输入用户名" autocomplete="off"
                               class="layui-input">
                      </div>
                      <div class="layui-form-mid err">{{ errors[0] }}</div>
                    </div>
                  </validation-provider>
                  <validation-provider v-slot="{errors}" name="密码" rules="required|min:6">
                    <div class="layui-form-item">
                      <label for="L_pass" class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <input type="password" v-model="password" id="L_pass" name="password" autocomplete="off"
                               class="layui-input">
                      </div>
                      <div class="layui-form-mid err">{{ errors[0] }}</div>
                    </div>
                  </validation-provider>
                  <validation-provider v-slot="{errors}" name="验证码" rules="required|length:4" ref="codeField">
                    <div class="layui-form-item">
                      <label for="L_vercode" class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input type="text" id="L_vercode" name="code" v-model="code"
                               placeholder="请输入验证码" autocomplete="off" class="layui-input">
                      </div>
                      <div class="layui-form-mid svg-code" @click="_getCode">
                        <span v-html="svg"></span>
                      </div>
                      <div class="layui-form-mid err">{{ errors[0] }}</div>
                    </div>
                  </validation-provider>
                  <div class="layui-form-item">
                    <button class="layui-btn" type="submit">立即登录</button>
                    <span style="padding-left:20px;">
                  <router-link :to="{name: 'forget'}">忘记密码？</router-link>
                </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq"
                       title="QQ登入"></a>
                    <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                       class="iconfont icon-weibo"
                       title="微博登入"></a>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import { v4 as uuid } from 'uuid'

import { getCode, login } from '@/api/login'

export default {
  name: 'login',
  data: function () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted () {
    window.vue = this
    let sid
    const localSid = localStorage.getItem('sid')
    if (localSid) {
      sid = localSid
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this._getCode()
  },
  methods: {
    _getCode () {
      const sid = this.$store.state.sid
      getCode(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    submit () {
      login({
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.$store.state.sid
      }).then(res => {
        if (res.code === 200) {
          res.data.username = this.username
          console.log(this.username)
          this.username = ''
          this.password = ''
          this.code = ''
          this.$store.commit('setUserInfo', res.data)
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          localStorage.setItem('token', JSON.stringify(res.token))
          console.log(JSON.stringify(res.token))

          this.$store.commit('setIsLogin', true)
          this.$router.push({ name: 'index' })
        } else if (res.code === 401) {
          this.$refs.codeField.setErrors([res.msg])
          this._getCode()
        }
      }).catch((err) => {
        const data = err.response.data
        if (data.code === 500) {
          this.$alert('用户名密码校验失败，请检查')
        } else {
          this.$alert('服务器异常，稍后再试')
        }
      })
    }
  }
}
</script>

<style scoped>
.svg-code {
  position: relative;
  top: -20px;
}

.err {
  color: red;
}
</style>
