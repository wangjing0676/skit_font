<template>
    <div class="box">
      <div class="topTitle">
        <van-icon name="arrow-left" @click="goBack"/>
        <span>Modify information</span>
        <span></span>
      </div>
      <div class="section">
            <div  class="user-account">
              <p class="my-account">My account</p>
              <div class="center">
                <img src="../img/myIcon.png" width="20px" alt="">
                <span class="num">582,263,233</span>
                <!-- <span class="gold">Gold</span> -->
              </div>
            </div>
            <div>
              <p class="package-title">Choose a recharge package</p>
              <div class="package-wrap">
                <div @click="handlePackage(index)" :class="index === actPackageIndex ? 'act-package package-box': 'package-box'" v-for="(item,index) in packageList">
                   <div class="package-margin">
                    <span class="up-num"> {{ item.coins }}</span>
                    <span class="up-coins">Coins</span>
                   </div>
                   <div :class="index === 0? 'act-line' :'line'"></div>
                   <div class="down-tips package-margin">
                    <span>USD</span>
                    <span>$ {{ item.usd }}</span>
                   </div>
                </div>
              </div>
            </div>
            <div class="payment">
              <p>Payment Method</p>
              <div>
                <select v-model="selected">
                  <option value="1">选项1</option>
                  <option value="2">选项2</option>
                  <option value="3">选项3</option>
                </select>
              </div>
            </div>
            <div class="buy-btn">Buy now</div>
      </div>
    </div>
  </template>
  <script>
  import { Icon ,field } from 'vant'

  export default {
    components: {
        [Icon.name]: Icon,
        [field.name]: field,
    },
    data(){
      return {
        actPackageIndex: 0,
        username: 'username',
        packageList: [{
          coins: '500',
          usd: '4.99'
        },{
          coins: '500',
          usd: '4.99'
        },{
          coins: '500',
          usd: '4.99'
        },{
          coins: '500',
          usd: '4.99'
        },{
          coins: '500',
          usd: '4.99'
        },{
          coins: '500',
          usd: '4.99'
        }]
      }
    },
    methods:{
      goBack() {
        this.$router.back()
      },
      handlePackage(index){
        this.actPackageIndex = index
      }
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
.package-title {
  color: #333;
  font-size: 14px;
  margin-top: 16px;
}
.package-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  .package-box {
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
    width: calc((100% - 20px) / 2);
    max-width: calc(1(100% - 20px) / 2);
    flex-shrink: 0;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 18px;
    padding: 2px 13px 6px;
    box-sizing: border-box;
  }
  .up-num {
    color: #333;
    font-size: 16px;
  }
  .package-margin {
    margin: 12px 0;
  }
  .up-coins {
    color: #666;
    font-size: 12px;
  }
  .down-tips {
    color: #FFA959;
    font-size: 12px;
  }
  .package-box:not(:nth-child(2n)){
    margin-right: 20px;
  }
  .line {
    height: 1px;
    background: #F3F3F3;
  }
  .act-line {
    height: 1px;
    background: #FFEAD6;
  }
  .act-package {
    border-radius: 8px;
    border: 1px solid #FFA959;
    background: #FFF8F1;
  }
}
.my-account {
  color: #555;
  font-size: 14px;
  margin-bottom: 12px;
}
.center {
  display: flex;
  align-items: center;
}
.user-account {
  margin-top: 16px;
  padding: 12px 16px 15px 16px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
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

.payment {
  margin-top: 16px;
  color: #333;
  font-size: 14px;
  select {
    border: none;
    margin-top: 12px;
    width: 100%;
    height: 38px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  }
}
.buy-btn {
  width: 80%;
  height: 46px;
  line-height: 46px;
  flex-shrink: 0;
  margin-left: 10%;
  text-align: center;
  border-radius: 16px;
  background: #FF8C21;
  box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.40);
  margin-top: 36px;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 20px;
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
  