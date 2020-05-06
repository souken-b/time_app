<template>
  <div id="SlackAlert" class="container">
    <div class="message row">
      <div class="message_create col-7">
        <textarea class="textarea_message" v-model="message" placeholder="メッセージを入力"></textarea><br>
      </div>
      <div class="message_preview col-4">
        <div v-show="!message">
          <span style="font-size: 25px;">プレビュー</span>
        </div>
        <div v-show="message">
          <vue-markdown :source="message"></vue-markdown>
        </div>
      </div>
    </div>
    <div class="btn_group row" style="margin-top: 100px;">
      <div class="send_btn col-6">
        <button @click="send" style="background-color: transparent; border: none"><img class="slack_btn send_btn" src="@/assets/send_button.png"></button>
      </div>
      <div class="return_btn col-6">
        <button @click="returnTimer" style="background-color: transparent; border: none"><img class="slack_btn return_btn" src="@/assets/return_button.png"></button>
      </div>
    </div>
  </div>
</template>
<script>
import { SlackOAuthClient } from 'messaging-api-slack'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'SlackAlert',
  components: {
    VueMarkdown
  },
  data () {
    return {
      message: '',
      openSlack: true
    }
  },
  computed: {
    updateMessage: function () {
      let message = ''
      message += '@test_user\n' + this.message
      console.log(message)
      return message
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
  .textarea_message {
    width: 100%;
    height: 200px;
  }
  .message {
    margin-top: 20%;
    width: 100%;
    text-align: center;
  }
  .message_create {
    width: 100%;
    margin-right: 40px;
  }
  .message_preview {
    width: 100%;
    text-align: left;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 15%;
  }
  .slack_btn {
    width: 120px;
    height: 120px;
    padding: 0px;
    display: inline-flex;
  }
  .send_btn {
    text-align: center;
  }
  .return_btn {
    text-align: center;
  }

</style>
