<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show Dark modals?
        <input v-model="showDarkModals" type="checkbox">
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My Modal">
      <p>Lorem Ipsem pirate stuff</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue';

  const showDarkModals = ref(false)
  const showModal = ref(false);

</script>

