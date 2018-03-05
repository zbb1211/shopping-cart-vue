<template>
  <div id="login">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">醒收银系统</h1>
    </header>
    <form class="form" @submit.prevent="submit">
      <div class="line">
        <input class="text" type="text" placeholder="用户名" >
      </div>
      <div class="line">
        <input class="text" type="text" placeholder="密码" >
      </div>
      <div class="line">
        <button class="btn">{{ status ? '正在登录中' : '登录' }}</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
