<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
    <button class="btn" @click="decreaseCounter(1)">-</button>
    <button class="btn" @click="decreaseCounter(2)">--</button>
      <span class="counter">{{ counterData.count }}</span>
    <button class="btn" @click="increaseCounter(1)">+</button>
    <button class="btn" @click="increaseCounter(2)">++</button>
    </div>

    <p>This counter is {{ evenOrOdd }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
<input
      v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useCounter } from '@/use/useCounter';
import { vAutofocus } from '@/directives/vAutofocus';

  const appTitle = 'My Amazing Counter App';
  const appTitleRef = ref(null);

  const { counterData, decreaseCounter, evenOrOdd, increaseCounter} = useCounter();

  /* If you do this you'll have to update method calls (counter.evenOrOdd)
  const counter = useCounter();
  */

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