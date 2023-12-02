<template>
    <div class="information">
      <div class="topTitle">
        <van-icon name="arrow-left" @click="goBack"/>
        <span>Modify information</span>
        <span></span>
      </div>
      <div class="section">
          <div class="user-top center">
            <div class="pos center">
              <img src="../img/user.png" alt="" class="user-img">
              <img src="../img/edit1.png" alt="" class="edit-img">
            </div>
            <input v-model="username" placeholder="提示性文字" class="input"/>
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
        username: 'username'
      }
    },
    methods:{
      goBack() {
        this.$router.back()
      },
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
  padding: 0 30px;
  flex: 1;
  overflow-y: scroll;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input {
  height: 32px;
  border-radius: 8px;
  border: 1.2px solid #DDD;  
  margin-top: 16px;
  width: 80%;
  color: #333;
  font-size: 14px;
  padding-left: 10px;
  box-sizing: border-box;
}
.pos {
    position: relative;
}
.user-top {
  margin-top: 20px;
  padding: 10px 32px 10px 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  background: #FFF;
  position: relative;
}
.user-img {
    width: 92px;
}
.edit-img {
    width: 16px;
    position: absolute;
    bottom: 6px;
    right: 10px;
    background: #fff;
    border: 1px solid #FFBA58;
    border-radius: 8px;
}
.username {
  margin-left: 16px;
  color: #333;
  font-size: 16px;
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
  