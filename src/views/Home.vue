<template>
  <div class="home">
    <Banner v-bind:text="text" img="banner-1"/>
		<Content :img="img" :paragraph="paragraph" :videoId="videoId"/>
		<Prezi :preziId="preziId" />
    <Banner v-bind:text="textDatos" img="banner-data"/>
		<main class="datos">
		<h4>Gráficas dinámicas</h4>
		<p>Durante la investigación y recopilación de datos estadísticos de nuestra problemática, el desempleo, encontramos ciertos criterios que fueron analizados.</p>
		<p>En la primera gráfica denominada “Promedio de Población Ocupada por Periodo” podemos observar que, en la última y pasada década, el número de ciudadanos que tiene un empleo ha aumentado y en la gráfica “Promedio de Población Desocupada por Periodo”,</p>
		<p>el año 2009 fue cuando más ciudadanos no tenían empleo, esto por consecuencia de la conocida “Crisis Económica del 2008”. En los últimos años, el número de personas desocupadas se ha mantenido relativamente estable.</p>
		<iframe loading="lazy" width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZmMxYzliMGUtMjFiNC00MjYzLTk2OWEtZWU0NDQ4M2ViNWIzIiwidCI6ImNhY2E5MDExLTdiNmEtNDRkZS04NjFmLTA5NWEyY2E4ODNiNyIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
		<!-- <iframe loading="lazy" src='https://tradingeconomics.com/embed/?s=mxueunsa&v=202011232300v20200908&ref=/mexico/unemployment-rate' height='400' width='100%'  frameborder='0' scrolling='no'></iframe> 
		<br />source: <a href='https://tradingeconomics.com/mexico/unemployment-rate'>tradingeconomics.com</a>	-->
		</main>
		<main class="opened-resources">
		<section v-for="(r, index) in resources" v-bind:key="index">
			<iframe loading="lazy" :src='"https://view.officeapps.live.com/op/embed.aspx?src=" + path + r.path' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
	</main>

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Content from '@/components/Content.vue'
import Prezi from '@/components/Prezi.vue'
import YoutubePlayer from '@/components/YoutubePlayer.vue'
import { paragraph, img, preziId, videoId, resources } from '@/data/home.json'

export default {
  name: "Home",
	data() {
		return {
			paragraph,
			img,
			textDatos: "Gráficas y datos",
			text: "Desempleo en los Jóvenes",
			preziId,
			videoId,
			resources
		}
	},
  components: {
		Banner,
		Content,
		Prezi,
		YoutubePlayer
  },
	computed: {
		path: () => {
			if (process.env.NODE_ENV === "production")	{
				return "https://hmtzdev.tech/ati"
			} else {
				return "http://localhost:8080"	
			}
		}
	}
};
</script>

<style lang="scss">
.opened-resources {
	width: 80%;
	margin: 10px auto;
}
.datos {
	text-align: justify;
}
</style>
