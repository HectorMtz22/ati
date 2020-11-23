<template>
	<div>
    <Banner v-bind:text="text" img="banner-3"/>
		<Content :paragraph="paragraph" />
	</div>
</template>

<script>
import Banner from '@/components/Banner';
import Content from '@/components/Content';
import { paragraph, img } from '@/data/factors.json';
export default {
	name: "Factors",
	data() {
		return {
			paragraph,
			text: "Factores",
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
