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
    removeFileWindow(item) {

      if (this.boxesOnScreen.length > 1) {
        let boxIndex = this.boxesOnScreen.indexOf(item)
        this.boxesOnScreen.splice(boxIndex, 1)
        this.activeDragBox = this.boxesOnScreen.slice(-1)[0]
        this.$router.push('/window/' + this.activeDragBox);
        localStorage.setItem('activeDragBox', this.activeDragBox)
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
      }
      else {
        this.boxesOnScreen = []
        this.activeDragBox = null
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.boxesOnScreen))
        this.$router.push('/');
      }



    },



  },

})
