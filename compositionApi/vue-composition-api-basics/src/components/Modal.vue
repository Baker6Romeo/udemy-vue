<template>
  <teleport to="body">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button>Hide Modal</button>
    </div>
    </teleport>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'No title specified'
    }
  })
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