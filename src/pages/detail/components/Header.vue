<template>
  <div>
    <router-link to="/"
                 tag="div"
                 class="header-back"
                 v-show="isHeaderBack">
      <i class="iconfont">&#xe606;</i>
    </router-link>
    <div class="header"
         v-show="!isHeaderBack"
         :style="opacityStyle">
      成都欢乐谷
      <router-link to="/"
                   tag="i"
                   class="iconfont header-left">
        &#xe606;
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      isHeaderBack: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.changeScroll, false);
  },
  beforeDestr: function () {
    window.removeEventListener('scroll', this.changeScroll, false);
  },
  methods: {
    changeScroll: function () {
      var top = document.documentElement.scrollTop;
      if (top > 0) {
        var opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle.opacity = opacity;
        this.isHeaderBack = false;
      } else {
        this.isHeaderBack = true;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

.header-back {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.36rem;
  line-height: 0.72rem;
  text-align: center;
  color: #fff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  color: #fff;
  text-align: center;
  font-size: 0.32rem;
  z-index: 1;
}

.header .header-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.8rem;
  height: 0.88rem;
  line-height: 0.88rem;
}

.content {
  width: 100%;
  height: 50rem;
}
</style>
