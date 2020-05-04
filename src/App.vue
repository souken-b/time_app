<template>
  <div id="app">
    <Timer v-model="openSlack" v-on:data="openSlack=$event.openSlack"></Timer>
    <SlackAlert v-show="openSlack"></SlackAlert>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'
import SlackAlert from './components/SlackAlert.vue'

export default {
  components: {
    Timer,
    SlackAlert
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
