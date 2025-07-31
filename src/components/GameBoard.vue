<template>
  <div class="container">
    <div class="board">
      <Square
        v-for="(cell, index) in game.board"
        :key="index"
        :value="cell"
        @click="game.makeMove(index)"
        :class="{ 'winner-line': game.winningLine.includes(index) }"
      />
    </div>
    <ScoreBoard />
  </div>
</template>

<script setup>
import Square from './Square.vue'
import ScoreBoard from './ScoreBoard.vue'
import { useGameStore } from '../store/gameStore'
const game = useGameStore()
</script>
