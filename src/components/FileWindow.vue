<template>
  <div class="file-window-container">
    <DragBox
      :class="{'is-active': isActive}"
      class="file-window rounded-3xl rounded-br"
      :id="id"
      use-handle
      :initial-z-index="initialZIndex"
      @drag-box-clicked="(handleDragBoxClicked)"
      @drag-box-mousedown="(handleDragBoxMouseDown)"
      @drag-box-mouseup="(handleDragBoxMouseUp)"
    >
      <template #handle>
        <FileWindowHeader
          :id="id"
          :title="title"
          @close-window="handleCloseWindow"
        />
      </template>
      <template #default>
        <div class="file-window__main flex h-full">
          <div class="file-window__sidebar px-4 py-2">
            sidebar
          </div>
          <div class="file-window__content px-4 py-2">
            <component :is="contentComponent"></component>
          </div>
        </div>
      </template>

    </DragBox>
  </div>
</template>

<script>
import {useUIStore} from '@/stores/ui';
import {mapStores} from 'pinia';
import FileWindowHeader from '@/components/FileWindow/FileWindowHeader.vue';
import FileWindowContent from '@/components/FileWindow/FileWindowContent.vue';
import DragBox from '@/components/DragBox.vue';
import ProjectsContent from '@/components/content/ProjectsContent.vue';
import AboutContent from '@/components/content/AboutContent.vue';


export default {
  name: 'FileWindow',
  components: {ProjectsContent, AboutContent, FileWindowContent, FileWindowHeader, DragBox},
  props: {
    id: {
      type: String,
      required: true,
      default: 'fileWindow',
    },
    initialZIndex: {
      type: Number,
      default: 999
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      closeBtnTriggered: false,
    }
  },
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
    contentComponent () {
      return  this.capitalize(this.id)+'Content';
    },
  },
  methods: {
    capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    },
    setStoreData() {
      this.uiStore.activeDragBox = this.id;
      this.uiStore.setScreenBoxes(this.uiStore.activeDragBox);
    },
    handleCloseWindow() {
      console.log('handleCloseWindow');
      // this.uiStore.removeFileWindow(this.id)
      // const activeWindow = this.uiStore.activeDragBox
      // const activeWindows = this.uiStore.windowsOnScreen
      // console.log(activeWindows.length > 0)
      // if (activeWindows.length > 0) {
      //   this.$router.push(`/desktop/${activeWindow}`)
      // } else {
      //   this.$router.push(`/`)
      // }
    },
    handleDragBoxClicked() {
      // await this.handleCloseWindow()
      // if (this.closeBtnTriggered) {
      //   console.log('closeBtnTriggered');
      //   return;
      // }
      // console.log('handleDragBoxClicked');
      this.setStoreData();
      this.$router.push({name: 'window', params: {id: this.id}});
    },
    handleDragBoxMouseDown() {
      this.setStoreData();
    },
    handleDragBoxMouseUp() {
      console.log('handleDragBoxMouseUp');
      // localStorage.setItem('windowsOnScreen', JSON.stringify(this.uiStore.windowsOnScreen));
    },
  },

};
</script>

<style scoped>


.file-window-container {
  position: absolute;
  max-width: 90vw;
  min-width: 620px;
  max-height: 85vh;
  min-height: 320px;
}

.file-window {
  resize: both;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #f1ebde;
  border: 1px solid #414141;
}

.file-window.is-active {
  box-shadow: 10px 10px 2px 0 rgba(0, 0, 0, 0.65);
}

.file-window__content {
  border-left: 1px solid #414141;
}

.file-window__sidebar {
  height: 100%;
  width: 100%;
  flex: 1 0 155px;
  max-width: 155px;
  min-width: 140px;
}


</style>
