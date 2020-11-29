<template>
	<main class="grid">
		<section class="paragraphs" v-for="(p, index) in paragraph" v-bind:key="index" >
			<h3>{{p.title}}</h3>
			<div v-for="(content, index) in p.content" v-bind:key="index">
				<p>{{content}}</p>
			</div>
		</section>
		<section v-for="(i, index) in img" v-bind:key="index" >
			<img :src="publicPath + i" alt="Imagen" loading="lazy">
		</section>
	<div>
		<YoutubePlayer class="video" :videoId="videoId"/>
			<NavBar />
		</div>
	</main>
</template>

<script>
import YoutubePlayer from '@/components/YoutubePlayer.vue';
import NavBar from '@/components/NavBar.vue';
import publicPath from '@/isProduction.js';
export default {
	name: "Content",
	data() {
		return {
			publicPath
		}
	},
	components: {
		YoutubePlayer,
		NavBar
	},
	props: {
		paragraph: Array,
		img: Array,
		videoId: String
	}
}
</script>

<style lang="scss">
.grid {
	width: $widthContent;
	margin: 20px auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	.paragraphs {
		grid-column: 1 / 2;
		/* grid-row: 1/-1; */
		text-align: justify;
		p {
			margin: 10px 0px;
		}
	}
	div {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	img {
		height: 300px;
		object-fit: cover;
		transition: $transition;
		&:hover {
			filter: blur(2px);
		}
	}
}


@media screen and (max-width: 540px) {
	.grid {
		width: $widthContent;
		grid-template-columns: 1fr;
		.video {
			grid-column: 1 / -1;
		}
	}
}
</style>
