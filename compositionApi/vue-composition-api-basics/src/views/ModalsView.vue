<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Modal
      v-model="showModal"
      title="My Modal">
      <p>Lorem Ipsem pirate stuff</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Modal from '@/components/Modal.vue'

  const showModal = ref(false);

</script>

