import {defineStore} from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    activeDragBox: null,
    boxesOnScreen: [],
    topZIndex: 999,

  }),
  actions: {
    setBoxesOnScreen(boxes) {
      this.boxesOnScreen = boxes
    }
  },
})