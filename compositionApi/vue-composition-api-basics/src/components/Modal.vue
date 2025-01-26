<template>
  <teleport to="body">
    <div class="modal">
      <h1><slot name="title"/></h1>
      <pre>{{ $slots.title() }}</pre>
      <slot />
      <button>Hide Modal</button>
    </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

  const slots = useSlots();
  console.log(slots.title());
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