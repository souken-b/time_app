<template>
  <div id="app">
    <Timer></Timer>
    <SlackAlert></SlackAlert>
    <input v-model="message" placeholder="input sentense">
    <button @click="send">send message</button>
  </div>
</template>

<script>
import Timer from './components/Timer.vue'
import SlackAlert from './components/SlackAlert.vue'
import { SlackOAuthClient } from 'messaging-api-slack'

export default {
  components: {
    Timer,
    SlackAlert
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      let message = ''
      const client = SlackOAuthClient.connect('')
      message = this.message
      client.postMessage('timeapptest', message, { as_user: true })
    }
  }
}
</script>

<style>
  #app {
    margin-top: 100px;
  }
</style>
