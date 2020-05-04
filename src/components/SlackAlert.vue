<template>
  <div id="SlackAlert">
    <input v-model="message" placeholder="input message">
    <button @click="send">send message</button>
  </div>
</template>
<script>
import { SlackOAuthClient } from 'messaging-api-slack'

export default {
  name: 'SlackAlert',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      let message = ''
      const client = SlackOAuthClient.connect('')
      message += '<\n' + this.message
      client.postMessage('timeapptest', message, { as_user: true })
    }
  }
}
</script>
