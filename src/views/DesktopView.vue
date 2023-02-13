<template>
  <div class="desktop">

    <DragBox v-for="(item, index) in setItems" :id="item" :key="item" :initial-z-index="index">
      <h1 class="text-red-600">{{item}}</h1>
    </DragBox>

<!--    <DragBox id="test-2">-->
<!--      <h1 class="text-red-600">Test 2</h1>-->
<!--    </DragBox>-->
<!--    <DragBox id="test-3">-->
<!--      <h1 class="text-red-600">Test 3</h1>-->
<!--    </DragBox>-->


  </div>
</template>

<script>
import DragBox from '../components/DragBox.vue';
import { useUIStore } from '@/stores/ui';
import { mapStores } from 'pinia';
export default {
  name: 'DesktopView',
  components: {
    DragBox,
  },
  computed: {
    ...mapStores(useUIStore),
    setItems() {
      return this.uiStore.boxesOnScreen
    }
  },
};
</script>