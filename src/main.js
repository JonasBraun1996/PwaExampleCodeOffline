import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzH9qiIZ5vNo266fYxamWh8dCKVK1mCCM'
  },
  installComponents: true,
})

new Vue({
  render: h => h(App),
}).$mount('#app')


