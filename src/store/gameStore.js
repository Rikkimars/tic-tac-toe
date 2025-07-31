import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null,
    winningLine: [],
    stats: JSON.parse(localStorage.getItem('ttt-stats')) || {
      X: 0,
      O: 0,
      draws: 0
    }
  }),
  actions: {
    makeMove(index) {
      if (this.board[index] || this.winner) return

      this.board[index] = this.currentPlayer
      this.checkWinner()

      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
      }
    },
    checkWinner() {
      const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ]

      for (const combo of winCombos) {
        const [a, b, c] = combo
        if (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        ) {
          this.winner = this.board[a]
          this.winningLine = combo
          this.stats[this.winner]++
          this.saveStats()
          return
        }
      }

      if (this.board.every(cell => cell)) {
        this.winner = 'Ничья'
        this.stats.draws++
        this.saveStats()
      }
    },
    resetGame() {
      this.board = Array(9).fill('')
      this.currentPlayer = 'X'
      this.winner = null
      this.winningLine = []
    },
    saveStats() {
      localStorage.setItem('ttt-stats', JSON.stringify(this.stats))
    }
  }
})
