<template>
  <div class="icon-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages"
                    :key="index">
        <div class="icon-box"
             v-for="item in page"
             :key="item.id">
          <div class="icon-box-img">
            <img class="icon-img"
                 :src="item.imgUrl" />
          </div>
          <div class="icon-box-description">{{ item.description }}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconsList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
      }
    };
  },
  computed: {
    pages: function () {
      var pages = [];
      this.iconsList.forEach(function (item, index) {
        var page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });

      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.swiper-pagination {
  position: static;
}

.icon-wrapper >>> .icon-wrapper {
  width: 100%;
  overflow: hidden;
}

.icon-wrapper {
  margin: 0.2rem 0;
}

.icon-wrapper .icon-box {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icon-wrapper .icon-box .icon-box-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
}

.icon-wrapper .icon-box .icon-box-img .icon-img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

.icon-wrapper .icon-box .icon-box-description {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  ellipsis();
}
</style>