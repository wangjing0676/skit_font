<template>
    <div class="list-wrap">
      <div class="flex_between list-box mb-20"  v-for="(item,index) in bookList" :key="index" @click="toBookPage">
        <div >
          <img class="img" :src="item.cover" alt="">
        </div>
        <div class="list-right">
          <div class="flex_between mb-8">
            <p class="font-c3">{{ item.title }}</p>
            <!-- <p class="eye-num">
              <img  src="../views/img/eye.png" alt="">
              <span>{{item.collectNum}}k</span>
            </p> -->
          </div>
          <p class="m-15 font-cA">{{item.viewNum}}episodes</p>
          <p class="font-c6">{{ item.desc }}</p>
        </div>
      </div>
    </div>
</template>
<script>
  import { Icon } from 'vant'

  export default {
    props: ['bookList'],
    components: {
        [Icon.name]: Icon
    },
    methods:{
      toBookPage() {
        this.$router.push({
            path: '/bookPage'
          });
      }
    }
  }
</script>
<style  lang="scss" scoped>
  .list-box {
    margin: 13px 10px 0 15px;
    .img {
      width: 80px;
      border-radius: 4px;
    }
    .list-right {
      flex: 1;
      margin-left: 24px;
    }
  }
  
.mb-20{
  margin-bottom: 20px;
}
.font-c3 {
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
.font-cA {
  color: #AAA;;
  font-size: 10px;
}
.font-c6 {
  color: #666;;
  font-size: 12px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.flex_between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.eye-num {
    display: flex;
    align-items: center;
    color: #E30E8E;
    font-size: 10px;
  }
  .m-15 {
    margin: 11px 0 12px;
    color: #E30E8E;

  }
</style>