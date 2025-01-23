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
import { computed, onMounted, reactive, ref, watch } from 'vue';

import { vAutofocus } from '@/directives/vAutofocus';

  const appTitle = 'My Amazing Counter App';
  const appTitleRef = ref(null);
  onMounted (() => {
    console.log(appTitleRef.value.fontSize);
  })

  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

  watch(() => counterData.count, (newCount, oldCount) => {
    if (newCount > 19) {
      alert("You hit 20?");
    }
  }) 

  const evenOrOdd = computed(() => {
    if (counterData.count % 2 === 0) {
      return 'even'
    }
      return 'odd'
  })

  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  }
  const increaseCounter = (amount) => {
    counterData.count += amount;
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