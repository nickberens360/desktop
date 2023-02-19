<template>
  <div class="desktop">

    <DesktopScreen>
      <template #header>
        <DesktopSun />
      </template>
      <template #main>
        <DragBox v-for="(item, index) in setItems" :id="item" :key="item" :initial-z-index="index">
          <h1 class="text-red-600">{{item}}</h1>
        </DragBox>
      </template>
      <template #footer>

        <DesktopFooter />
      </template>
    </DesktopScreen>



  </div>
</template>

<script>
import DragBox from '../components/DragBox.vue';
import { useUIStore } from '@/stores/ui';
import { mapStores } from 'pinia';
import DesktopScreen from '@/components/DesktopScreen.vue';
import DesktopSun from '@/components/DesktopSun.vue';
import DesktopFooter from '@/components/DesktopFooter.vue';
export default {
  name: 'DesktopView',
  components: {
    DesktopFooter,
    DesktopSun,
    DesktopScreen,
    DragBox,
  },
  data() {
    return {
      setItems: null
    };
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