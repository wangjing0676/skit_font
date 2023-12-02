<template>
      <div class="flex_between mr-10">
        <p class="title flex_between">
          <span>{{title}}</span>
        </p>
        <van-icon name="arrow" v-if="isShowArrow"/>
      </div>
</template>
<script>
  import { Icon } from 'vant'

  export default {
    props: ['title','isShowArrow'],
    components: {
        [Icon.name]: Icon
    },
  }
</script>
<style  lang="scss" scoped>
.flex_between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mr-10 {
  margin-right: 8px;
}
.title {
  margin-left: 13px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}
</style>