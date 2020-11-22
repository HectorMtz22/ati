<template>
  <div id="app">
    <Header />
    <Footer />
		<div id="nav">
		  <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
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
    Banner,
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
  --c3-transparent: #67d62bcc;
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
html {
	margin-bottom: 50px;
}
::-webkit-scrollbar {
	width: 8px;
	background-color: #eee;
}
::-webkit-scrollbar-thumb {
	background-image: linear-gradient(to top, var(--c2), var(--c3));
}
::-webkit-scrollbar-button {
	background-color: var(--c3);
}
</style>
