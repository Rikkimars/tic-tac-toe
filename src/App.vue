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



