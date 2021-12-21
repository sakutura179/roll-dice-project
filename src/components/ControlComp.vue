<template>
  <div>
    <button class="control btn-new" v-on:click="handleNewGame">
      <i class='bx bx-plus-circle'></i>Game mới
    </button>
    <button class="control btn-roll" v-on:click="handleRollDice">
      <i class='bx bx-dice-6'></i>Xoay xúc xắc
    </button>
    <button class="control btn-hold" v-on:click="handleHold">
      <i class='bx bx-message-alt-add'></i>Giữ điểm
    </button>

    <input type="number" placeholder="Mục tiêu" class="final-score" />
  </div>
</template>

<script>
export default {
  name: "control-comp",
  data() {
    return {};
  },
  methods: {
    handleNewGame() {
      this.$emit("newGame");
    },
    handleRollDice() {
      this.$emit("rollDice");
    },
    handleHold() {
      this.$emit("hold");
    },
  },
};
</script>

<style>
/* control buttons */
.control {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

.control.disable {
  pointer-events: none;
}

.control:hover {
  font-weight: 500;
}

.control:hover i {
  margin-right: 20px;
}

.control i {
  display: inline-block;
  margin-right: 10px;
  font-size: 20px;
  transition: all 0.3s ease;
}

.control.focus {
  outline: none;
}

.control.btn-new {
  top: 5%;
}

.control.btn-roll {
  top: 68%;
}

.control.btn-hold {
  top: 80%;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3%;
  text-align: center;
  width: 15%;
  padding: 10px;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
}

.final-score:focus {
  outline: none;
}
</style>
