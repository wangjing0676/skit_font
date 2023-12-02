<template>
    <div class="collect">
      <div class="loginBox" v-if='!isLogin'>
          <img src="../img/login.png" alt="">
          <div class="loginInBtn" @click="toLogin">Login in</div>
      </div>
      <div class="section" v-else>
        <column-list :bookList="bookList"/>
      </div>
      <div class="tabbar1" v-if="isEdit"></div>
    </div>
  </template>
  <script>
  import { Icon ,Checkbox} from 'vant'
  import { collectAdd,collectList  } from 'api/home.js';
  import { getToken } from '@/utils/auth'
  import ColumnList from '@/components/collectionList.vue';

  export default {
    components: {
        [Icon.name]: Icon,
        [Checkbox.name]: Checkbox,
        ColumnList
    },
    data() {
      return {
        active: 1,
        tabIndex: 1,
        isEdit: true,
        checked: true,
        isLogin:getToken(),
        bookList: [{
            title: 'Short play...',
            desc: '5 episodes',
            checked: false
        },{
            title: 'Short play...',
            desc: '5 episodes',
            checked: false
        },{
            title: 'Short play...',
            desc: '5 episodes',
            checked: false
        },{
            title: 'Short play...',
            desc: '5 episodes',
            checked: false
        }]
      }
    },
    methods:{

        toLogin() {
          this.$router.push({
                path: '/login?redirect=collect'
            });
        },
        toBookPage() {
            return
            this.$router.push({
                path: '/bookPage'
            });
        }
    },
    async mounted(){
      if (getToken()) {
        let res = await collectAdd({id:100000})
        // let res = await collectList()
        console.log(res)
      }
    }
  }
  </script>
<style lang="scss" scoped>

.section {
  padding: 10 21px;
  box-sizing: border-box;
}

.loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .loginInBtn {
        width: 210px;
        height: 52px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #FF8C21;
        box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.40);
        line-height: 52px;
        text-align: center;
        font-size: 14px;
        color: #fff;
    }
}

</style>
  