new Vue({
  el: '#app',
  data: {
    monsterHealth: 100,
    playerHealth: 100,
  },
  methods: {
    initGame: function initGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.log = [];
    },
    isGameOver: function isGameOver() {
      if (this.monsterHealth < 1) {
        this.monsterHealth = 0;
        alert("Game's over. The player wins!");
      }
      if (this.playerHealth < 1) {
        this.playerHealth = 0;
        alert("Game's over, yo. You lose.");
      }
    },
    hurtMonster: function hurtMonster(damage) {
      this.monsterHealth -= damage;
      this.isGameOver();
    },
    hurtPlayer: function hurtPlayer(damage) {
      this.playerHealth -= damage;
      this.isGameOver();
    },
    attack: function attack() {
      return Math.ceil(Math.random() * 10);
    },
    playerAttack: function playerAttack() {
      this.hurtMonster(this.attack());
      this.hurtPlayer(this.attack());
    },
    specialAttack: function specialAttack() {
      this.hurtMonster(Math.ceil((((Math.random() * 100) - 15) / 2) + 10));
      this.hurtPlayer(this.attack());
    },
    heal: function heal() {
      this.hurtPlayer((-1 * this.attack()) - 11);
      if (this.playerHealth > 100) { this.playerHealth = 100; }
      this.hurtPlayer(this.attack());
    },
    giveUp: function giveUp() {
      this.playerHealth = 0;
      this.isGameOver();
    },
  },
  beforeMount() {
    this.initGame();
  },
});
