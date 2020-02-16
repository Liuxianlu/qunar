import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store/index.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
