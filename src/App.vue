<template>
  <div id="app">
    <Header @setting="openSetting=$event.setting"></Header>
    <div v-show="!openSetting">
      <Timer v-show="!openSlack" @data="openSlack=$event.openSlack" :targetUser="target_user"></Timer>
      <SlackAlert v-show="openSlack" @data="openSlack=$event.openSlack" :targetUser="target_user"></SlackAlert>
    </div>
    <Setting v-show="openSetting" @setting="openSetting=$event.closeSetting" @target_user="setTargetUser"></Setting>
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
      openSetting: false,
      target_user: ''
    }
  },
  methods: {
    setTargetUser (targetUser) {
      this.target_user = targetUser
    }
  }
}
</script>

<style>
  #app {
    margin-top: 100px;
  }
</style>
