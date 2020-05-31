<template>
  <div class="timer container">
    <div class="time row">
      {{ formatTime }}
      <div class="remaining_time"><div :class="[remaining_1_4 ? 'remaining_1_4_active' : 'remaining_white']"></div><div :class="[remaining_2_4 ? 'remaining_2_4_active' : 'remaining_white']"></div><div :class="[remaining_3_4 ? 'remaining_3_4_active' : 'remaining_white']"></div><div :class="[remaining_4_4 ? 'remaining_4_4_active' : 'remaining_white']"></div></div>
      <div class="btn-group" role="group">
        <button @click="start" v-if="!timerOn" class="btn btn_start" style="background-color: transparent; border: none"><img class="timer_btn" src="@/assets/start_button.png"></button>
        <button @click="stop" v-if="timerOn" class="btn btn_stop" style="background-color: transparent; border: none"><img class="timer_btn" src="@/assets/stop_button.png"></button>
        <button @click="reset" class="btn btn_reset" style="background-color: transparent; border: none"><img class="timer_btn" src="@/assets/reset_button.png"></button>
      </div>
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
      sec: 1,
      timerOn: false,
      timerObj: null,
      openSlack: false,
      remaining_1_4: true,
      remaining_2_4: true,
      remaining_3_4: true,
      remaining_4_4: true
    }
  },
  props: {
    targetUser: {
      type: String,
      required: true
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
    parameter: function () {
      const min = 0
      const sec = 1
      if ((this.min * 60 + this.sec) === 0) {
        this.remaining_4_4 = false
      } else if ((this.min * 60 + this.sec) < (min * 60 + sec) * (1 / 4)) {
        this.remaining_3_4 = false
      } else if ((this.min * 60 + this.sec) < (min * 60 + sec) * (2 / 4)) {
        this.remaining_2_4 = false
      } else if ((this.min * 60 + this.sec) < (min * 60 + sec) * (3 / 4)) {
        this.remaining_1_4 = false
      } else {
      }
    },
    resetParameter: function () {
      this.remaining_1_4 = true
      this.remaining_2_4 = true
      this.remaining_3_4 = true
      this.remaining_4_4 = true
    },
    start: function () {
      if (this.targetUser === '') {
        alert('please set target user')
        return
      }
      const self = this
      this.timerObj = setInterval(function () {
        self.count()
        self.parameter()
      }, 1000)
      this.timerOn = true
    },
    stop: function () {
      clearInterval(this.timerObj)
      this.timerOn = false
    },
    complete: function () {
      clearInterval(this.timerObj)
      this.$emit('data', {
        openSlack: true
      })
    },
    reset: function () {
      const self = this
      if (this.timerOn) {
        this.timerOn = false
        clearInterval(this.timerObj)
      }
      this.min = 0
      this.sec = 1
      self.resetParameter()
      this.$emit('data', {
        openSlack: false
      })
    }
  },
  computed: {
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
.timer {
  display: flex;
  margin-top: 18%;
  align-items: center;
  justify-content: center;
}
.time {
  font-size: 150px;
  display: block;
  text-align: center;
}
.btn-group {
  display: flex;
  margin-top: 15%;
}
.btn {
  display: inline-flex;
  justify-content: center;
}
.btn_reset {
  margin-left: 70px;
}
.btn_start {
  margin-right: 70px;
}
.btn_stop {
  margin-right: 70px;
}
.timer_btn {
  width: 150px;
  height: 150px;
  padding: 0px;
}
.remaining_time {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10px;
  justify-content: space-between;
}
.remaining_1_4_active {
  width: 24%;
  background-color: #2fc5f3;
}
.remaining_2_4_active {
  width: 24%;
  background-color: #2fb67c;
}
.remaining_3_4_active {
  width: 24%;
  background-color: #ecb22d;
}
.remaining_4_4_active {
  width: 24%;
  background-color: #e01e5a;
}
.remaining_white {
  width: 24%;
  background-color: #fff;
}
</style>
