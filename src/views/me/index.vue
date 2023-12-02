<template>
    <div class="me">
      <div class="section">
          <div class="user-top between" @click="toInfo">
            <div class="between">
              <img src="../img/user.png" alt="">
              <span class="username">Username</span>
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="user-account">
            <p class="my-account">
              <span>My account</span>
              <span class="detail">detail</span>
            </p>
            <div class="between">
              <div class="between">
                <img src="../img/myIcon.png" width="21px" alt="">
                <span class="num">582,263,233</span>
                <!-- <span class="gold">Gold</span> -->
              </div>
              <div class="topUp" @click="toAccount">Top up</div>
            </div>
          </div>
          <div class="between mt-32" @click="toRecord">
            <div class="between">
              <img src="../img/myIcon1.png" alt="">
              <span class="tip">Earn Bonus</span>
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="between mt-32" @click="toRecord">
            <div class="between">
              <img src="../img/myIcon1.png" alt="">
              <span class="tip">Transaction History</span>
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="between mt-32" @click="toRecord">
            <div class="between">
              <img src="../img/myIcon1.png" alt="">
              <span class="tip">Play List</span>
            </div>
            <van-icon name="arrow" />
          </div>
          <!-- <div class="log-out">Log out</div> -->
      </div>
      <div class="tabbar1"></div>
    </div>
  </template>
  <script>
  import { Icon ,Checkbox} from 'vant'

  export default {
    components: {
        [Icon.name]: Icon,
        [Checkbox.name]: Checkbox,
    },
    data(){
      return {
      }
    },
    methods:{
      toInfo() {
        this.$router.push({
            path: '/information'
          });
      },
      toAccount() {
        this.$router.push({
            path: '/account'
          });
      },
      toRecord() {
        this.$router.push({
            path: '/record'
          });
      }
    }
  }
  </script>
<style lang="scss" scoped>
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.section {
  padding: 0 24px;
  flex: 1;
  overflow-y: scroll;
}
.between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-top {
  margin-top: 20px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
}
.username {
  margin-left: 16px;
  color: #333;
  font-size: 16px;
}
.my-account {
  color: #555;
  font-size: 14px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  .detail {
    color: #999;
    font-size: 10px;
  }

}
.user-account {
  margin-top: 16px;
  padding: 12px 16px 15px 16px;
  box-sizing: border-box;
  // height: 83px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
}
.num {
  color: #000;
  font-size: 14px;
  font-weight: 500;
}
.gold {
  color: #999;
  font-size: 12px;
}
.topUp {
  width: 66px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  background: #E30E8E;
  box-shadow: 0px 2px 12px 0px rgba(147, 242, 206, 0.32);
}
.tip {
  color: #333;
  font-size: 14px;
  margin-left: 10px;
}
.mt-32 {
  margin-top: 32px;
}
.tabbar1 {
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    height: 74px;
}
.log-out {
  width: 80%;
  margin-left: 10%;
  height: 46px;
  text-align: center;
  line-height: 46px;
  flex-shrink: 0;
  border-radius: 16px;
  color: #fff;
  margin-top: 32px;
  font-size: 16px;
  background: #FF8C21;
  box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.40);
}
</style>
  