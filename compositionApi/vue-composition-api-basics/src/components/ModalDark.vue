<template>
  <teleport to="body">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue')">Hide Modal with button</button>
      <button @click="hideIt">Hide Modal with method</button>
    </div>
    </teleport>
</template>

<script setup>
  const emit = defineEmits(['hideModal', 'update:modelValue']);
  const props = defineProps({
    modelValue:{
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title specified'
    }
  });

  const hideIt = () => {
    console.log('Hide It');
    emit('update:modelValue', false)
  }
</script>

<style>
  .modal-dark {
    background: black;
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