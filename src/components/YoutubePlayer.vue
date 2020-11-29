<template>
	<div class="containerYoutube">
		<youtube width="100%" height="100%" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
		<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/yOuwFBdL0c0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
		<!-- <button @click="playVideo">play</button> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			playerVars: {
		  	autoplay: 1
			}		
		}
	},
	props: {
		videoId: String
	},
	methods: {
		playing() {
			console.log('\o/ we are watching!!!')
		}
  },																				 		
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
