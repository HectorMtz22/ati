<template>
  <main class="banner" v-bind:class="img">
		<section class="content">
			<h1>{{ text }}</h1>
		</section>
  </main>
</template>

<script>
export default {
  name: "Banner",
	
	props: {
		text: String,
		img: String
	}
};
</script>

<style scoped lang="scss">
.banner {
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00002299;
		background-size: cover;
		background-blend-mode: multiply;
		background-attachment: fixed;
		z-index: -1;
  }
	.content {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
}
h1 {
	font-size: 2em;
	animation: h1-title 5s ease infinite;
}

@keyframes h1-title {
0%, 100% {
	transform: scale(1.2);
}
50% {
	transform: scale(1);
}
}

$columns: 5;

@for $i from 1 through $columns {
	.banner-#{$i}::before {
		background-image: url("../assets/banner/banner-#{$i}.jpg");
	}
}

.banner-data::before {
	background-image: url("../assets/banner/banner-data.jpg");
}

@media screen and (max-width: 540px) {
	h1 {
		font-size: 1.1em;
	}
	.banner, .banner .content {
		height: 50vh;
	}
}
</style>
