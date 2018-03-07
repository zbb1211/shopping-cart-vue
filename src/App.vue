<template>
  <div id="app">
    <div class="icon_sao"></div>
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
            <mt-cell v-for="n in 15" :key="n">
              <h3 class="goods_name">{{n}}-醒乐纯棉</h3>
              <h4 class="upccode">69234506007</h4>
              <p class="items_price-container">
                <span class="price">价格：12.00</span>
                <span class="quantity">库存量：2</span>
              </p>
            </mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>    
  </div>
  <div class="footer">
      <ul>
        <li class="footer_qua"><img src="../static/images/cash.png" alt=""></li>
        <li class="footer_cart"><img src="../static/images/cart.png" alt=""> </li>
        <li class="footer_button"><mt-button size="normal">去结算</mt-button></li>
      </ul>
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
  position: fixed;
  top: 0;
  height: 3.3rem;
  background-color: #cecece;
  z-index: 10;
  left:44px;
  width:calc(100% - 44px);
}
.icon_sao{
  width: 44px;
  height:  3.3rem;
  background: #fff url(../static/images/sao.png) no-repeat center 8px;
  background-size: 38px 38px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  border-bottom: 1px solid #43a647;
  box-sizing: border-box;
}
.mint-searchbar{
  background-color: #fff;
  border-bottom: 1px solid #43a647;
  width:100%;
}
.mint-searchbar-inner{
  background-color: #f5f5f5;
  border-radius:1rem;
  padding: 0;
  width: 100%;
  height: 2.25rem;
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
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  padding-top: 4rem;
  width: 100%;
  height:100%;
  box-sizing: border-box;
}
.content .classify{
  width: 6.25rem;
  margin-right: 0.5rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
.content .items{
  flex:1;
  overflow-y: scroll;
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
.mint-navbar .mint-tab-item{
  background-color: #f5f5f5;
  padding: 0.7rem;
}
.mint-tab-item-label{
  font-size: 1rem;
}
.footer{
  position: fixed;
  bottom: 0;
  width:100%;
  height:50px;
  z-index:11;
  box-shadow: 0 -2px 2px #f5f5f5;
  background-color: #fff;
}
.footer > ul > li{
  float: left;
  width: 33.3%;
  height: 100%;
}
.footer > ul > li > img{
  width:40px;
  height:40px;
  margin-top: 3px;
}
.mint-button--default{
  color:#43a647;
  box-shadow: none;
  border:1px solid #43a647;
  margin-top: 5px;
}
.footer > ul > li.footer_button{
  text-align: right;
  padding-right: 5px;
  box-sizing: border-box;
}
.footer > ul > li.footer_qua{
  text-align: left;
  padding-left: 5px;
  box-sizing: border-box;
}
.footer > ul > li.footer_cart{
  text-align: left;
  padding-left: 1.5rem;
  box-sizing: border-box;
}
.mint-cell-value{
  color:#000;
  display: block;
  width: 100%;
}
.mint-cell-value .goods_name{
  width: 100%;
  height:24px;
  line-height: 24px;
  overflow: hidden;
  font-weight: normal;
  font-size: 1.1rem;
}
.mint-cell-value .upccode{
  font-weight: normal;
  line-height: 24px;
  font-size: 1rem;
  color:#43a647;
}
.items_price-container{
  color:#43a647;
  display: flex;
  line-height: 24px;
}
.items_price-container > span.price,
.items_price-container > span.quantity{
  flex:1;
}
.items_price-container > span.quantity{
  text-align: right;
}
.mint-cell-title{
  flex: 0;
}
</style>
