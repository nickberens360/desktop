import {defineStore} from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    activeDragBox: null,
    boxesOnScreen: [
      'text-1',
      'text-2',
      'text-3',
      'text-4',
    ],
    topZIndex: 999,

  }),
  actions: {
    incrementTopZIndex() {
      this.topZIndex++
    }
  }

})