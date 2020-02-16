<template>
  <div>
    <div class="list-item"
         v-for="(item, index) of list"
         :key="index">
      <div class="list-item-title border-bottom">{{ item.name }}</div>

      <div v-if="item.children"
           class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.list-item-title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
}

.item-children {
  padding: 0 0.2rem;
  font-weight: bold;
  color: #999;
}
</style>