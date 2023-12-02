<template>
    <div class="bookPage">
          <div class="book-top center"></div>
          <div class="book-top1 center">
            <div>
                <van-icon name="arrow-left" color="#fff" style="margin: 20px 0;" @click="goBack"/>
              </div>
              <div class="center">
                <div>
                  <img src="../img/img.png" alt="" class="bookImg">
                </div>
                <div class="bookInfo">
                  <p class="bookName">Book Name</p>
                  <p class="author">Author</p>
                  <div class="info">
                    <p>
                      <img src="../img/password.png" alt="">
                      <span>13.6k</span>
                    </p>
                    <p>
                      <img src="../img/bookInfo2.png" alt="">
                      <span>13.6k</span>
                    </p>
                    <p>
                      <img src="../img/bookInfo3.png" alt="">
                      <span>13.6k</span>
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div class="bookDetail">
            <p class="introduction">Introduction</p>
            <p class="desc">This is an introduction content This is an introduction content This is an introduction content This is an introduction content This is an introduction content This is an introduction content This is an introduction content This is an introduction content</p>
            <div class="chapter">
              <p>Chapter 1 How are you</p>
              <p>Chapter 1 How are you</p>
              <p>Chapter 1 How are you</p>
              <p>Chapter 1 How are you</p>
              <p>Chapter 1 How are you</p>
              <p>Chapter 1 How are you</p>
            </div>
          </div>
          <div class="readBtn">
            <img src="../img/star.png" alt="" class="bookImg">
            <button @click="toRead">Start Reading</button>
          </div>
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
      toRead() {
        this.$router.push({
          path: '/read'
        });
      },
      goBack(){
        this.$router.back()
      }
    }
  }
  </script>
<style lang="scss" scoped>
.bookPage {
  display: flex;
  flex-direction: column;
}
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.book-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35%;
  box-sizing: border-box;
  position: relative;
  filter: blur(4px);
  box-shadow:5px 5px 10px rgba(255,255,255,0.5);
}
.book-top::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(../img/img.png);
  background-size: cover;
  backdrop-filter: blur(5px); /* 虚化程度 */
}
.book-top::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /* 虚化后的背景颜色 */
  backdrop-filter: blur(5px); /* 虚化程度 */
}
.book-top1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35%;
  padding: 0 18px 0 14px;
  box-sizing: border-box;
  .center {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    .bookImg {
      border-radius: 7px;
      box-shadow: 0px 2px 12px 0px rgba(255, 255, 255, 0.32);
    }
  }
  .bookInfo {
 flex: 1;
 margin-left: 20px;
  .bookName {
    color: #eee;
    font-size: 24px;
    margin: 9px 0 20px;
  }
  .author {
    color: #ccc;
    font-size: 12px;
    margin-bottom: 20px;
  }
}

}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    span {
      margin-top: 6px;
    }
  }
}
.bookDetail {
  padding: 2px 58px 10px 14px;
  flex: 1;
  overflow-y: scroll;
.introduction {
  color: #333;
  font-size: 16px;
  margin: 20px 0 10px;
  font-weight: 600;
}
.desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}
.chapter {
  p {
    color: #000;
    font-size: 15px;
    margin-bottom: 17px
  }
}
}
// .center {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

.readBtn {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-left: 34px;
    width: 32px;
  }
  button {
    margin:0 19px 0 39px;
    height: 46px;
    width: 80%;
    border: none;
    font-size: 16px;
    border-radius: 10px;
    background: #FF8C21;
    color: #fff;
    box-shadow: 0px 2px 12px 0px rgba(255, 140, 33, 0.40);
  }
}

</style>
  