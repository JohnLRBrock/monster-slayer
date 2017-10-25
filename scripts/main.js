new Vue({
  el: '#app',
  data: {
  },
  methods: {
    initGame: function initGame () {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      log = [];
    },
  },
  beforeMount() {
    this.initGame();
  },
});
