<template>
  <teleport to="body">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue')">Hide Modal with button</button>
      <button @click="hideIt">Hide Modal with method</button>
      <div>
        Username is: {{ userData.username }}
      </div>
    </div>
    </teleport>
</template>

<script setup>
import { inject } from 'vue';

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

  const userData = inject('userData')
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