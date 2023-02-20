<template>
  <div
    class="file-window-header px-4 py-2 cursor-grab flex items-center justify-between "
    style="border-bottom: 1px solid #414141;"
  >
    <div>
      <button
        class="file-window__control bg-red-400 ml-1.5"
        type="button"
      />
      <button
        class="file-window__control bg-yellow-400 ml-1.5"
        type="button"
      />
      <button
        class="file-window__control bg-green-400 ml-1.5"
        type="button"
      />
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileWindowHeader',
  props: {
    title: {
      type: String,
      default: 'File Window',
    },
  },
};
</script>

<style scoped>
.file-window__control {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #414141;
}
</style>