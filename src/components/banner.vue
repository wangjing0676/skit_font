<template>
  <div style="width: 100%;">
    <div class="swiper">
      <!-- <search/> -->
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
            <div class="testimonialBox">
                <img :src="item.cover" class="quote" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/swiper.css';
// import Search from '@/components/search.vue';

export default {
  props: ['banners'],
  components: {
        // Search,
    },
  mounted(){
      new Swiper('.swiper', {
          
      })
  },
}
</script>
<style  lang="scss" scoped>
.swiper {
  overflow: visible !important;
  margin: 0 0 32px;
  height: 200px;
  // position: relative;
}
.swiper-slide {
  img{
    width: 100%;
    height: 100%;
    transition: 0.3S;
  }
}
</style>