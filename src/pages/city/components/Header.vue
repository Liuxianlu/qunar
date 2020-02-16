<template>
  <div class="header-wrapper">
    <router-link to="/">
      <i class="iconfont header-left">&#xe606;</i>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';

.header-wrapper {
  position: relative;
  width: 100%;
  height: $headerHeight;
  background-color: $bgColor;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.88rem;
}

.header-left {
  position: absolute;
  top: 0;
  left: 0.24rem;
  color: #fff;
}
</style>