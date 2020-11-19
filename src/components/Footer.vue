<template>
  <footer>
    Equipo I
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background: var(--c1);
  box-sizing: 0px -1px 5px var(--c2);
  padding: $margin;
  z-index: 2;
}
</style>
