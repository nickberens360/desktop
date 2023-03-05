<template>
    <div
      :id="id"
      :ref="id"
      :class="{'is-active': isActive}"
      class="drag-box cursor-grab"
      @click="handleClick()"
      v-on="{ mousedown: !useHandle ? handleMouseDown : null }"
    >
      <div
        class="drag-box__handle"
        :id="`handle-${id}`"
        :ref="`handle-${id}`"
        v-on="{ mousedown: useHandle ? handleMouseDown : null }"
      >
        <slot name="handle"/>
      </div>
      <slot name="default"/>
      <slot name="footer"/>

    </div>
</template>

<script>
import {useUIStore} from '@/stores/ui';
import {mapStores} from 'pinia';

export default {
  name: 'DragBox',
  props: {
    id: {
      type: String,
      required: true,
    },
    initialZIndex: {
      type: Number,
      default: 999
    },
    useHandle: {
      type: Boolean,
      required: false,
      default: null,
    },
    containerClass: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  async mounted() {
    this.saveOnResized(this.$refs[this.id]);

    this.x = +localStorage.getItem(`${this.id}-x`) || 0;
    this.y = +localStorage.getItem(`${this.id}-y`) || 0;

  },
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
    setZIndex() {
      return this.initialZIndex + 999;
    },
    setPositionsX() {
      return this.x + 'px';
    },
    setPositionsY() {
      return this.y + 'px';
    },
  },
  methods: {
    handleDragStart() {
      console.log('handleDragStart');
    },
    handleClick() {
      this.$emit('drag-box-clicked');
    },
    handleMouseDown(event) {
      event.preventDefault();
      this.$emit('drag-box-mousedown');

      const {clientX, clientY} = event;
      let currentX = clientX;
      let currentY = clientY;

      const handleMouseMove = event => {
        event.preventDefault();
        const {clientX, clientY} = event;
        this.x += clientX - currentX;
        this.y += clientY - currentY;
        currentX = clientX;
        currentY = clientY;
        localStorage.setItem(`${this.id}-x`, this.x);
        localStorage.setItem(`${this.id}-y`, this.y);
        localStorage.setItem('activeDragBox', this.id);
      };

      const handleMouseUp = () => {
        this.$emit('drag-box-mouseup');
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    saveOnResized(ref) {
      new ResizeObserver(saveSaveToLocalStorage).observe(ref)

      function saveSaveToLocalStorage() {
        let size = {
          width: ref.offsetWidth,
          height: ref.offsetHeight
        }
        localStorage.setItem(ref.id + '-width', ref.style.width = size.width + 'px');
        localStorage.setItem(ref.id + '-height', ref.style.height = size.height + 'px');
      }
      if (localStorage.getItem(ref.id + '-width' && ref.id + '-height')) {
        ref.style.width = localStorage.getItem(ref.id + '-width')
        ref.style.height = localStorage.getItem(ref.id + '-height')
      }

    }
  }
};
</script>

<style>

.drag-box {
  position: absolute;
  z-index: v-bind(setZIndex);
  top: v-bind(setPositionsY);
  left: v-bind(setPositionsX);
}
</style>
