<template>
	<div>
		<youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
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

<style lang="scss" scoped>
div {
	width: 100%;
}
</style>
