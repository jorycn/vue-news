<template>
  <div class="swiper-container">
    <swiper v-ref:swiper
        direction="horizontal"
        :free-model="true"
        :mousewheel-control="true"
        :slides-per-view="3.2""
        :performance-mode="false"
        :pagination-visible="false"
        @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
    </swiper>
</template>

<script>
  import Swiper from 'vue-swiper'

  export default {
    components: {
      Swiper
    },
    methods: {
      onSlideChangeStart (currentPage) {
        console.log('onSlideChangeStart', currentPage)
      },
      onSlideChangeEnd (currentPage) {
        console.log('onSlideChangeEnd', currentPage)
      }
    }
  }
</script>

<style>
  body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
  }
  .swiper-container {
      width: 100%;
      height: 45px;
      margin: 20px auto;
  }
  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
</style>