<template>
  <div class="home">

    <h3>{{ counterData.title }}:</h3>

    <div>
    <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
    <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
<input
      v-model="counterData.title"
      type="text"
    >    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

  const decreaseCounter = () => {
    counterData.count--
  }
  const increaseCounter = () => {
    counterData.count++
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