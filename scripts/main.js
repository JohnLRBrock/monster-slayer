new Vue {
  el: '#app',
  data: {
  },
  methods: {
    initGame: function initGame () {
      this.monster-health = 100;
      this.player-health = 100;
      log = [];
    }
  },
  beforeMount() {
    initGame();
  }
}