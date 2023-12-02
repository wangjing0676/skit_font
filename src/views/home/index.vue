<template>
    <div class="home">
      <div class="section">
        <div>
          <!-- <div class="tab_wrap">
            <p :class="tabIndex===1?'act-tab':''" @click="handleTabIndex(1)">Skit</p>
            <p :class="tabIndex===2?'act-tab':''" @click="handleTabIndex(2)">Novel</p>
          </div> -->
          <div>
            <banner :banners="banners"/>
            <home-title :title="rowList.title" :isShowArrow="true"/>
            <row-list :bookList="rowList.shorts"/>
            <home-title :title="columnList.title" :isShowArrow="false"/>
            <column-list :bookList="columnList.shorts"/>
          </div>
        </div>
        </div>
      <div class="tabbar1"></div>
    </div>
  </template>
  <script>
  import { Icon,Image } from 'vant'
  import { fetchList } from 'api/home.js';
  import Banner from '@/components/banner.vue';
  import HomeTitle from '@/components/title.vue';
  import ColumnList from '@/components/homeColumnList.vue';
  import RowList from '@/components/homeRowList.vue';

  export default {
    components: {
        [Icon.name]: Icon,
        [Image.name]: Image,
        Banner,
        HomeTitle,
        ColumnList,
        RowList
    },
   async created(){
      let res = await fetchList({})
      if (res.data && res.data.banners) {
         this.banners = res.data.banners
      } 
      if (res.data && res.data.albums) {
        this.rowList = res.data.albums && res.data.albums.find(item=>item.style=='row')
        this.columnList = res.data.albums && res.data.albums.find(item=>item.style=='column')
      }
    },
    data(){
      return {
        banners: [],
        rowList: [],
        columnList: []
      }
    },
    methods:{
      handleTabIndex(index){
        if (index===this.tabIndex) return
        this.tabIndex = index
      }
    }
  }
  </script>
<style lang="scss" scoped>
  .tab_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin:20px 0;
    p {
      width: 40%;
      text-align: center;
      color: #6E787E;
      font-size: 16px;
    }
    .act-tab {
      color: #333;
      font-weight: 600;
    }
  }

.mb-20{
  margin-bottom: 20px;
}
.mb-8{
  margin-bottom: 8px;
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
}
.flex_between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}

.section {
  box-sizing: border-box;
  flex: 1;
  overflow-y: scroll;
}
.act-tab{
    color: #FF8C21;
}
.tabbar1 {
    border-radius: 24px 24px 0px 0px;
    background: #FFF;
    height: 74px;
}
.book-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  .book-box {
    width: calc((100% - 30px) / 3);
    max-width: calc(1(100% - 30px) / 3);
    flex-shrink: 0;
    text-align: center;
    background: #F9F9F9;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 18px;
  }
  .book-box:not(:nth-child(3n)){
    margin-right: 15px;
  }
  .font-c3 {
    font-size: 12px ;
    color: #333;
    margin: 6px 0 0 6px;
    text-align: left;
  }
  .font-cb {
    font-size: 10px;
    color: #BBB;
    margin: 2px 0 6px 6px;
    text-align: left;
  }
}


</style>
  