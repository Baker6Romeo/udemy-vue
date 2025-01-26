<template>
  <teleport to="body">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('hideModal')">Hide Modal with button</button>
      <button @click="hideIt">Hide Modal with method</button>
    </div>
    </teleport>
</template>

<script setup>
  const emit = defineEmits(['hideModal']);
  const props = defineProps({
    title: {
      type: String,
      default: 'No title specified'
    }
  });

  const hideIt = () => {
    emit('hideModal')
  }
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
    z-index: 1;
  }
</style>