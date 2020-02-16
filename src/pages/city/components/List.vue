<template>
  <div class="list-wrapper"
       ref="listWrapper">
    <div class="scroll-wrapper">
      <ul class="clearfix">
        <div class="list-title">热门城市</div>
        <li v-for="item in computedHotCities"
            :key="item.id"
            :class="item.borderType"
            @click="handleCityClick(item.name)"
            class="list-item city-selection-item">{{ item.name }}</li>
      </ul>
      <ul class="clearfix">
        <div class="list-title">字母排序</div>
        <li @click="handleLetterClick"
            v-for="(item, index) in letters"
            :key="index"
            class="list-item Alphabetically-item">{{ item }}</li>
      </ul>
      <ul v-for="(items, key) in cities"
          :key="key"
          :ref="key"
          class="clearfix">
        <div class="list-title">{{ key }}</div>
        <li v-for="item in items"
            :key="item.id"
            @click="handleCityClick(item.name)"
            class="list-item letter-item border-rightbottom">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  data: function () {
    return {
      letter: ''
    }
  },
  methods: {
    handleLetterClick: function (e) {
      this.letter = e.target.innerText;
    },
    handleCityClick: function (city) {
      // this.$store.commit('changeCityName', city);
      this.changeCityName(city);
      this.$router.push('/')
    },
    ...mapMutations({
      changeCityName: 'changeCityName'
    })
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.listWrapper, {
      click: true
    });
  },
  computed: {
    computedHotCities: function () {
      var result = [],
        hotCitiesLen = this.hotCities.length,
        item;
      for (var i = 0; i < hotCitiesLen; i++) {
        var resObj = {};
        item = this.hotCities[i];
        resObj.id = item.id;
        resObj.name = item.name;
        if (item.order === 3 || item.order === 6 || item.order === 9) {
          resObj.borderType = 'border-bottom';
        } else if (item.order === 10 || item.order === 11) {
          resObj.borderType = 'border-right';
        } else if (item.order === 12) {
          resObj.borderType = '';
        } else {
          resObj.borderType = 'border-rightbottom';
        }
        result.push(resObj);
      }
      return result;
    },
    letters: function () {
      var result = [];

      for (var key in this.cities) {
        result.push(key)
      }
      return result;
    }
  },
  watch: {
    letter: function () {
      if (this.letter) {
        var element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

div {
  box-sizing: border-box;
}

.list-wrapper {
  position: absolute;
  top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.list-wrapper {
  width: 100%;
}

.list-wrapper .list-title {
  width: 100%;
  height: 0.7rem;
  padding-left: 0.3rem;
  line-height: 0.7rem;
  background-color: #eee;
}

.list-wrapper .list-item {
  float: left;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}

.list-wrapper .city-selection-item {
  width: 33.33%;
}

.list-wrapper .Alphabetically-item {
  width: 16.66%;
}

.list-wrapper .letter-item {
  width: 25%;
}
</style>
