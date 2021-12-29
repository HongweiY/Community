<template>
  <div class="panel main pd20">
    <div class="msg">hi,admin ,你已经是我们的正式会员</div>
    <div class="layui-row layui-col-space20">
      <div class="layui-col-md6">
        <div class="panel border">
          <div class="title">我的会员信息</div>
          <div class="content">
            <p>积分经验值：600</p>
            <p>您当前为：非VIP</p>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <Sign class="border"></Sign>
      </div>
      <div class="layui-col-md12 mt-20">
        <div class="panel border">
          <div class="title">快捷方式</div>
          <div class="content shortcut-content">
            <ul class="layui-row layui-col-space10">
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-md3 layui-col-xs4">
                <a>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from '@/views/sidebar/Sign'

export default {
  name: 'home',
  components: {
    Sign
  }
}
</script>

<style scoped lang="scss">

@media screen and(max-width: 768px) {
  .panel {
    margin: 0 !important;
  }
}

.mt-20 {
  margin-top: -20px;
}

.pd20 {
  padding: 20px;
}

.panel {
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, .05);
  font-size: 14px;
  transition: all 0.2s;

  &.main {
    margin: 0 0 10px 225px;
  }
}

.msg {
  background-color: #F8F8F8;
  color: #666;
  height: 43px;
  line-height: 43px;
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 16px;
}

.border {
  border: 1px solid #e6e6e6;
}

.title {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dotted #e9e9e9;
  padding-left: 18px;
  color: #333;
}

.content {
  height: 50px;
  padding: 18px 16px;
  line-height: 26px;
  color: #666;
}

li {
  text-align: center;
  padding: 5px;
}

.shortcut {
  background-color: #2f9688;
  color: #fff;
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, .05);
  border-radius: 2px;
  font-size: 30px;
}

.shortcut-content {
  height: auto;
}
</style>
