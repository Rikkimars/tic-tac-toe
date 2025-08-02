<template>
  <div class="right-panel">
    <h1>Крестики-нолики</h1>

    <p v-if="game.winner && game.winner !== 'Ничья'">🏆 Победитель: {{ game.winner }}</p>
    <p v-else-if="game.winner === 'Ничья'">🤝 Ничья!</p>
    <p v-else>Ходит: {{ game.currentPlayer }}</p>

    <button @click="game.resetGame()">Сбросить игру</button>

    <h3>📊 Статистика:</h3>
    <ul>
      <li>X: {{ game.stats.X }} побед</li>
      <li>O: {{ game.stats.O }} побед</li>
      <li>Ничья: {{ game.stats.draws }}</li>
    </ul>

    <!-- Отдельная кнопка сброса статистики и игры -->
    <button
      @click="clearAll"
      class="clear-btn"
    >
      Очистить статистику и сбросить игру
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../store/gameStore'
const game = useGameStore()

function clearAll() {
  game.stats = { X: 0, O: 0, draws: 0 }
  localStorage.removeItem('ttt-stats')
  game.resetGame()
}
</script>


