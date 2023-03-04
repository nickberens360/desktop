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
      console.log('setScreenBoxes', item)
      if (!this.boxesOnScreen.includes(item)) {
        this.boxesOnScreen.push(item)
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
      }
      else {
        let boxIndex = this.boxesOnScreen.indexOf(item)
        this.boxesOnScreen.push(this.boxesOnScreen.splice(boxIndex, 1)[0]);
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
      }
      this.activeDragBox = item
      localStorage.setItem('activeDragBox', item)
      // this.$router.push('/');
    },

    // remove file window from array
    removeFileWindow(id) {
      console.log('removeFileWindow', 'id', id)
      this.boxesOnScreen = this.boxesOnScreen.filter((boxesOnScreen) => boxesOnScreen.id !== id)
      console.log('boxesOnScreen', this.boxesOnScreen)
      console.log('activeDragBox', this.activeDragBox)
      console.log('length',this.boxesOnScreen.length)
      // if (this.boxesOnScreen.length > 0) {
      //   this.activeDragBox = this.boxesOnScreen[this.boxesOnScreen.length - 1].id
      //   console.log('activeID', this.activeDragBox)
      // } else {
      //   this.activeDragBox = null
      //   this.boxesOnScreen = []
      // }
    },



  },

})
