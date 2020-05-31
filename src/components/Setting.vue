<template>
  <div id="setting" class="container">
    <div class="add_user row">
      <div v-show="create">
        <div class="add_data">
          <button @click="readUsers">read users</button>
          <select v-model="selected">
            <option disabled value="">select target</option>
            <option v-for="user in userLists" :value="user.id" :key="user.id">
              {{ user.real_name }}
            </option>
          </select>
          <button @click="setUser">set user</button>
          <button @click="closeSetting">return timer</button>
        </div>
      </div>
      <div v-show="!create" class="set_user">
        <button @click="closeSetting">return timer</button>
      </div>
    </div>
  </div>
</template>
<script>
import { SlackOAuthClient } from 'messaging-api-slack'

export default {
  name: 'setting',
  data () {
    return {
      setting: true,
      create: true,
      create_data: 1,
      selected: '',
      userLists: []
    }
  },
  methods: {
    readUsers () {
      const client = SlackOAuthClient.connect(process.env.VUE_APP_SLACK_CHANNEL_TOKEN)
      client.getAllUserList().then(res => {
        this.saveUsers(res)
      })
    },
    saveUsers (usersArray) {
      this.userLists = []
      usersArray.forEach(element => {
        this.userLists.push(element)
      })
    },
    setUser () {
      const targetUser = this.selected
      this.$emit('target_user', targetUser)
    },
    closeSetting () {
      this.$emit('setting', { closeSetting: false })
    }
  }
}
</script>
<style scoped>
.input_label {
  margin-right: 20px;
}
.container {
  margin-top:200px;
}
</style>
