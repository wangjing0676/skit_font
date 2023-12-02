<template>
  <div class="box">
    <div class="topTitle">
        <van-icon name="arrow-left" @click="goBack"/>
        <span>Modify information</span>
        <span></span>
      </div>
    <div class="section">
          <div  class="user-record">
             <div class="tab">
               <div @click="handleTab(1)"> 
                <span :class="tabIndex===1?'act-tab':''">Purchase record</span>
                <span v-if='tabIndex===1' class="line"></span>
               </div>
               <div  @click="handleTab(2)">
                <span :class="tabIndex===2?'act-tab':''">Recharge record</span>
                <span v-if='tabIndex===2' class="line"></span>
               </div>
             </div>
             <div v-if="tabIndex===1">
                  <div v-for="(item,index) in purchaseList" class="purchaseList">
                     <img src="../img/img.png" alt="" style="height: 58px;">
                     <div class="right-purchase">
                        <div class="mb-10">
                          <span class="font-14 font-C3">{{ item.bookName }}</span>
                          <span class="font-12 font-C9">{{ item.data }}</span>
                        </div>
                        <div>
                          <span class="font-12 font-C9">{{ item.tips }}</span>
                          <span class="font-14 font-CF">{{ item.coins }}</span>
                        </div>
                     </div>
                  </div>
             </div>
             <div v-if="tabIndex===2">
                  <div v-for="(item,index) in purchaseList" class="rechargeList">
                     <div class="recharge">
                        <div>
                          <img src="../img/myIcon.png" alt="" style="height: 58px;">
                          <span class="font-14 font-CF">+ {{ item.coins }} Coins</span>
                        </div>
                        <div>
                          <span class="font-12 font-C9">{{ item.data }}</span>
                        </div>
                     </div>
                  </div>
             </div>
          </div>
    </div>
    <div class="tabbar1"></div>
  </div>
</template>
<script>
import { Icon ,field} from 'vant'

export default {
  components: {
      [Icon.name]: Icon,
      [field.name]: field,
  },
  data(){
    return {
      username: 'username',
      tabIndex: 1,
      purchaseList:[{
        img: '../img/img.png',
        bookName: 'bookName',
        data: 'Now 20.2023',
        tips: 'Chapter 1',
        coins:'- 50 Coins'
      },{
        img: '../img/img.png',
        bookName: 'bookName',
        data: 'Now 20.2023',
        tips: 'Chapter 1',
        coins:'- 50 Coins'
      }]
    }
  },
  methods:{
    handleTab(index) {
      this.tabIndex = index
    },
    goBack() {
      this.$router.back()
    },
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}
.tab {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
  color: #CCC;
  font-size: 14px;
  div {
    text-align: center;
    position: relative;
  }
  .line {
    position: absolute;
    right: 0;
    bottom: -5px;
    display: inline-block;
    width: 60px;
    height: 3px;
    border-radius: 11px;
    background: linear-gradient(270deg, rgba(255, 140, 33, 0.60) 0%, rgba(255, 140, 33, 0.00) 100%);
  }
  .act-tab {
    color: #FF8C21;
  }
}
.purchaseList:not(:nth-last-child(1)),.rechargeList:not(:nth-last-child(1)){
  border-bottom: 1px solid #EEE;
}
.rechargeList {
  .recharge {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    div {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px!important;
        margin-top: 2px;
      }
    }
  }
}
.purchaseList {
  display: flex;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  .right-purchase {
    margin-left:12px;
    flex: 1;
    div {
      display: flex;
      justify-content: space-between;
    }
    .mb-10{
      margin-top: 6px;
      margin-bottom: 10px;
    }
    .font-C3 {
      color: #333;
    }
  }
}
.font-C9 {
      color: #999;
    }
    .font-CF{
      color: #FFA959;
    }
    
    .font-14 {
      font-size: 14px;
    }
    .font-12 {
      font-size: 12px;
    }
.center {
  display: flex;
  // justify-content: space-between;
  align-items: center;
}

.num {
  color: #000;
  font-size: 18px;
}
.gold {
  color: #999;
  font-size: 12px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section {
  padding: 0 30px;
  flex: 1;
  overflow-y: scroll;
}
.tabbar1 {
  border-radius: 24px 24px 0px 0px;
  background: #FFF;
  height: 74px;
}

.topTitle {
  font-size: 16px;
  color: #000;
  padding: 0 20px;
  box-sizing: border-box;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
}

</style>
