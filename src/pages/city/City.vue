<template>
  <div>
    <city-header></city-header>
    <city-list :hotCities="hotCities"
               :cities="cities"></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader,
    'city-list': CityList
  },
  data: function () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess: function (res) {
      var data = res.data.data;
      var ret = res.data.ret;
      if (data && ret) {
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>