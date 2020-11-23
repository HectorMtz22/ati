<template>
	<main class="grid">
		<section v-for="(p, index) in paragraph" v-bind:key="index" >
			<h3>{{p.title}}</h3>
			<div v-for="(content, index) in p.content" v-bind:key="index">
				<p>{{content}}</p>
			</div>
		</section>
		<YoutubePlayer class="video" :videoId="videoId"/>
	</main>
</template>

<script>
import YoutubePlayer from '@/components/YoutubePlayer.vue';
export default {
	name: "Content",
	components: {
		YoutubePlayer
	},
	props: {
		paragraph: Array,
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
	section {
		grid-column: 1 / 2;
		/* grid-row: 1/-1; */
		text-align: justify;
		p {
			margin: 10px 0px;
		}
	}
	.video {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
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
