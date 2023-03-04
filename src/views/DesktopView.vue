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



      </template>
      <template #footer>
        <DesktopFooter/>
      </template>
    </DesktopScreen>
  </div>
</template>

<script>
import DesktopScreen from '@/components/DesktopScreen.vue';
import DesktopSun from '@/components/DesktopSun.vue';
import DesktopFooter from '@/components/DesktopFooter.vue';
import DesktopItem from '@/components/DesktopItem.vue';
export default {
  name: 'DesktopView',
  components: {
    DesktopItem,
    DesktopFooter,
    DesktopSun,
    DesktopScreen,
  },
};
</script>
