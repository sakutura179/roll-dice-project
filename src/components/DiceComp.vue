<template>
  <div>
    <div id="dice-1" class="dice">
      <div
        v-for="(item, index) in dice[0].class"
        v-bind:key="index"
        v-bind:class="addClass(item, index + 1, 0)"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div id="dice-2" class="dice">
      <div
        v-for="(item, index) in dice[1].class"
        v-bind:key="index"
        v-bind:class="addClass(item, index + 1, 1)"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dice-comp",
  props: {
    dice: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    addClass(item, index, x) {
      if (index === this.dice[x].active) {
        return { [item]: true, active: true };
      } else {
        return { [item]: true };
      }
    },
  },
};
</script>

<style>
/* dice */
.dice {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

.dice div {
  position: absolute;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 0;
  transition: opacity 0.5s ease-in-out;
}

.face1 {
  background-image: url("../assets/dice-1.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.face2 {
  background-image: url("../assets/dice-2.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.face3 {
  background-image: url("../assets/dice-3.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.face4 {
  background-image: url("../assets/dice-4.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.face5 {
  background-image: url("../assets/dice-5.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}
.face6 {
  background-image: url("../assets/dice-6.png");
  background-position: center;
  background-size: cover;
  opacity: 0;
}

.dice .active {
  opacity: 1;
}

#dice-1 {
  top: 20%;
}

#dice-2 {
  top: 40%;
}
</style>
