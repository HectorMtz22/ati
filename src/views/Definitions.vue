<template>
	<div>
    <Banner v-bind:text="text" img="banner-2"/>
	</div>
</template>

<script>
import Banner from '@/components/Banner';
export default {
	name: "Definitions",
	data() {
		return {
			text: "¿Qué es el desempleo?"
		}
	},
	components: {
		Banner
	}
}
</script>
