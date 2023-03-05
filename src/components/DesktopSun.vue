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
  background: url('https://lh3.googleusercontent.com/srd7ZRNILgjNJyu-E8BPdYEbCK4eWeL3_xtgE7lPQYdScBjlL8h11Mb8qtq2DSGncJUlgglS7Fuua0C8kAtSbYE__GAgikFI4ueUArj8KN0ILZv-jL34obWTV_B082WCEsiPf1Mq7v3X1A_ybgtNIL8D_R0wE8rVL72L7QgbYJvKNh4k14liy4qpbz13WbrWdf6eofublU69ZZI5725qJWQHUIWWvq24-b4eNyw1HhUP_NCxGIH6B86qWmJK9bpbSqnY-9RDVUQSX4Ir1Z0CcS9ZDrtuoQ3wfvXjiN8Vgaor4hWqcCIHit7b9tsMJaACtTS2c9CwSQy69Fpbu4aQD8zPlRaEu_faPhz-ywwv2jQ97vfminwzVHIIm5XtmjBxBgYv7jBSsu4QeS3XBjQO897PNBLp863w18_6kwkAgGiNRcM3XZaFKmqtpNoZd0JfEpXXELQcI_GwvJyb-6GMoLz7zdzuV68p6BTBuK7y1z3BryMLru5irfZ0km286ToozVkOxam88WrdNd3DzJVg7pNNGPqm9_xr8-5GfRipjaiA4N0taeF-mPg3nIPC2AgJlk1RX3YsFdGDGFCn5jLMiR5ivpGTwApGlFR4JMEeCgVlh2cdgK4FGekQO50il4WyM5Da7ZbqCaI9MnyjfqSV1XfqY4gy0U1xf6ugMU9HUBmBLYsy1z8lI_rINXi6vuRfzB0gHkxAo2_oP3SUCIdKCOP4GlvAEVK05tYxpfOi60YxBRiC2nT11tVfJqhRObuKBs3QekiwZqmbwicaD58ojmzzdgOJZfYylI-PPXrZ90ClYIiIOoLG5h-81upswPGOmdyw9YjuMYe9_i3BvoMstQ7Y1g2QLFk_W9iOXHWxtUgqHkksmTEAUOG6-X-ob7IIyQkr7vUeU4cfqAk0KKqiZ6dzrH8NEPYbE5TrV8oC2Oaf_pm8u7kdAxsfHvUMPQyGE7WR-6qU_pIAAxgiNVcq2A=w1464-h1952-no?authuser=0');
  background-size: contain;
  width: 250px;
  height: 250px;
}
</style>
