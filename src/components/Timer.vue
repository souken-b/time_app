<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
      <button @click="start" v-if="!timerOn">Start</button>
      <button @click="stop" v-if="timerOn">Stop</button>
      <button @click="reset">Reset</button>
      <template v-show="alert">
        <SlackAlert></SlackAlert>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timer',
  components: {
  },
  data () {
    return {
      min: 0,
      sec: 10,
      timerOn: false,
      timerObj: null,
      alert: false
    }
  },
  methods: {
    count: function () {
      if (this.sec <= 0 && this.min >= 1) {
        this.min--
        this.sec = 59
      } else if (this.sec <= 0 && this.min <= 0) {
        this.complete()
      } else {
        this.sec--
      }
    },
    start: function () {
      const self = this
      this.timerObj = setInterval(function () { self.count() }, 1000)
      this.timerOn = true
      this.alert = false
    },
    stop: function () {
      clearInterval(this.timerObj)
      this.timerOn = false
      this.alert = false
    },
    complete: function () {
      clearInterval(this.timerObj)
      this.alert = true
    },
    reset: function () {
      this.min = 0
      this.sec = 10
      this.alert = false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    formatTime: function () {
      const timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function (str) {
        if (str.length < 2) {
          return '0' + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ':' + timeStrings[1]
    }
  }
}

</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
}
.time {
  font-size: 100px;
}
</style>
