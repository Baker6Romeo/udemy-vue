<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>

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
      v-model="counterData.title"
      type="text"
    >    </div>
  </div>
</template>

<script setup>
import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, watch } from 'vue';

  const appTitle = 'My Amazing Counter App';
  onMounted(() => {console.log('Title on mounted stuff')})

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

  onActivated(() => {
    console.log('On Activated');
  })
  onDeactivated(() => {
    console.log('On Deactivated');
  })
  onBeforeMount(() => {
    console.log('On Before Mount');
  })
  onMounted(() => {
    console.log('On Mounted');
  })
  onBeforeUnmount(() => {
    console.log('On Before Unmount');
  })
  onUnmounted(() => {
    console.log('On Unmounted');
  })
  onBeforeUpdate(() => {
    console.log('On Before Update');
  })
  onUpdated(() => {
    console.log('On Updated');
  })

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