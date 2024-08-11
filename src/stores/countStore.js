import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
  persist: [
    {
      key: 'count',
      storage: localStorage,
    },
  ],
})
