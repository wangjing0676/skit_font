<template>
  <div id="app">
    <!-- <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
    </transition> -->
    <router-view class="router"></router-view>
    <div class="tabbar" v-if="showTabar>0">
        <div @click="tabChange(1)">
            <img v-if="showTabar===1" src="./views/img/act_home.png" alt=""  style="width: 24px;">
            <img v-else src="./views/img/home.png" alt="" style="width: 19px;">
            <span :class="showTabar===1 ? 'act-tab':''">Discover</span>
        </div>
        <div @click="tabChange(2)">
            <img v-if="showTabar===2" src="./views/img/act_collection.png" alt="" style="width: 26px;">
            <img v-else src="./views/img/collection.png" alt="" style="width: 21px;">
            <span :class="showTabar===2?'act-tab':''">Collection</span>
        </div>
        <div @click="tabChange(3)">
            <img v-if="showTabar===3" src="./views/img/act_me.png" alt="" style="width: 22px;">
            <img v-else src="./views/img/me.png" alt="" style="width: 17px;">
            <span :class="showTabar===3?'act-tab':''">Me</span>
        </div>
      </div>
  </div>
</template>
<script>
import defaultSetting from './settings'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['showTabar']),
  //   transitionName () {
  //     if (defaultSetting.needPageTrans) {
  //       return this.$store.state.direction
  //     }
  //     return ''
  //   }
  },
  
  data(){
    return {
    }
  },

  methods: {
    tabChange(index){
      if (index===this.showTabar) return
      this.$store.commit('updateTabar', index)
      localStorage.showTabar = index;
      if(index ===1) {
        this.$router.push({
            path: '/'
          });
      } else if (index===2) {
        this.$router.push({
            path: '/collect'
          });
      } else if (index ===3) {
        this.$router.push({
            path: '/me'
        });
      }
       
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}

.dis {
  display: flex;
  width: 200px;
  height: 200px;
}
.tabbar {
    // border-radius: 12px 12px 0px 0px;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        img {
            width: 20px
        }
    }
}
</style>
