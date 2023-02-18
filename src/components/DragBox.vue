<template>
  <div :id="id" :class="{'is-active': isActive}" class="drag-box cursor-grab p-2 px8 bg-gray-200" :ref="id" :style="{ left: x + 'px', top: y + 'px' }">
    <slot />
    Active Box: {{uiStore.activeDragBox}}<br>
    isActive: {{isActive}}<br>
    z-index: {{setZIndex}}<br>
    Boxes on screen: <br>
    <pre>{{uiStore.boxesOnScreen}}</pre>
  </div>
</template>

<script>
import { useUIStore } from '@/stores/ui';
import { mapStores } from 'pinia';
export default {
  name: "DragBox",
  props: {
    id: {
      type: String,
      required: true,
    },
    initialZIndex: {
      type: Number,
      default: 999
    }
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  mounted() {
    this.x = localStorage.getItem(`${this.id}-x`) || 0
    this.y = localStorage.getItem(`${this.id}-y`) || 0
    if (localStorage.getItem('activeDragBox')){
      this.uiStore.activeDragBox = localStorage.getItem('activeDragBox');
    } else {
      this.uiStore.activeDragBox = this.id;
    }
    this.$refs[this.id].addEventListener("mousedown", this.handleMouseDown);
  },
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
    setZIndex() {
      return this.initialZIndex + 999
    }
  },
  methods: {
    handleMouseDown(event) {
      console.log('handleMouseDown', this.id)
0
      this.uiStore.activeDragBox = this.id;

      if (this.isActive) {
        let boxIndex = this.uiStore.boxesOnScreen.indexOf(this.id)
        this.uiStore.boxesOnScreen.push(this.uiStore.boxesOnScreen.splice(boxIndex, 1)[0]);
      }

      const { clientX, clientY } = event;
      let currentX = clientX;
      let currentY = clientY;

      const handleMouseMove = event => {
        event.preventDefault();
        const { clientX, clientY } = event;
        this.x += clientX - currentX;
        this.y += clientY - currentY;
        currentX = clientX;
        currentY = clientY;
        localStorage.setItem(`${this.id}-x`, this.x);
        localStorage.setItem(`${this.id}-y`, this.y);
        localStorage.setItem('activeDragBox', this.id)
      };

      const handleMouseUp = () => {
        localStorage.setItem('boxesOnScreen', JSON.stringify(this.uiStore.boxesOnScreen))
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  }
};
</script>

<style>
.drag-box {
  position: absolute;
  border: 1px solid #000;
  z-index: v-bind(setZIndex);
}
.is-active.drag-box {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
}
</style>