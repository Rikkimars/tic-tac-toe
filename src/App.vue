<template>
  <div>
    <button @click="toggleTheme" class="theme-btn">🌞 / 🌙</button>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './store/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.applyTheme()
})

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>

<style>
.theme-btn {
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: var(--square-bg);
  color: var(--text-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.theme-btn:hover {
  background-color: var(--square-border);
}
</style>
