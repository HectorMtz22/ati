<template>
	<div>
    <Banner v-bind:text="text" img="banner-3"/>
		<Content :videoId="videoId" :img="img" :paragraph="paragraph" />
	</div>
</template>

<script>
import Banner from '@/components/Banner';
import Content from '@/components/Content';
import { paragraph, img, videoId } from '@/data/factors.json';
export default {
	name: "Factors",
	data() {
		return {
			paragraph,
			img,
			text: "Factores",
			videoId
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
