import {defineStore} from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    activeDragBox: null,
    windowsOnScreen: [],
    minimizedBoxes: [],
    topZIndex: 999,

  }),
  actions: {
    setScreenBoxes(item) {
      // console.log('Router', this.$router)
      console.log('setScreenBoxes', item)
      if (!this.windowsOnScreen.includes(item)) {
        this.windowsOnScreen.push(item)
        localStorage.setItem('windowsOnScreen', JSON.stringify(this.windowsOnScreen))
      }
      else {
        let boxIndex = this.windowsOnScreen.indexOf(item)
        this.windowsOnScreen.push(this.windowsOnScreen.splice(boxIndex, 1)[0]);
        localStorage.setItem('windowsOnScreen', JSON.stringify(this.windowsOnScreen))
      }
      this.activeDragBox = item
      localStorage.setItem('activeDragBox', item)
      // this.$router.push('/');
    },

    // remove file window from array
    removeFileWindow(item) {

      if (this.windowsOnScreen.length > 1) {
        let boxIndex = this.windowsOnScreen.indexOf(item)
        this.windowsOnScreen.splice(boxIndex, 1)
        this.activeDragBox = this.windowsOnScreen.slice(-1)[0]
        this.$router.push('/window/' + this.activeDragBox);
        localStorage.setItem('activeDragBox', this.activeDragBox)
        localStorage.setItem('windowsOnScreen', JSON.stringify(this.windowsOnScreen))
      }
      else {
        this.windowsOnScreen = []
        this.activeDragBox = null
        localStorage.setItem('windowsOnScreen', JSON.stringify(this.windowsOnScreen))
        localStorage.setItem('activeDragBox', null)
        this.$router.push('/');
      }



    },



  },

})
