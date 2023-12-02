<template>
    <div class="list-row-wrap">
      <div class="list-row-box"  v-for="(item,index) in bookList" :key="index" @click="toBookPage">
        <div>
          <img class="img" :src="item.cover" alt="">
        </div>
        <p class="list-row-title">{{ item.title }}</p>
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
 .list-row-wrap {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  margin-top: 16px;
  margin-left: 10px;
  margin-bottom: 40px;
  .img {
    width: 80px;
    border-radius: 5px;
  }
  .list-row-box {
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    p {
      margin-top: 5px;
      color: #000;
      font-size: 12px;
      font-weight: 600;
    }
  }
  .list-row-box:nth-child(1) {
    margin: 0;
  }
} 
  
.mb-20{
  margin-bottom: 20px;
}
.list-row-title {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>