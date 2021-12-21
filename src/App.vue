<template>
  <div id="app" class="wrapper clearfix">
    <PlayerPanelCompVue
      v-bind:players="players"
      v-bind:activePlayer="activePlayer"
      v-bind:winnerPlayer="winnerPlayer"
    />

    <ControlCompVue
      v-on:newGame="handleNewGame"
      v-on:rollDice="handleRollDice"
      v-on:hold="handleHold"
    />

    <DiceCompVue v-bind:dice="dice" />
  </div>
</template>

<script>
import PlayerPanelCompVue from "./components/PlayerPanelComp.vue";
import ControlCompVue from "./components/ControlComp.vue";
import DiceCompVue from "./components/DiceComp.vue";

export default {
  name: "app",
  components: {
    PlayerPanelCompVue,
    ControlCompVue,
    DiceCompVue,
  },
  data() {
    return {
      players: [
        {
          name: "Người chơi 1",
          score: 0,
          current: 0,
        },
        {
          name: "Người chơi 2",
          score: 0,
          current: 0,
        },
      ],
      activePlayer: 0,
      winnerPlayer: -1,
      dice: [
        {
          class: ["face1", "face2", "face3", "face4", "face5", "face6"],
          active: 1,
        },
        {
          class: ["face1", "face2", "face3", "face4", "face5", "face6"],
          active: 1,
        },
      ],
      finalScore: 0,
      isPlaying: false,
    };
  },
  methods: {
    handleNewGame() {
      let input = document.querySelector("input");
      input.disabled = false;
      input.value = "";
      this.isPlaying = true;
      this.players[0].score = 0;
      this.players[1].score = 0;
      this.players[0].current = 0;
      this.players[1].current = 0;
      this.dice[0].active = 1;
      this.dice[1].active = 1;
      this.activePlayer = 0;
      this.winnerPlayer = -1;
      alert("Luật chơi: người thắng cuộc là người chơi đạt được điểm mục tiêu sớm nhất. Nếu xúc xắc xoay ra số 1, người chơi sẽ mất điểm hiện tại và chuyển lượt chơi");
    },
    handleRollDice() {
      this.finalScore = document.querySelector("input").value;
      if (this.isPlaying === false) {
        alert("Vui lòng nhấn New Game");
      } else if (this.finalScore === "") {
        alert("Vui lòng nhập mục tiêu");
      } else {
        document.querySelector("input").disabled = true;
        this.dice[0].active = Math.floor(Math.random() * 6 + 1);
        this.dice[1].active = Math.floor(Math.random() * 6 + 1);
        this.players[this.activePlayer].current +=
          this.dice[0].active + this.dice[1].active;
        if (this.dice[0].active === 1 || this.dice[1].active === 1) {
          let player = this.players[this.activePlayer];
          alert("Bạn đã quay trúng số 1");
          player.current = 0;
          this.activePlayer === 0
            ? (this.activePlayer = 1)
            : (this.activePlayer = 0);
        }
      }
    },
    handleHold() {
      let player = this.players[this.activePlayer];
      if (this.isPlaying === false) {
        alert("Vui lòng nhấn New Game");
      } else if (player.current === 0) {
        alert("Vui lòng xoay xúc xắc");
      } else {
        player.score += player.current;
        player.current = 0;
        if (player.score >= this.finalScore) {
          player.name = "Chiến thắng";
          this.isPlaying = false;
          this.winnerPlayer = this.activePlayer;
          this.activePlayer = -1;
        } else {
          this.activePlayer === 0
            ? (this.activePlayer = 1)
            : (this.activePlayer = 0);
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-image: linear-gradient(#12122018, #12122021),
    url("./assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-weight: 300;
  position: relative;
  height: 100vh;
}

.wrapper {
  width: 1000px;
  background-color: #fff;
  position: absolute;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.4);
}
</style>
