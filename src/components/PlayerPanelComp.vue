<template>
  <div>
    <div class="player-panel" v-bind:class="addClass(0)">
      <div class="player-name">{{ players[0].name }}</div>
      <div class="player-score">{{ players[0].score }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{ players[0].current }}</div>
      </div>
    </div>

    <div class="player-panel" v-bind:class="addClass(1)">
      <div class="player-name">{{ players[1].name }}</div>
      <div class="player-score">{{ players[1].score }}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{ players[1].current }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "player-panel-comp",
  props: {
    players: {
      type: Array,
    },
    activePlayer: {
      type: Number,
      default: 0,
    },
    winnerPlayer: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {};
  },
  methods: {
    addClass(index) {
      if (this.activePlayer === index) {
        return { active: true };
      }
      if (this.winnerPlayer === index) {
        return { winner: true };
      }
    },
  },
};
</script>

<style>
/* player panel */
.player-panel {
  width: 50%;
  padding: 100px;
  height: 600px;
  float: left;
  border-radius: 24px;
  transition: all 0.3s ease;
}

.player-panel.winner {
  background-color: rgb(243, 200, 200);
}

.player-panel.active {
  background-color: whitesmoke;
}

.player-panel.active .player-name,
.player-panel.winner .player-name {
  font-weight: 300;
}

.player-name {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0 10px 0;
  position: relative;
  font-weight: 100;
}

.player-score {
  font-size: 80px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 130px;
}

.player-current-box {
  background-color: #42b983;
  color: #fff;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  padding: 12px;
}

.player-current-box .player-current-label {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
}

.player-current-box .player-current-score {
  font-size: 32px;
}
</style>
