<template>
  <div id="setting" class="container">
    <button @click="changeView">Change View</button>
    <div class="add_user row">
      <div v-show="create">
        <button @click="showWorkSpace">workspace</button><button @click="showChannel">chennel</button><button @click="showUser">user</button>
        <div v-if="create_data==1" class="add_data">
          <div v-for="( v, k ) in workspace_draft" :key="k">
            <label class="input_label">{{ k }}</label><input v-model="workspace_draft[ k ]">
          </div>
          <button @click="addWorkSpace">Add workspace</button>
          <button @click="closeSetting">return timer</button>
        </div>
        <div v-else-if="create_data==2" class="add_data">
          <div v-for="( v, k ) in channel_draft" :key="k">
            <label class="input_label">{{ k }}</label><input v-model="channel_draft[ k ]">
          </div>
          <button @click="addChannel">Add Channel</button>
          <button @click="closeSetting">return timer</button>
        </div>
        <div v-else class="add_data">
          <div v-for="( v, k ) in user_draft" :key="k">
            <label class="input_label">{{ k }}</label><input v-model="user_draft[ k ]">
          </div>
          <button @click="addUser">Add User</button>
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
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  name: 'setting',
  data () {
    return {
      setting: true,
      user_col: firebase.firestore().collection('users'),
      chennel_col: firebase.firestore().collection('channels'),
      workspace_col: firebase.firestore().collection('workspaces'),
      id: '',
      user_draft: { name: '', slack_id: '', workspace_id: '' },
      workspace_draft: { name: '', workspace_token: '' },
      channel_draft: { name: '', workspace_id: '' },
      docs: [],
      create: true,
      create_data: 1
    }
  },
  methods: {
    closeSetting () {
      this.$emit('setting', { closeSetting: false })
    },
    addUser () {
      this.user_col.add(this.user_draft)
    },
    addWorkSpace () {
      this.channel_col.add(this.channel_draft)
    },
    addChannel () {
      this.workspace_col.add(this.wockspace)
    },
    showWorkSpace () {
      this.create_data = 1
    },
    showChannel () {
      this.create_data = 2
    },
    showUser () {
      this.create_data = 3
    },
    changeView () {
      if (this.create) {
        this.create = false
      } else {
        this.create = true
      }
    }
  }
}
</script>
<style scoped>
.add_user {
  margin-top: 20%;
}
.input_label {
  margin-right: 20px;
}
</style>
