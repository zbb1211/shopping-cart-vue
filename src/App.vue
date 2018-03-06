<template>
  <div id="app">
    <div class="icon_sao">

    </div>
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <div class="content">
      <div class="classify">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">选项一</mt-tab-item>
          <mt-tab-item id="2">选项二</mt-tab-item>
          <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="items">
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div class="footer">
        
      </div>
    </div>

  </div>
</template>

<script>
import '../static/css/base.css'
export default {
  name: 'App',
  data () {
    return {
      value: '',
      username: '',
      password: '',
      selected: '1',
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
}
.mint-search{
  height: 3.3rem;
  background-color: #cecece;
}
.icon_sao{
  width: 44px;
  height: 44px;
  background: url(../static/images/sao.png) no-repeat center 8px;
  background-size: 38px 38px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
}
.mint-searchbar{
  background-color: #fff;
  border-bottom: 1px solid #43a647;
}
.mint-searchbar-inner{
  background-color: #f5f5f5;
  border-radius:1rem;
  padding: 0;
  width: calc(100% - 44px);
  height: 2.25rem;
  margin-left: 44px;
}
.mint-searchbar-inner .mintui-search {
  font-size: 1.5rem;
  color: #43a647;
}
.mint-searchbar-inner input[type='search']{
  font-size: 1.25rem;
}
#editing-view-port > div{
  font-size: 1.5rem;
}
.mint-searchbar-cancel{
  color:#43a647;
}
.content{
  display: flex;
  padding-top: 8px;
  height:calc(100vh - 100px);
}
.content .classify{
  width: 6.25rem;
  margin-right: 0.5rem;
  background-color: #f5f5f5;
}
.content .items{
  flex:1;
}
.mint-navbar{
  display: block;
}
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: none;
  color:#43a647;
  background-color: #fff;
  margin-bottom: 0;
}
.mint-cell-wrapper{
  background-image: none;
  border-bottom: 1px solid #43a647;
}
.mint-tab-item{
  background-color: #f5f5f5;
}
</style>
