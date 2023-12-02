<template>
    <div class="search-box" >
        <div class="home_search">
          <div class="search_img_box">
              <van-icon name="search" class="search_img" size="20" color="#E30E8E"/>
            </div>
            <input type="text" placeholder="Text text text">
        </div>
        <img src="../views/img/gift.png" alt="" srcset="" class="gift_img">
    </div>
</template>
<script>
  import { Icon } from 'vant'
  export default {
    components: {
      [Icon.name]: Icon,
    },
  }
</script>
<style  lang="scss" scoped>
  
.search-box {
    padding: 20px 15px 0 19px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .gift_img {
      margin-left: 14px;
    }
    .home_search {
      flex: 1;
      display: flex;
      height: 40px;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 22px;
      border: 1px solid #E62C9C;
      background: rgba(217, 217, 217, 0.26);
      input {
        flex: 1;
        border: none;
        height:40px;
        line-height: 40px;
        background: none;
      }
      .search_img_box {
        // border: 2px solid #FFA959;
        // background: #FF8C21;
        // box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.52);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .search_img {
          margin: 0 10px 0 16px;
        }
        .search_icon {
          position: absolute;
          bottom: -10px;
          right: -10px;
        }
      }
    }
  }
</style>