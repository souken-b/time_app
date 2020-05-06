<template>
  <div id="app">
    <Header v-on:setting="openSetting=$event.setting"></Header>
    <div v-show="!openSetting">
      <Timer v-show="!openSlack" v-on:data="openSlack=$event.openSlack"></Timer>
      <SlackAlert v-show="openSlack" v-on:data="openSlack=$event.openSlack"></SlackAlert>
    </div>
    <Setting v-show="openSetting" v-on:setting="openSetting=$event.closeSetting"></Setting>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'
import SlackAlert from './components/SlackAlert.vue'
import Header from './components/Header.vue'
import Setting from './components/Setting.vue'

export default {
  components: {
    Timer,
    SlackAlert,
    Header,
    Setting
  },
  data () {
    return {
      openSlack: false,
      openSetting: false
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
