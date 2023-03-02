<template>
    <div
      :id="id"
      :class="{'is-active': isActive}"
      class="drag-box cursor-grab"
      :ref="id"
      :style="{ left: x + 'px', top: y + 'px' }"
      @click.stop="handleClick()"
    >
      <div
        class="drag-box__handle"
        :id="`handle-${id}`"
        :ref="`handle-${id}`"
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

    this.x = +localStorage.getItem(`${this.id}-x`) || 0;
    this.y = +localStorage.getItem(`${this.id}-y`) || 0;
    if (localStorage.getItem('activeDragBox')) {
      this.uiStore.activeDragBox = localStorage.getItem('activeDragBox');
    } else {
      this.uiStore.activeDragBox = this.id;
    }

    if (this.useHandle) {
      this.$refs[`handle-${this.id}`].addEventListener('mousedown', this.handleMouseDown);
    } else {
      this.$refs[this.id].addEventListener('mousedown', this.handleMouseDown);
    }
  },
  computed: {
    ...mapStores(useUIStore),
    isActive() {
      return this.uiStore.activeDragBox === this.id;
    },
    setZIndex() {
      return this.initialZIndex + 999;
    },
  },
  methods: {
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
    }
  }
};
</script>

<style>

.drag-box {
  position: absolute;
  z-index: v-bind(setZIndex);
}
</style>
