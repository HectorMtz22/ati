<template>
	<div class="containerYoutube">
		<youtube width="100%" height="100%" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
		<!-- <button @click="playVideo">play</button> -->
	</div>
</template>

<script>
export default {
	
	props: {
		videoId: String
	},
	methods: {
		playVideo() {
			this.player.playVideo()
		},
		playing() {
			console.log('\o/ we are watching!!!')
		}
  },
	computed: {
		player() {
			return this.$refs.youtube.player
		}
	}																									 		
}
</script>

<style lang="scss" >
.containerYoutube {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
 	iframe {
	position: absolute;
	top: 0;
	left: 0;
}
}
</style>
