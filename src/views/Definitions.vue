<template>
	<div>
    <Banner v-bind:text="text" img="banner-2"/>
		<Content :img="img" :paragraph="paragraph" />
		<div class="datos">
		<iframe loading="lazy" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMWU3YzY4YmItMTg4Yi00YzFhLTgzNGYtNzIwMjMzMDEzM2I1IiwidCI6ImNhY2E5MDExLTdiNmEtNDRkZS04NjFmLTA5NWEyY2E4ODNiNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
		</div>
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
			paragraph,
			img
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
