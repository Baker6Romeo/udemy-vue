<template>
  <div class="home">

    <h3>{{ counterTitle }}:</h3>

    <div>
    <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
    <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
<input
      v-model="counterTitle"
      type="text"
    >    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const counter = ref(0),
    counterTitle = ref('My Counter')

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
  .edit {
    margin-top: 60px
  }
</style>