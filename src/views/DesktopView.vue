<template>
  <div class="desktop">

    <DragBox v-for="(item, index) in setItems" :id="item" :key="item" :initial-z-index="index">
      <h1 class="text-red-600">{{item}}</h1>
    </DragBox>


  </div>
</template>

<script>
import DragBox from '../components/DragBox.vue';
import { useUIStore } from '@/stores/ui';
import { mapStores } from 'pinia';
export default {
  name: 'DesktopView',
  // data() {
  //   return {
  //     setItems: localStorage.getItem('boxesOnScreen')
  //   };
  // },
  components: {
    DragBox,
  },
  computed: {
    ...mapStores(useUIStore),
    setItems() {
      // let localBoxItems = localStorage.getItem('boxesOnScreen')
      // let stateBoxItems = this.uiStore.boxesOnScreen
      //
      // if (stateBoxItems.length) {
      //   return localBoxItems
      // }
      // else {
      //   return this.uiStore.boxesOnScreen
      // }
      return this.uiStore.boxesOnScreen
    }
  },
};
</script>