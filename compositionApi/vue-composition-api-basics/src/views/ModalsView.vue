<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <teleport to="body">
    <div v-if="showModal" class="modal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eius ullam iusto est ipsam recusandae hic animi harum, nisi voluptates veritatis error perferendis. Culpa omnis distinctio corporis quod, molestiae ad?</p>
      <button @click="showModal = false">Hide Modal</button>
    </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const showModal = ref(false);

</script>

<style>
  .modal {
    background: beige;
    color: blue;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>