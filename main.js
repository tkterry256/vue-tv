const { createApp } = Vue;

createApp({
  data() {
    return {
      isOn: false,
      currentChannel: 0,
      channels: [
        "tom-and-jerry.gif",
        "james-bond.gif",
        "dexter.gif",
        "football.gif",
        "countdown.gif"
      ],
    };
  },
  methods: {
    togglePower() {
      this.isOn = !this.isOn;
    },
    nextChannel() {
      this.isOn &&
        (this.currentChannel =
          this.currentChannel === this.channels.length - 1
            ? 0
            : this.currentChannel + 1);
    },
    previousChannel() {
      this.isOn &&
        (this.currentChannel =
          this.currentChannel === 0
            ? this.channels.length - 1
            : this.currentChannel - 1);
    },
  },
}).mount("#app");
