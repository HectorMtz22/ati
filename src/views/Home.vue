<template>
  <div class="home">
    <Banner v-bind:text="text" img="banner-1"/>
		<YoutubePlayer :videoId="videoId"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import YoutubePlayer from '@/components/YoutubePlayer.vue'

export default {
  name: "Home",
	data() {
		return {
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
