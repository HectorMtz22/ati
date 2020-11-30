<template>
	<div>
    <Banner v-bind:text="text" img="banner-2"/>
		<Content :img="img" :videoId="videoId" :paragraph="paragraph" />
		<div class="datos">
		<h4>Gráficas dinámicas</h4>
		<p>Sin embargo, la problemática y nuestro estudio esta centrado en los jóvenes y aquí si podemos encontrar un número que ha aumentado en los últimos años cada vez más.</p>
		<p>En la gráfica “Alumnos en Búsqueda de su Primer Empleo”, podemos ver que, en las últimas décadas, el número de estudiantes que buscan su primer trabajo y/o empleo se ha incrementado, 		especialmente en alumnos de Media Superior y Universidad, son los más afectados de esta problemática. Esto significa que cada vez existen menos oportunidades laborales para los jóvenes,
		dando como consecuencia el aumento de esta cifra. Menos empleos, más estudiantes en búsqueda de su primera oportunidad de laborar</p>
		<iframe loading="lazy" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMWU3YzY4YmItMTg4Yi00YzFhLTgzNGYtNzIwMjMzMDEzM2I1IiwidCI6ImNhY2E5MDExLTdiNmEtNDRkZS04NjFmLTA5NWEyY2E4ODNiNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
		</div>
	</div>
</template>

<script>
import Banner from '@/components/Banner';
import Content from '@/components/Content';
import { paragraph, img, videoId } from '@/data/definitions.json';
export default {
	name: "Definitions",
	data() {
		return {
			text: "¿Qué es el desempleo?",
			paragraph,
			img,
			videoId
		}
	},
	components: {
		Banner,
		Content
	}
}
</script>
