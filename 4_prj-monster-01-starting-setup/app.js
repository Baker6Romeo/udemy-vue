function generateRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function healthPercent(max, current) {
    return Math.ceil((current / max) * 100)
}

const app = Vue.createApp({
  computed: {
    monsterHealthBarValue() {
      if (this.monsterHealth > 0) {
        return healthPercent(this.monsterHealthMax, this.monsterHealth);
      } else {
        return 0;
      }
    },
    monsterHealthStyles() {
      return { width: this.monsterHealthBarValue + "%" };
    },
    playerHealthBarValue() {
      if (this.playerHealth > 0) {
        return healthPercent(this.playerHealthMax, this.playerHealth);
      } else {
        return 0;
      }
    },
    playerHealthStyles() {
      return { width: this.playerHealthBarValue + "%" };
    },
    specialAttackAvailable() {
      return this.roundCounter % 3 === 0;
    },
  },
  data() {
    return {
      endGameMessage: null,
      log: [],
      monsterHealth: 100,
      monsterHealthMax: 100,
      playerHealth: 100,
      playerHealthMax: 100,
      roundCounter: 1,
    };
  },
  methods: {
    endRound() {
      if (this.playerHealth < 1 && this.monsterHealth < 1) {
        this.log.unshift("Player and monster draw.");
        this.endGameMessage = "Draw";
      } else if (this.playerHealth < 1) {
        this.log.unshift("Player dies.");
        this.endGameMessage = "You Lose";
      } else if (this.monsterHealth < 1) {
        this.log.unshift("Player wins.");
        this.endGameMessage = "You win!";
      }
      this.roundCounter++;
    },
    healPlayer() {
      const heal = generateRandom(20, 8);
      if (this.playerHealth + heal > this.playerHealthMax) {
        this.playerHealth = playerHealthMax;
      } else {
        this.playerHealth += heal;
      }
      this.logAction('Player', 'heals', 'themselves', heal);
      this.monsterAttack();
      this.endRound();
    },
    logAction(actor, action, recipient, value){
      this.log.unshift(`${actor} ${action} ${recipient} for ${value} points.`);
    },
    monsterAttack() {
      const damage = generateRandom(15, 8);
      this.playerHealth -= damage;
      this.logAction("Monster", "attacks", "player", damage);
    },
    playerAttack() {
      const damage = generateRandom(12, 5);
      this.monsterHealth -= damage;
      this.logAction("Player", "attacks", "monster", damage);
      this.monsterAttack();
      this.endRound();
    },
    resetGame() {        
        this.endGameMessage = null;
        this.monsterHealth = this.playerHealthMax;
        this.playerHealth = this.playerHealthMax;
        this.roundCounter = 1;
    },
    specialAttack() {
      const damage = generateRandom(25, 10);
      this.monsterHealth -= damage;
      this.logAction("Player", "special attacks", "monster", damage);
      this.monsterAttack();
      this.endRound();
    },
    surrender() {
        this.log.unshift("Player surrenders.");
        this.endGameMessage = "You surrendered!"
    }
  },
});

app.mount("#game");