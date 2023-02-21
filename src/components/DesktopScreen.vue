<template>
  <div class="desktop flex flex-col justify-between h-screen">
    <div class="hills" />
    <div class="w-full">
      <slot name="header"/>
    </div>
    <div class="w-full mb-auto flex p-4">
      <div class="desktop-item-container">
        <slot name="side"/>
      </div>
      <div class="desktop-content w-full flex justify-center">
        <slot name="main"/>
      </div>
    </div>
    <div class="w-full">
      <slot name="footer"/>
    </div>
  </div>


</template>

<script>
export default {
  name: "DesktopScreen"
}
</script>

<style scoped>
.desktop {
  position: relative;
  @apply bg-gradient-to-t from-blue-500 to-blue-100;
  overflow: hidden;
}

.hills:after {
  content: "";
  position: absolute;
  height: 25%;
  width: 150%;
  bottom: 0;
  left: -25%;
  transform: skewx(-5deg);
  @apply bg-gradient-to-t from-green-900 to-green-300;
  border-radius: 85% 50% 0 0;

}

.hills:before {
  content: "";
  position: absolute;
  height: 35%;
  width: 150%;
  bottom: 0;
  left: -25%;
  transform: rotate(5deg);
  @apply bg-gradient-to-t from-green-900 to-green-300;
  border-radius: 85% 50% 0 0;
}

.desktop-content {
  position: relative;
}


.desktop-item-container {
  position: relative;
  max-width: 300px;
  flex: 1 0 300px;
  max-height: 80vh;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}


</style>
