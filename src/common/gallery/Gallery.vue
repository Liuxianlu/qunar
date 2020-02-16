<template>
  <div class="gallery-wrapper"
       @click="closeGallery">
    <div class="gallery-img-wrapper">
      <swiper v-if="imgsList.length > 1"
              :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgsList"
                      :key="index">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallery',
  props: {
    imgsList: Array,
    default: function () {
      return []
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction'
        },
        observer: true,
        observeParents: true,
        loop: true
      }
    }
  },
  methods: {
    closeGallery: function () {
      this.$emit('closeGallery');
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallery-wrapper {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}

.gallery-wrapper .gallery-img-wrapper {
  position: relative;
}

.gallery-wrapper .gallery-img-wrapper img {
  width: 100%;
}

.gallery-wrapper .swiper-container {
  overflow: visible;
}

.gallery-wrapper >>> .swiper-pagination {
  position: absolute;
  left: 0;
  bottom: -3.6rem;
  color: #fff;
  font-size: 0.24rem;
}
</style>
