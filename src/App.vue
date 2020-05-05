<template>
  <div id="app">
    <Header></Header>
    <Timer v-show="!openSlack" v-on:data="openSlack=$event.openSlack"></Timer>
    <SlackAlert v-show="openSlack" v-on:data="openSlack=$event.openSlack"></SlackAlert>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'
import SlackAlert from './components/SlackAlert.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Timer,
    SlackAlert,
    Header
  },
  data () {
    return {
      openSlack: false
    }
  },
  methods: {
  }
}
</script>

<style>
  #app {
    margin-top: 100px;
  }
</style>
