<template>
  <main class="banner">
    <img src="../assets/banner/banner-1.jpg" alt="" srcset="" />
  </main>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped lang="scss">
.banner {
  height: 100vh;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00002299;
  }
}
</style>
