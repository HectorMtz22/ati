<template>
  <div class="home">
    <Banner v-bind:text="text" img="banner-1"/>
		<main class="grid">
			<section v-for="(p, index) in paragraph" v-bind:key="index" >
				<h3>{{p.title}}</h3>
				<div v-for="(content, index) in p.content" v-bind:key="index">
					<p>{{content}}</p>
				</div>
			</section>
			<YoutubePlayer class="video" :videoId="videoId"/>
		</main>
		<main class="prezi">
			<h3>Presentación explicativa</h3>
			<iframe width="100%" height="600" src="https://prezi.com/view/iU3hNsYUbXoKaQ700RZi/embed" webkitallowfullscreen="1" mozallowfullscreen="1" allowfullscreen="1"></iframe>
		</main>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import YoutubePlayer from '@/components/YoutubePlayer.vue'
import { paragraph, img } from '@/data/home.json'

export default {
  name: "Home",
	data() {
		return {
			paragraph,
			img,
			text: "Desempleo en los Jóvenes",
			videoId: "vgSlmXXtNNM?start=10"
		}
	},
  components: {
		Banner,
		YoutubePlayer
  }
};
</script>

<style lang="scss" scoped>
$width: 80%;
.prezi {
	width: $width;
	margin: 20px auto;
}
.grid {
	width: $width;
	margin: 20px auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	section {
		grid-column: 1 / 2;
		/* grid-row: 1/-1; */
		text-align: justify;
	}
	.video {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
}

@media screen and (max-width: 540px) {
	$width: 90%;
	.prezi {
		width: $width;
	}
	.grid {
		width: $width;
		grid-template-columns: 1fr;
		.video {
			grid-column: 1 / -1;
		}
	}
	
}

</style>
