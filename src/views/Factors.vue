<template>
	<div>
    <Banner v-bind:text="text" img="banner-3"/>
		<Content :videoId="videoId" :img="img" :paragraph="paragraph" />
		<main class="opened-resources">
			<h4>Efectos del Desempleo</h4>
			<section v-for="(p, index) in pdf" v-bind:key="index">
				<iframe :src='urlPath + p.path' width='100%' height='565px' frameborder='0'> </iframe>
			</section>
		</main>
	</div>
</template>

<script>
import Banner from '@/components/Banner';
import Content from '@/components/Content';
import publicPath from '@/isProduction.js';
import { paragraph, img, videoId, pdf } from '@/data/factors.json';

const urlPath = publicPath();

export default {
	name: "Factors",
	data() {
		return {
			paragraph,
			img,
			text: "Factores",
			videoId,
			pdf,
			urlPath
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
