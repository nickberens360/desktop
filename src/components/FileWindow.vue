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
        <FileWindowHeader :title="title"/>
      </template>
      <template #default>
        <FileWindowContent/>
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

export default {
  name: 'FileWindow',
  components: {FileWindowContent, FileWindowHeader, DragBox},
  props: {
    id: {
      type: String,
      required: true,
      default: 'fileWindow',
    },
    contentComponent: {
      type: String,
      required: false,
      default: null,
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
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
  },
  methods: {
    setStoreData() {
      this.uiStore.activeDragBox = this.id;
      this.uiStore.setScreenBoxes(this.uiStore.activeDragBox);
    },
    handleDragBoxClicked() {
      this.setStoreData();
    },
    handleDragBoxMouseDown() {
      this.setStoreData();
    },
    handleDragBoxMouseUp() {
      localStorage.setItem('boxesOnScreen', JSON.stringify(this.uiStore.boxesOnScreen));
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
  /*position: absolute;*/
  /*margin: auto;*/
  resize: both;
  overflow: auto;
  /*width: 100%;*/
  /*height: 100%;*/
  max-width: 90vw;
  min-width: 620px;
  max-height: 85vh;
  min-height: 320px;
  background-color: #f1ebde;
  border: 1px solid #414141;
}

.file-window.is-active {
  box-shadow: 10px 10px 2px 0 rgba(0, 0, 0, 0.65);
}


</style>
