<template>
  <div class="sun bg-yellow-300" />
</template>

<script>
export default {
  name: 'DesktopSun'
};
</script>

<style scoped>
.sun {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 20px;
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease;
}

.sun:hover {
  background: url('https://scontent-ord5-2.xx.fbcdn.net/v/t1.15752-9/325215030_1156866658151758_8580206278895722959_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rEe0d92FbnwAX_ECLeW&_nc_ht=scontent-ord5-2.xx&oh=03_AdTtaGKqN2HpxE8L04fEzYYS61SjF-UgAVn4ZfMiF303FQ&oe=63EAB0E8');
  background-size: contain;
  width: 250px;
  height: 250px;
}
</style>