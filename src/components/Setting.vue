<template>
  <div id="setting">
    <button @click="closeSetting">return timer</button>
  </div>
</template>
<script>
export default {
  name: 'setting',
  data () {
    return {
      setting: true
    }
  },
  methods: {
    closeSetting () {
      this.$emit('setting', { closeSetting: false })
    }
  }
}
</script>
