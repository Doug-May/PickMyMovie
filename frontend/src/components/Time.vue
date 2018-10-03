<template>
    <div>
        <div id="digitalTime" class="slideIn">
            <h4 id="digital">{{ hour }}:<span v-if="minute < 10">0</span>{{ minute }}:<span v-if="second < 10">0</span>{{ second }}
            <span class="cycle" v-if="isPM">PM</span>
            <span class="cycle" v-else>AM</span>
            </h4>
        </div>
    </div>    
</template>

<script>
export default {
  data: function() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      isPM: false,
      greeting: ""
    };
  },
  methods: {
    updateTime: function() {
      //Get the current time
      var time = new Date();
      this.hour = time.getHours();
      this.minute = time.getMinutes();
      this.second = time.getSeconds();
      //Update the greeting
      if (this.hour >= 0 && this.hour < 6) {
        this.greeting = "It's bedtime";
      } else if (this.hour >= 6 && this.hour < 12) {
        this.greeting = "Good morning";
      } else if (this.hour >= 12 && this.hour < 18) {
        this.greeting = "Good afternoon";
      } else {
        this.greeting = "Good evening";
      }
      //Change hours to 12 hour cycle
      if (this.hour > 12) {
        this.isPM = true;
        this.hour -= 12;
      } else if (this.hour === 0) {
        this.hour = 12;
      }
    }
  },
  computed: {
    hourRotation: function() {
      return this.hour * 30 + this.minute / 2;
    },
    minuteRotation: function() {
      return this.minute * 6 + this.second / 10;
    },
    secondRotation: function() {
      return this.second * 6;
    }
  },
  created: function() {
    const self = this;
    setInterval(function() {
      self.updateTime();
    }, 1000);
  }
};
</script>

<style scoped>
#digitalTime {
  width: 58px;
  float: right;
  margin-left: 7px;
  color: #ffa660;
  font-size: 11px;
  margin-top: 2px;
  margin-right: -15px;
  opacity: 0;
}

.cycle {
  float: right;
}

.slideIn {
  animation: slideIn 700ms forwards 1;
  animation-delay: 1500ms;
}

@keyframes slideIn {
  from {
    transform: translateX(15px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 0.7;
  }
}
</style>
