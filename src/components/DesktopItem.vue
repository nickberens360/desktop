<template>
  <div class="relative" style="width: 90px; height: 150px;">
    <DragBox
      :class="{'is-active': isActive}"
      class="file-window rounded-3xl rounded-br"
      :id="id"
      :initial-z-index="initialZIndex"
    >
<!--      @drag-box-clicked="(handleDragBoxClicked)"-->
<!--      @drag-box-mousedown="(handleDragBoxMouseDown)"-->
<!--      @drag-box-mouseup="(handleDragBoxMouseUp)"-->
      <router-link
        :to="to"
      >

        <div
          :id="id"
          :ref="id"
          class="desktop-item draggable resizeable absolute cursor-grab persist-active-z-index-class"
        >
          <div>
            <div class="folder-icon">
              <div class="folder-icon__back bg-gray-200"/>
              <div class="folder-icon__front bg-white"/>
            </div>
            <slot name="label">
          <span class="desktop-item__label block bg-blue-500 mt-1 rounded-xl text-white p-1 text-xs text text-center">{{
              id
            }}</span>
            </slot>
          </div>
        </div>

      </router-link>
    </DragBox>
  </div>
</template>

<script>
import DragBox from '@/components/DragBox.vue';
import {mapStores} from 'pinia';
import {useUIStore} from '@/stores/ui';

export default {
  name: 'DesktopItem',
  components: {
    DragBox,
  },
  props: {
    id: {
      type: String,
      required: false,
      default: 'DesktopItem',
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    label: {
      type: String,
      required: false,
      default: 'DesktopItem',
    },
    initialZIndex: {
      type: Number,
      default: 999
    },
  },
  data() {
    return {
      color: 'black',
      font: {
        weight: '800',
      },
    };
  },
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
  },
};
</script>

<style scoped>

.desktop-item {
  border-radius: 10px;
  width: 100px;
  height: 115px;
  min-height: 115px;
  min-width: 100px;
  max-height: 115px;
  max-width: 100px;
  margin: auto auto 15px;

}

.active-z-index .desktop-item__label {
  background-color: #414141;
  @apply bg-blue-700;
}


.folder-icon {
  position: relative;
  width: 80px;
  height: 90px;
  margin: auto;
}

.folder-icon__back {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid black;
}

.folder-icon__back:after {
  content: '';
  position: absolute;
  top: -4px;
  border-radius: 8px 8px 0 0;
  left: 10px;
  width: 24px;
  height: 5px;
  border: 2px solid black;
  border-bottom: none;
  background: #f1ebde;
  transform: skew(-27deg);
}

.folder-icon__back:before {
  content: '';
  position: absolute;
  top: -4px;
  border-radius: 8px 8px 0 0;
  left: 10px;
  width: 24px;
  height: 5px;
  border: 2px solid black;
  border-bottom: none;
  background: #f1ebde;
  transform: skew(27deg);
}
.folder-icon__front {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 85px;
  border: 2px solid black;
  transform: skewX(0deg);
  transform-origin: bottom;
  border-radius: 10px;
  transition: transform 0.25s ease;
}

.router-link-active .folder-icon__front {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border: 2px solid black;
  transform: skewX(15deg);
  transform-origin: bottom;
  border-radius: 10px;
}
</style>60
