<template>
  <div id="app">
    <!--<mt-header fixed title="醒银POS登录"></mt-header>-->
    <section id="content">
      <h3></h3>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button size="normal">登录</mt-button>
    </section>

  </div>
</template>

<script>
  import '../static/css/base.css'
  export default {
    name: 'App',
    data () {
      return {
        username: '',
        password: '',
        status: false // true正在提交， false还没提交
      }
    }
  }
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
    color:#333;
    background: url(../static/images/logo.jpg) no-repeat center center;
    background-size: cover;
  }

  section#content{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.4);
    padding-top: 100px;
    box-sizing: border-box;
  }
  section#content h3{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius:50%;
    border:5px solid #43a647;
    text-align: center;
    color:#fff;
    background: url(../static/images/logo_login.jpg) no-repeat center center;
    background-size: 100px 100px;
    margin-bottom: 2rem;
  }
  .mint-cell-wrapper{
    border-bottom: 1px solid #fff;
    background-image: none;
    color:#fff;
  }
  .mint-field-core{
    color:#fff;
  }
  ::-webkit-input-placeholder{
    color:#fff;
  }
  .mint-cell{
    background-color: transparent;
    width: 80%;
    margin: 0 auto;
  }
  .mint-button--normal{
    width: 80%;
    border: 1px solid #fff;
    display: block;
    background-color: rgba(0,0,0,.5);
    margin: 2rem auto;
    color:#fff;
  }
</style>
