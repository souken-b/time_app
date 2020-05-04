<template>
  <div id="SlackAlert">
    <label for="input_form">メッセージを送信：</label>
    <textarea id="input_form" v-model="message" placeholder="input message"></textarea><br>
    <button @click="send">send message</button>
    <button @click="returnTimer">return timer</button>
  </div>
</template>
<script>
import { SlackOAuthClient } from 'messaging-api-slack'

export default {
  name: 'SlackAlert',
  data () {
    return {
      message: '',
      openSlack: true
    }
  },
  methods: {
    send () {
      let message = ''
      const client = SlackOAuthClient.connect('')
      message += '<@>\n' + this.message
      client.postMessage('timeapptest', message, { as_user: true })
    },
    returnTimer () {
      this.$emit('data', { openSlack: false })
    }
  }
}
</script>
<style scoped>
  #input_form {
    width: 100px;
    height: 80px;
  }
</style>
