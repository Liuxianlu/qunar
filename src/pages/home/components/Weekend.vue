<template>
  <div class="weekend-wrapper">
    <div class="title">周末去哪儿</div>
    <ul class="list">
      <li class="list-item"
          v-for="item in weekendList"
          :key="item.id">
        <div class="item-img-box">
          <img class="item-img"
               :src="item.imgUrl" />
        </div>
        <div class="item-content">
          <p class="content-introduction">{{ item.title }}</p>
          <p class="content-introduction">{{ item.comment }}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
.weekend-wrapper .title {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  line-height: 1rem;
  background-color: #eee;
  font-size: 0.32rem;
}

.weekend-wrapper .list-item {
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  margin: 0rem 0 0.2rem 0;
}

.weekend-wrapper .list-item .item-img-box {
  width: 100%;
  height: 0;
  padding-bottom: 37%;
}

.weekend-wrapper .list-item .item-img-box .item-img {
  width: 100%;
}

.weekend-wrapper .list-item .item-content {
  width: 100%;
  height: 0;
  padding-bottom: 18%;
}

.weekend-wrapper .list-item .item-content .content-introduction {
  margin: 0.2rem;
}
</style>