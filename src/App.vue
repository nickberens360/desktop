<template>
  <div class="desktop">
    <DesktopScreen>
      <template #header>
        <DesktopSun/>
      </template>
      <template #side>
        <DesktopItem
          id="projectsItem"
          :to="`/window/projects`"
          :initial-z-index="999"
          label="Projects"
        />
        <DesktopItem
          id="aboutItem"
          :to="`/window/about`"
          :initial-z-index="999"
          label="About"
        />


      </template>

      <template #main>
        <router-view :key="$route.path" />


        <!--        <FileWindow-->
<!--          v-for="(item, index) in setItems"-->
<!--          :id="item"-->
<!--          :key="item"-->
<!--          :initial-z-index="index"-->
<!--          container-class="file-window-container"-->
<!--          :title="item"-->
<!--        />-->

      </template>
      <template #footer>
        <DesktopFooter/>
      </template>
    </DesktopScreen>
  </div>
</template>

<script>
import {useUIStore} from '@/stores/ui';
import {mapStores} from 'pinia';
import DesktopScreen from '@/components/DesktopScreen.vue';
import DesktopSun from '@/components/DesktopSun.vue';
import DesktopFooter from '@/components/DesktopFooter.vue';
import FileWindow from '@/components/FileWindow.vue';
import DesktopItem from '@/components/DesktopItem.vue';
export default {
  name: 'DesktopView',
  components: {
    DesktopItem,
    FileWindow,
    DesktopFooter,
    DesktopSun,
    DesktopScreen,
    // DragBox,
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
    let localBoxItems = JSON.parse(localStorage.getItem('boxesOnScreen'));
    let stateBoxItems = this.uiStore.boxesOnScreen;
    if (localBoxItems) {
      this.uiStore.boxesOnScreen = localBoxItems;
      this.setItems = localBoxItems;
    } else {
      this.setItems = stateBoxItems;
    }
    console.log('localBoxItems', localBoxItems);
  }
};
</script>
