<template>
  <div class="home">
    <div>
    <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
    <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup() {
      const counter =ref(0)

      const decreaseCounter = () => {
        counter.value--;
      }
      const increaseCounter = () => {
        counter.value++;
      }

      

      return {
        counter,
        decreaseCounter,
        increaseCounter
      }
    }
  }
  // export default {
  //   data() {
  //     return {
  //       counter: 0
  //     }
  //   },
  //   methods: {
  //     addToCounter() {
  //       this.counter ++;
  //     },
  //     removeFromCounter() {
  //       this.counter --;
  //     }
  //   }
  // }
</script>

<style>
  .home {
    text-align: center;
    padding: 20px;
  }
  .btn, .counter {
    font-size: 40px;
    margin: 10px;
  }
</style>