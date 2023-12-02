<template>
  <div class="search-wrap">
    <div class="search-box" >
            <van-icon name="arrow-left" />
            <div class="home_search">
              <div class="search_img_box" >
                <van-icon name="search" class="search_img" size="20" color="#E30E8E"/>
                <!-- <img src="../img/search_img.png" alt="" srcset="" class="search_img"> -->
                <!-- <img src="../img/search_icon.png" alt="" srcset="" class="search_icon"> -->
              </div>
              <input type="text" placeholder="Text text text">
            </div>
        </div>
        <div class="history-wrap">
          <div class="flex-b">
            <p class="font-c3">Search History</p>
            <img src="../img/delete.png" alt="" srcset="">
          </div>
          <div class="book-name-wrap">
            <span class="act-name">Book name</span>
            <span>Author</span>
            <span>Book name Book name</span>
            <span>Book name Book name</span>
            <span>Book name Book name</span>
            <span>Book name Book name</span>
          </div>
        </div>
        <div class="tab_wrap">
          <!-- <p :class="tabIndex===1?'act-tab':''" @click="handleTabIndex(1)">Skit</p>
          <p :class="tabIndex===2?'act-tab':''" @click="handleTabIndex(2)">Novel</p> -->
        </div>
        <div class="list-wrap">
            <div class="flex_between list-box mb-20">
              <div>
                <img src="../img/img.png" alt=""  class="left_img">
              </div>
              <div class="list-right">
                <div class="">
                  <p class="font-c3">Short play title</p>
                </div>
                <div class="flex_between flex_d_between">
                  <p class="m-18 font-cA"><span>Fantasy</span><span>Fantasy</span><span>Fantasy</span></p>
                   <p class="font-c6">This is an intorduction content</p>
                </div>
                
              </div>
            </div>
        </div>
        <end/>
  </div>
</template>

<script>
  import { Icon } from 'vant'
  import End from '@/components/end.vue';

  export default {
  components: {
      [Icon.name]: Icon,
      End
  },
  data(){
    return {
      tabIndex: 1
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
.search-wrap {
  padding: 0 14px 0 24px;
  box-sizing: border-box;
}
  .search-box {
    display: flex;
    align-items: center;
    margin: 21px 0;
    
    .home_search {
      margin-left: 14px;
      flex: 1;
      display: flex;
      height: 42px;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 22px;
      border: 1px solid #E30E8E;
      background: #FFF;
      input {
        flex: 1;
        border: none;
        height:42px;
        line-height: 42px;
        background: #fff;
      }
      .search_img_box {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .search_img {
          margin: 4px 12px 0 18px;
        }
        .search_icon {
          position: absolute;
          bottom: -10px;
          right: -10px;
        }
      }
    }
  }
  .flex-b {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 16px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .font-C3 {
    color: #333;
    font-size: 20px;
    font-weight: 600;
  }
  .book-name-wrap {
    display: flex;
    flex-wrap:wrap;
    span {
      width: 50%;
      color: #999;
      font-size: 12px;
      // line-height: 42px;
      margin-bottom: 16px;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
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
  .mb-20 {
    margin-bottom: 20px;
  }
  .m-18 {
    margin: 8px 0 22px;
    span {
      margin-right: 16px;
      color: #E30E8E;;
    }
  }
  .flex_between {
    display: flex;
    justify-content: space-between;
  }
  .font-c3 {
      color: #333;
      font-size: 20px;
      font-weight: 500;
    }
  .list-box {
    .left_img {
      width: 100px;
    }
    .flex_d_between {
      flex: 1;
      flex-direction: column;
    }
    .font-cA {
      color: #CCC;
      font-size: 12px;
    }
    .font-c6 {
      color: #999;
      font-size: 14px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .list-right {
      margin-left: 27px;
      display: flex;
      flex-direction: column;
      padding: 10px 0 5px;
      box-sizing: border-box;
      flex: 1;
    }

  }
  .act-name {
    color: #E30E8E!important;
  }
  .eye-num {
    display: flex;
    align-items: center;
    color: #E30E8E;
    font-size: 10px;
  }
</style>
