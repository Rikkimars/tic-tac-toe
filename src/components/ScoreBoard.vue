<template>
  <div class="right-panel">
    <h1>Крестики-нолики</h1>
    <p v-if="game.winner && game.winner !== 'Ничья'">🏆 Победитель: {{ game.winner }}</p>
    <p v-else-if="game.winner === 'Ничья'">🤝 Ничья!</p>
    <p v-else>Ходит: {{ game.currentPlayer }}</p>

    <button @click="game.resetGame()">Сбросить</button>

    <h3>📊 Статистика:</h3>
    <ul>
      <li>X: {{ game.stats.X }} побед</li>
      <li>O: {{ game.stats.O }} побед</li>
      <li>Ничья: {{ game.stats.draws }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useGameStore } from '../store/gameStore'
const game = useGameStore()
</script>
