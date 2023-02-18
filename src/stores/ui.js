import {defineStore} from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    activeDragBox: null,
    boxesOnScreen: [],
    topZIndex: 999,

  }),
  actions: {
    setScreenBoxes(item) {
      // console.log('Router', this.$router)
      // console.log('setScreenBoxes', item)
      if (!this.boxesOnScreen.includes(item)) {
        this.boxesOnScreen.push(item)
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
      }
      else {
        console.log('removing item')
        let boxIndex = this.boxesOnScreen.indexOf(item)
        this.boxesOnScreen.push(this.boxesOnScreen.splice(boxIndex, 1)[0]);
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
      }
      this.activeDragBox = item
      localStorage.setItem('activeDragBox', item)
      // this.$router.push('/');
    }
  },
})