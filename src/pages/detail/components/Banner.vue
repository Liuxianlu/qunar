<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           :src="this.bannerImage" />
      <div class="banner-bottom">
        <div class="banner-info">
          <i class="iconfont">&#xe796;</i>{{ this.galleryImages.length }}
        </div>
        <div class="banner-tilte">{{ this.sightName }}</div>
      </div>
    </div>

    <common-fade>
      <common-gallery @closeGallery="handleGalleryClick"
                      v-show="galleryShow"
                      :imgsList="galleryImages">
      </common-gallery>
    </common-fade>

  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import CommonFade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  components: {
    'common-gallery': CommonGallery,
    'common-fade': CommonFade
  },
  props: {
    sightName: String,
    bannerImage: String,
    galleryImages: Array
  },
  data: function () {
    return {
      galleryShow: false
    }
  },
  methods: {
    handleGalleryClick: function (value) {
      this.galleryShow = false;
    },
    handleBannerClick: function () {
      this.galleryShow = true;
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  background-color: #999;
}

.banner .banner-img {
  width: 100%;
}

.banner .banner-bottom {
  position: absolute;
  bottom: 0rem;
  width: 100%;
  color: #fff;
  padding-left: 0.2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.banner .banner-info {
  width: 1.2rem;
  height: 0.01rem;
  line-height: 0.01rem;
  padding: 0.2rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  text-align: center;
}

.banner .banner-tilte {
  padding: 0.2rem 0;
  font-size: 0.36rem;
}
</style>
