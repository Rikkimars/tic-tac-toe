<template>
  <div class="square" :class="{ 'winner-line': isWinner }" @click="$emit('click')">
    <template v-if="value === 'X'">
      <svg width="60" height="60" viewBox="0 0 100 100">
        <line x1="10" y1="10" x2="90" y2="90" stroke="red" stroke-width="10" />
        <line x1="90" y1="10" x2="10" y2="90" stroke="red" stroke-width="10" />
      </svg>
    </template>
    <template v-else-if="value === 'O'">
      <svg width="60" height="60" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="10" fill="none" />
      </svg>
    </template>
  </div>
</template>

<script setup>
defineProps(['value', 'isWinner'])
</script>
