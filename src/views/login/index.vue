<template>
  <div class="login">
    <div class="btn-wrap"> 
      <div class="topImg">
        <img src="../img/loginImg.png" alt="" class='loginImg'>
        <img src="../img/loginTitle.png" alt="" class='loginTitle'>
      </div>
      <div class="btn-box">
        <div class="button facebook"  @click="toOauth('facebook')">
          <img src="../img/f.png"/>
          <span>Continue with Facebook</span>
        </div>
        <div class="button tiktok">
          <img src="../img/Tik.png"/>
          <span>Continue with Tiktok</span>
        </div>
        <div class="button google" @click="toOauth('google')">
          <img src="../img/g.png"/>
          <span>Continue with Google</span>
        </div>
        <div class="button email"  @click="showBottomWrap">
          <img src="../img/loginEmail.png"/>
          <span>Continue with Email</span>
        </div>
        <div class="agree">
          <span class="registration"> User Agreement</span><span class="registration"> Privacy Policy</span>
        </div>
      </div>
    </div>

    <!-- 圆角弹窗（底部） -->
    <van-popup
      :overlay="false"
      v-model:show="showBottom"
      round
      position="bottom"
      style="box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25);"
    >
    <div class="overlay" v-if="isLogin">
        <div class="input-box pos">
            <img class="downImg" src="../img/down.png" alt="" @click="showBottom=false">
            <div class="signTitle">Sign In</div>
            <div class="border-b">
              <input type="text" placeholder="Email" v-model="email">
            </div>
            <div class="border-b">
              <input :type="passwordType" placeholder="Password" v-model="password">
              <van-icon color="#BBB" slot="right-icon" class="afterImg" @click="switchPasswordType" :name="passwordIcon"/>
            </div>
            <div class="ruleText">{{ this.ruleText }}</div>
        </div>
        <div class="login-btn" @click="toLoginIn">Sign in</div>
        <div class="to-login"><span  @click="toSignUp">CREATE ACCOUNT </span><span class="signIn">FORGET PASSWORD</span></div>
      </div>
      <div class="overlay" v-else>
        <div class="input-box pos">
            <img class="downImg" src="../img/down.png" alt="" @click="showBottom=false">
            <div class="signTitle">Sign Up</div>
            <div class="border-b">
              <input type="text" placeholder="Email" v-model="email">
            </div>
            <div class="border-b">
              <input :type="passwordType1" placeholder="Password" v-model="password">
              <van-icon color="#BBB" slot="right-icon" class="afterImg" @click="switchPasswordType1" :name="passwordIcon1"/>
            </div>
            <div class="border-b">
              <input :type="passwordType2" placeholder="Confirm Password" v-model="password1">
              <van-icon color="#BBB" slot="right-icon" class="afterImg" @click="switchPasswordType2" :name="passwordIcon2"/>
            </div>
            <div class="ruleText">{{ this.ruleText }}</div>
        </div>
        <div class="login-btn" @click="toLoginUp">Sign Up</div>
        <div class="to-signUp"><span>Alreay have an account? </span><span class="signIn" @click="toSignIn">SIGN IN</span></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { login,logUp ,Reader} from 'api/user'
import { setToken } from '@/utils/auth'
import { Popup,Toast,Icon } from 'vant'

  export default {
    components: {
          [Popup.name]: Popup,
          [Icon.name]: Icon,
          [Toast.name]: Toast,

    },
    data(){
      return {
        checked: false,
        showBottom: false,
        isLogin: true,
        email: '',
        password: '',
        passwordType: 'password',
        passwordType1: 'password',
        passwordType2: 'password',
        ruleText: ''
      }
    },

    computed: {
      passwordIcon: function () {
        return this.passwordType === 'password' ? 'closed-eye' : 'eye'
      },
      passwordIcon1: function () {
        return this.passwordType1 === 'password' ? 'closed-eye' : 'eye'
      },
      passwordIcon2: function () {
        return this.passwordType2 === 'password' ? 'closed-eye' : 'eye'
      }
    },
    methods:{ 
      handleRule(){
        let emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!emailRule.test(this.email)) {
          this.ruleText = '请输入正确的邮箱'
        } else if (this.password.length<6) {
          this.ruleText = '密码不能低于6位字符'
        } else if (!this.isLogin && this.password !==this.password1) {
          this.ruleText = '两次密码输入不一致'
        } else {
          this.ruleText = ''
        }
      },
      switchPasswordType () {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },
      switchPasswordType1 () {
        this.passwordType1 = this.passwordType1 === 'password' ? 'text' : 'password'
      },
      switchPasswordType2 () {
        this.passwordType2 = this.passwordType2 === 'password' ? 'text' : 'password'
      },
      toSignIn() {
        this.isLogin = true
        this.email = ''
        this.password = ''
        this.password1 = ''
        this.ruleText = ''
      },
      toSignUp() {
        this.isLogin = false
        this.email = ''
        this.password = ''
        this.password1 = ''
        this.ruleText = ''
      },
      showBottomWrap(){
        this.showBottom = true
        this.isLogin = true
      },
      tabChange(index) {
        this.active = index
      },
      async toLoginUp() {
        this.handleRule()
        if (this.ruleText) return
        let res =await logUp({
          email:this.email || 'm17610630676_1@163.com',
          password: this.password || 'wj123456'
        })
        if (!res.data.token) return
        setToken(res.data.token)
        Toast({
          message: '登录成功',
          position: 'middle',
          duration: 1500
        })
        setTimeout(() => {
          this.$router.replace({
            path: '/'
          })
        }, 1500)
      },
      async toLoginIn() {
        this.handleRule()
        if (this.ruleText) return
        let res = await login({
          email:this.email || 'm17610630676_1@163.com',
          password: this.password || 'wj123456'
        })
        if (!res.data.token) return
        setToken(res.data.token)
        Toast({
          message: '登录成功',
          position: 'middle',
          duration: 1500
        })
        setTimeout(() => {
          const redirect = this.$route.query.redirect || '/'
          this.$router.replace({
            path: redirect
          })
        }, 1500)
      },
     async toOauth(value) {
        let res = await Reader({loginType:value})
        if (res.data && res.data.url) {
          window.location.href = res.data.url
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #fff;
  .downImg {
    margin-top: 8px;
  }
  .topImg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginImg {
      width: 30%;
    }
    .loginTitle {
      width: 60%;
      margin: 24px 0 100px;
    }
  }
  .btn-box {
    // margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button {
    display: inline-block;
    width: 80%;
    height: 52px;
    border-radius: 10px;
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    span {
      display: inline-block;
      width: 200px;
      margin-left: 30px;
    }
  }
  .facebook {
    background: #2C64F6;
  }
  .tiktok {
    background: #000;
  }
  .google {
    border: 1px solid #000;
    color: #333;
  }
  .email {
    background: #FF8C21;
  }

  .registration {
    color: #BBB;
    margin: 0 10px;
  }
  .mt-20 {
    margin-top: 16px;
  }
  .agree {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 65px;
    margin-bottom: 12px;
  }
  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .signTitle{
      color: #000;
      font-size: 24px;
      font-weight: 500;
      margin: 5px 0 15px;
    }
    .input-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px 52px 29px 37px;
      box-sizing: border-box;
      div {
        position: relative;
        width: 100%;
      }
      .afterImg {
        position: absolute;
        right: 30px;
        top: 42px;
      }
    }
    input {
      width: 100%;
      margin:30px 0 0;
      height: 32px;
      line-height: 32px;
      border-radius: 7px;
      border: none;
      box-sizing: border-box;
      background: #fff;
      // color: #fff
    }
    .login-btn {
      color: #fff;
      margin: 0 26px 26px;
      width: 220px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      flex-shrink: 0;
      border-radius: 7px;
      background: #FF8C21;
      font-size: 16px;
      box-shadow: 0px 2px 16px 0px rgba(249, 220, 134, 0.48);
    }
    .to-login {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 50px;
      color: #FF8C21;
      font-size: 10px;
      span {
        margin: 0 20px;
      }
      .signIn {
        margin-left: 10px;
      }
    }
    .to-signUp {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      color: #606060;
      font-size: 10px;
      .signIn {
        color: #FF8C21;
        margin-left: 6px;
      }
    }
    .border-b {
      border-bottom: 1px solid #BBB;
    }
  }
  .pos {
    position: relative;
  }
  .ruleText {
    position: absolute!important;
    bottom: 10px;
    left: 0;
    padding: 0 37px;
    box-sizing: border-box;
    color: rgb(237, 28, 28);
  }
} 

</style>