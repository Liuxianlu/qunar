<template>
  <div class="sw-wrapper">
    <swiper v-if="swiperList.length > 1"
            :options="swiperOption">
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.sw-wrapper >>> .swiper-pagination-bullet-active {
  background-color: #ff4500;
}

.sw-wrapper >>> .swiper-pagination-bullets {
  bottom: 0;
}

.sw-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 26.5%;
  background-color: #ccc;
}

.sw-wrapper .swiper-img {
  width: 100%;
  height: 100%;
}
</style>