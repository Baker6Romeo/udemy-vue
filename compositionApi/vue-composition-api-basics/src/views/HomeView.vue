<template>
  <div class="home">
    <div>
    <button class="btn" @click="removeFromCounter">-</button>
      <span class="counter">{{ counter }}</span>
    <button class="btn" @click="addToCounter">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addToCounter() {
        this.counter ++;
      },
      removeFromCounter() {
        this.counter --;
      }
    }
  }
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