<template>
  <div id="app">
    <Header />
    <Banner />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
:root {
  --c1: #3699d6;
  --c2: #2090d6;
  --c3: #67d62b;
  --c3-transparent: #67d62b99;
  --c4: #d68a20;
  --c5: #b54eb5;
}
img {
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
