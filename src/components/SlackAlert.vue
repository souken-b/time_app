<template>
  <div id="SlackAlert">
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'SlackAlert',
  data () {
    return {
      message: 'slack アラート'
    }
  }
}
</script>
