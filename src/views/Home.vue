<template>
  <div class="home">
    <Banner v-bind:text="text" img="banner-1"/>
		<Content :paragraph="paragraph" :videoId="videoId"/>
		<Prezi :preziId="preziId" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Content from '@/components/Content.vue'
import Prezi from '@/components/Prezi.vue'
import YoutubePlayer from '@/components/YoutubePlayer.vue'
import { paragraph, img } from '@/data/home.json'

export default {
  name: "Home",
	data() {
		return {
			paragraph,
			img,
			text: "Desempleo en los Jóvenes",
			preziId: "iU3hNsYUbXoKaQ700RZi",
			videoId: "vgSlmXXtNNM?start=10"
		}
	},
  components: {
		Banner,
		Content,
		Prezi,
		YoutubePlayer
  }
};
</script>

<style lang="scss" scoped>


</style>
