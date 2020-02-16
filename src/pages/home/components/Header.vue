<template>
  <div class="head-wrapper">
    <div class="header-left">
      <i class="iconfont">&#xe606;</i>
    </div>
    <div class="header-middle">
      <i class="iconfont input-search-icon">&#xe661;</i>
      <span class="input-keyword">请输入城市/景点/游玩主题</span>
      <input class="header-input"
             type="text">
    </div>
    <router-link to="/city">
      <div class="header-right">{{ this.city }}
        <i class="iconfont">&#xe60e;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      city: 'city'
    }),
    ...mapGetters({
      ChinaCity: 'ChinaCity'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

div {
  display: flex;
  height: $headerHeight;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: $bgColor;
  color: #fff;
}

.header-left {
  width: 0.8rem;
}

.header-middle {
  position: relative;
  flex: 1;
  width: 100%;
  padding: 0.14rem 0;
}

.header-middle .header-input {
  width: 100%;
  height: 100%;
  border-radius: 0.07rem;
  padding-left: 0.6rem;
}

.header-middle .input-keyword {
  position: absolute;
  top: 0.3rem;
  left: 0.6rem;
  color: #999;
}

.header-middle .input-search-icon {
  position: absolute;
  top: 0.26rem;
  left: 0.2rem;
  color: #999;
}

.header-right {
  min-width: 1.12rem;
  padding: 0 0.1rem;
}
</style>
