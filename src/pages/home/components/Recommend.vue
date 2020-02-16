<template>
  <div class="recommend-wrapper">
    <div class="title">
      <i class="iconfont icon-love">&#xe602;</i>
      猜你喜欢
    </div>

    <ul class="list">
      <router-link :to="'/detail' + item.id"
                   tag="li"
                   class="list-item"
                   v-for="item in recommendList"
                   :key="item.id">
        <div class="item-img-box">
          <div class="item-mark">{{ item.tag }}</div>
          <img class="item-img"
               :src="item.imgUrl" />
        </div>
        <div class="item-content">
          <p class="content-title">{{ item.title }}</p>
          <p class="content-review">
            <i class="iconfont color1">&#xe870;</i>
            <i class="iconfont color1">&#xe870;</i>
            <i class="iconfont color1">&#xe870;</i>
            <i class="iconfont color1">&#xe870;</i>
            <i class="iconfont color1">&#xe870;</i>
            <span class="color2">{{ item.commentNum }}条评论</span>
          </p>
          <p class="content-price">
            <span class="color1">¥</span>
            <em class="price-bold color1">{{ item.price }}</em>
            <span class="color2">起</span>
            <span class="price-right color2">{{ item.district }}</span>
          </p>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
.recommend-wrapper .icon-love {
  font-size: 0.38rem;
  color: red;
}

.recommend-wrapper .title {
  width: 100%;
  height: 0.7rem;
  padding: 0 0.2rem;
  line-height: 0.7rem;
  background-color: #eee;
  font-size: 0.32rem;
}

.recommend-wrapper .list-item {
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  margin: 0.2rem 0.2rem 0.4rem 0.2rem;
}

.recommend-wrapper .list-item .item-img-box {
  position: relative;
  float: left;
  width: 30%;
  height: 0;
  padding-bottom: 30%;
}

.recommend-wrapper .list-item .item-img-box .item-mark {
  position: absolute;
  width: 1.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #f8c154;
  border-radius: 0 0 0.16rem 0;
  color: #fff;
}

.recommend-wrapper .list-item .item-img-box .item-img {
  width: 100%;
}

.recommend-wrapper .item-content {
  float: left;
  width: 70%;
  height: 0;
  padding-bottom: 30%;
}

.recommend-wrapper .item-content .color1 {
  color: #f8c154;
}

.recommend-wrapper .item-content .color2 {
  color: #555;
}

.recommend-wrapper .item-content .content-title {
  padding: 0.3rem 0.2rem 0 0.2rem;
  font-size: 0.34rem;
}

.recommend-wrapper .item-content .content-review {
  padding: 0.3rem 0.2rem 0 0.2rem;
}

.recommend-wrapper .item-content .content-price {
  padding: 0.3rem 0.5rem 0.3rem 0.3rem;
}

.recommend-wrapper .item-content .content-price .price-bold {
  font-size: 0.4rem;
}

.recommend-wrapper .item-content .content-price .price-right {
  float: right;
}
</style>