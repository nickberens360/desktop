<template>
  <FileWindow
    v-for="(item, index) in setItems"
    :id="item"
    :key="item"
    :initial-z-index="index"
    :initial-x="index * 20"
    :initial-y="index * 20"
    container-class="file-window-container"
    :title="item"
  />
</template>

<script>
import {useUIStore} from '@/stores/ui';
import {mapStores} from 'pinia';
import FileWindow from '@/components/FileWindow.vue';
export default {
  name: 'WindowView',
  components: {FileWindow},
  data() {
    return {
      setItems: null
    };
  },
  computed: {
    ...mapStores(useUIStore),
    routeParams() {
      return this.$route.params.id;
    },
  },
  methods: {
    setStoreData() {
      this.uiStore.activeDragBox = this.routeParams;
      this.uiStore.setScreenBoxes(this.uiStore.activeDragBox);
    },
  },
  mounted() {
    console.log('this.routeParams', this.routeParams);
    this.setStoreData();
    let localBoxItems = JSON.parse(localStorage.getItem('windowsOnScreen'));
    let stateBoxItems = this.uiStore.windowsOnScreen;
    if (localBoxItems) {
      this.uiStore.windowsOnScreen = localBoxItems;
      this.setItems = localBoxItems;
    } else {
      this.setItems = stateBoxItems;
    }
    console.log('localBoxItems', localBoxItems);
  }
};
</script>

<style scoped>

</style>
