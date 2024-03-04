interface State {
  counter: number
}

export const useCountStore = defineStore('count', {
  state: (): State => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  },
  persist: [
    {
      key: 'count',
      storage: localStorage
    }
  ]
})
