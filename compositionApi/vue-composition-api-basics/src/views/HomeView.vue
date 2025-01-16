<template>
  <div class="home">
    <div>
    <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
    <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const counter = ref(0);

  const decreaseCounter = () => {
    counter.value--
  }
  const increaseCounter = () => {
    counter.value++
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