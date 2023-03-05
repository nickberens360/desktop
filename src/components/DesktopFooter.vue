<template>
<footer class="border-2 p-3">
  <nav>
    <button @click.stop="clearLocalStorage" class="border-2 inline-block py-1 px-3">Clear Local Storage</button>
<!--    <button @click.stop="addItem('test-1')"  class="border-2 inline-block py-1 px-3">Test 1</button>-->
<!--    <button @click.stop="addItem('test-2')"  class="border-2 inline-block py-1 px-3">Test 2</button>-->
<!--    <router-link to="/window/about" @click.stop="addItem('test-3')"  class="border-2 inline-block py-1 px-3">Test 3</router-link>-->
  </nav>
</footer>
</template>

<script>
import {mapStores} from 'pinia';
import {useUIStore} from '@/stores/ui';

export default {
  name: "DesktopFooter",
  methods: {
    clearLocalStorage() {
      localStorage.clear();
      window.location.reload();
    },
    // addItem(item) {
    //   this.uiStore.setScreenBoxes(item)
    // }
  },
  computed: {
    ...mapStores(useUIStore),
  },
}
</script>

<style scoped>
footer {
  position: relative;
  z-index: 100;
  background-color: #f1ebde;
}
</style>
