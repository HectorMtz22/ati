<template>
	<div>
    <Banner v-bind:text="text" img="banner-2"/>
		<Content :paragraph="paragraph" />
	</div>
</template>

<script>
import Banner from '@/components/Banner';
import Content from '@/components/Content';
import { paragraph, img } from '@/data/definitions.json';
export default {
	name: "Definitions",
	data() {
		return {
			text: "¿Qué es el desempleo?",
			paragraph
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
