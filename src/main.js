import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDJqcWActAJQrDiUfzXkeskJ--iIHrWH6Q',
  authDomain: 'time-app-6bd29.firebaseapp.com',
  databaseURL: 'https://time-app-6bd29.firebaseio.com',
  projectId: 'time-app-6bd29',
  storageBucket: 'time-app-6bd29.appspot.com',
  messagingSenderId: '985418608678'
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
