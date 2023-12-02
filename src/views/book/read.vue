<template>
    <div class="readWrap">
      <div class="top">
         <div class="center" @click="goBack">
            <van-icon name="arrow-left" />
            <span>Book Name</span>
         </div>
         <img src="../img/bookIcon1.png" alt="">
      </div>
      <div class="section">
          <div class="detail">
            regarding their wishes for me so I was taken into the pack house under the care of Alpha Romeo and his wife, Ronnie. As if I had not been devastated enough, I now had three twelve-year old tormenters. The identical triplet sons of the Alpha were, in order of birth, Alex, Felix and Calix. They despised me and ensured that I knew I was beneath them. My parents had incurred a huge debt. Thus, I had to earn my keep and repay my debt by doing as many chores as possible while the triplets enjoyed an idyllic childhood in the very same house.
          <br/>
          <br/>
          regarding their wishes for me so I was taken into the pack house under the care of Alpha Romeo and his wife, Ronnie. As if I had not been devastated enough, I now had three twelve-year old tormenters. The identical triplet sons of the Alpha were, in order of birth, Alex, Felix and Calix. They despised me and ensured that I knew I was beneath them. My parents had incurred a huge debt. Thus, I had to earn my keep and repay my debt by doing as many chores as possible while the triplets enjoyed an idyllic childhood in the very same house.
          <br/>
          <br/>

          regarding their wishes for me so I was taken into the pack house under the care of Alpha Romeo and his wife, Ronnie. As if I had not been devastated enough, I now had three twelve-year old tormenters. The identical triplet sons of the Alpha were, in order of birth, Alex, Felix and Calix. They despised me and ensured that I knew I was beneath them. My parents had incurred a huge debt. Thus, I had to earn my keep and repay my debt by doing as many chores as possible while the triplets enjoyed an idyllic childhood in the very same house.

          </div>
      </div>
      <div class="page">
        <div class="">
          <van-icon name="arrow-left" />
         <span>Previous Episode</span>
        </div>
        <div>
          <span>Next Episode</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="bottom">
        <div class="border" @click="toPage">
           <img src="../img/bookIcon.png" alt="">
        </div>
        <div>
          <img src="../img/star.png" alt="">
        </div>
      </div>

          <!-- 圆角弹窗（底部） -->
    <van-popup
      v-model:show="showBottom"
      round
      position="bottom"
      :style="{ height: '70%' }"
    >
    <div class="bookDetailWrap">
        <div class="line"></div>
        <div class="bookDetail">
            <div class="bookLeft">
              <img src="../img/img.png" alt="">
            </div>
            <div class="bookCenter">
              <p class="bookName">
                <span>Book Name</span>
                <van-icon name="arrow" />
              </p>
              <p class="desc">Author</p>
              <p class="desc mt-12">2032 chapters in total</p>
            </div>
            <img src="../img/star.png" alt="">
        </div>
        <div class="directory">
          <p>Chapter 1: Chapter Name</p>
          <p class="act-dir">Chapter 1: Chapter Name</p>
          <p>Chapter 1: Chapter Name</p>
          <p>Chapter 1: Chapter Name</p>
        </div>
    </div>
    </van-popup>
    </div>
  </template>
  <script>
  import { Icon, field, popup } from 'vant'

  export default {
    components: {
        [Icon.name]: Icon,
        [field.name]: field,
        [popup.name]: popup,
    },
    data(){
      return {
        username: 'username',
        showBottom: false
      }
    },
    methods:{
      toPage() {
        this.showBottom = true
      },
      goBack() {
        this.$router.back()
      }
    }
  }
  </script>
<style lang="scss" scoped>
  .readWrap {
    background: #FBF9F8;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
  }
  .top {
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .center {
    display: flex;
    align-items: center;
    span {
      color: #333;
      font-size: 14px;
      margin-left: 5px;
    }
  }

.section {
  padding: 0 30px;
  flex: 1;
  overflow-y: scroll;
  .detail {
     color: #666;
     font-size: 12px;
     line-height: 18px;
  }
} 
.bottom {
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  height: 65px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .border {
    border-right: 1px solid #eee;
  }
}
.page {
  width: 100%;
  display: flex;
  position: relative;
  bottom: 12px;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
  div {
    color: #fff;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    height: 36px;
    line-height: 36px;
    background: #FF8C21;
    box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.40);
  }
}
.bookDetailWrap {
    padding: 10px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .line {
      width: 80px;
      height: 4px;
      border-radius: 3px;
      background: #DDD;
      margin-bottom: 6px;
    }
    .bookDetail {
      width: 100%;
      display: flex;
      align-items: flex-start;
      margin: 8px;
      .bookLeft {
        img {
          width: 62px;
        }
      }
      .bookCenter {
        flex: 1;
        margin-left: 16px;
      }
      .bookName {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #333;
        margin: 8px 0 4px;
      }
      .desc {
        color: #999;
        font-size: 12px;
      }
      .mt-12 {
        margin-top: 12px;
      }
    }
    .directory {
      width: 100%;
      p {
        padding-bottom: 16px;
        border-bottom: 1px solid #eee;
        margin-top: 20px;
        font-size: 14px;
        color: #000;
      }
      .act-dir {
        color: #FF8C21;
      }

    }
  }


</style>
  