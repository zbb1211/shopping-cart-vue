<template>
  <div id="app">
      <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title"></h1>
      </header>
      <form class="form" @submit.prevent="submit">
        <div class="mui-content">
          <div class="login_mask">
            <div class="login_input">
              <input class="text" type="text" placeholder="用户名">
            </div>
            <div class="login_input">
              <input class="text" type="password" placeholder="密码">
            </div>
            <div class="login_button">
              <button class="btn">{{ status ? '正在登录中' : '登录' }}</button>
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      form: {
        username: 'admin',
        pwd: 'admin'
      },
      status: false // true正在提交， false还没提交
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.mui-bar-nav{
  background-color: #029b29;
}
.mui-bar-nav .mui-title{
  width: 100%;
  height: 100%;
  background: url(../static/images/h.png) no-repeat center center;
  background-size: contain;
}
.mui-bar .mui-title{
  left: 0;
  right: 0;
  display: block;
}
.form{
  padding-top: 44px;
}
  .mui-content{
    height: calc(100vh - 44px);
    background: url(../static/images/logo.jpg) no-repeat center center;
    background-size: cover;
  }
  .mui-content .login_mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    box-sizing: border-box;
    padding-top: 40%;
  }
.mui-content .login_mask .login_input{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 20px;
}
.mui-content .login_mask .login_input input{
  font-size: 20px;
  color: #fff;
  background-color: #cecece;

}
.mui-content .login_mask .login_button{
  text-align: center;
}
.mui-content .login_mask .login_button button{
  width: 80%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 20px;
  background-color: #029b29;
  color:#fff;
  padding:0;
}
</style>
