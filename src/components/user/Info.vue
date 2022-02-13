<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <validation-observer v-slot="{ handleSubmit }" ref="loginForm">
      <form method="post" @submit.prevent="handleSubmit(submit)">
        <validation-provider v-slot="{errors}" rules="required|email" name="用户名">
          <div class="layui-form-item">
            <label for="L_email" class="layui-form-label">邮箱</label>
            <div class="layui-input-inline">
              <input type="text" id="L_email" name="email" v-model="username"
                     class="layui-input">
            </div>
            <div class="layui-form-mid layui-word-aux">
              如果您在邮箱已激活的情况下，变更了邮箱，需<a href="activate.html" style="font-size: 12px; color: #4f99cf;">重新验证邮箱</a>。
            </div>
            <div class="layui-form-mid err">{{ errors[0] }}</div>
          </div>
        </validation-provider>
        <validation-provider v-slot="{errors}" rules="required" name="昵称">
          <div class="layui-form-item">
            <label for="L_username" class="layui-form-label">昵称</label>
            <div class="layui-input-inline">
              <input type="text" id="L_username" v-model="name"
                     class="layui-input">

            </div>
            <div class="layui-form-mid err">{{ errors[0] }}</div>
          </div>
        </validation-provider>
        <div class="layui-form-item">
          <label for="L_city" class="layui-form-label">城市</label>
          <div class="layui-input-inline">
            <input type="text" id="L_city" v-model="location" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">性别</label>
          <div class="layui-input-inline gender">
            <label for="gender-meal">
              <input type="radio" name="sex" value="0" id="gender-meal" title="男" v-model="gender">
              <i class="layui-icon layui-icon-circle" :class="{'layui-icon-radio':gender==='0'}"></i>
              男
            </label>
            <label for="gender-female">
              <input type="radio" name="sex" value="1" title="女" id="gender-female" v-model="gender">
              <i class="layui-icon layui-icon-circle" :class="{'layui-icon-radio':gender==='1'}"></i>
              女
            </label>
          </div>
        </div>
        <div class="layui-form-item layui-form-text">
          <label for="sign" class="layui-form-label">签名</label>
          <div class="layui-input-block">
          <textarea placeholder="随便写些什么刷下存在感" id="sign" v-model="remark" class="layui-textarea"
                    style="height: 80px;"></textarea>
          </div>
        </div>
        <div class="layui-form-item">
          <button class="layui-btn" key="set-mine" lay-filter="*" lay-submit>确认修改</button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { editBaseInfo } from '@/api/user'
import stroe from '../../store/index'

export default {
  name: 'Info',
  data: function () {
    return {
      username: '',
      name: '',
      location: '',
      remark: '',
      gender: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted () {
    this.username = stroe.state.userInfo.username || ''
    this.name = stroe.state.userInfo.name || ''
    this.location = stroe.state.userInfo.location || ''
    this.gender = stroe.state.userInfo.gender || ''
    this.remark = stroe.state.userInfo.remark || ''
  },
  methods: {
    submit () {
      editBaseInfo({
        username: this.username,
        name: this.name,
        gender: this.gender,
        location: this.location,
        remark: this.remark
      }).then(res => {
        if (res.code === 200) {
          const user = res.data
          user.username = this.username
          this.$store.commit('setUserInfo', user)
          localStorage.setItem('userInfo', JSON.stringify(user))
          this.$alert('修改成功')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.gender {
  color: #9F9F9F;

  label {
    margin-left: 20px;
  }

  .layui-icon-radio {
    color: #1cc9b8;
  }
}

</style>
