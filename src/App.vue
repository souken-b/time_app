<template>
  <div id="app">
    <Timer></Timer>
    <SlackAlert></SlackAlert>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'
import SlackAlert from './components/SlackAlert.vue'

export default {
  components: {
    Timer,
    SlackAlert
  }
}
</script>

<style>
  #app {
    margin-top: 100px;
  }
</style>
