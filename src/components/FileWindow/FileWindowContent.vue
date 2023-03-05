<template>
  <div class="file-window__main flex h-full">
    <div class="file-window__sidebar px-4 py-2">
      sidebar
    </div>
    <div class="file-window__content px-4 py-2">
      content
<!--      This item: {{id}}<br>-->
<!--      Active Box: {{uiStore.activeDragBox}}<br>-->
<!--      isActive: {{isActive}}<br>-->
<!--      Boxes on screen: <br>-->
<!--      <pre>{{uiStore.windowsOnScreen}}</pre>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileWindowContent'
};
</script>

<style scoped>
.file-window__content {
  border-left: 1px solid #414141;
}

.file-window__sidebar {
  height: 100%;
  width: 100%;
  flex: 1 0 155px;
  max-width: 155px;
  min-width: 140px;
}
</style>
