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
  data() {
    return {
      setItems: null
    };
  },
  components: {
    DragBox,
  },
  computed: {
    ...mapStores(useUIStore),
  },
  mounted() {
    let localBoxItems = JSON.parse(localStorage.getItem('boxesOnScreen'))
    let stateBoxItems = this.uiStore.boxesOnScreen
    if (localBoxItems) {
      this.uiStore.boxesOnScreen = localBoxItems
      this.setItems = localBoxItems
    } else {
      this.setItems = stateBoxItems
    }
    console.log('localBoxItems', localBoxItems)
  }
};
</script>