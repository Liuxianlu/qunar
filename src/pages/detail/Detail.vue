<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImage="bannerImage"
                   :galleryImages="galleryImages"></detail-banner>
    <detail-header></detail-header>
    <div class="content-box">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'CityDetail',
  components: {
    'detail-banner': DetailBanner,
    'detail-header': DetailHeader,
    'detail-list': DetailList
  },
  data: function () {
    return {
      list: [],
      sightName: '',
      bannerImage: '',
      galleryImages: []
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess: function (res) {
      if (res.data.ret && res.data.data) {
        var data = res.data.data;
        this.sightName = data.sightName;
        this.bannerImage = data.bannerImage;
        this.galleryImages = data.galleryImages;
        this.list = data.list;
      }
    }
  },
  mounted: function () {
    this.getDetailInfo();
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
  height: 15rem;
}
</style>
