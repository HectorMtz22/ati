<template>
	<div>
    <Banner v-bind:text="text" img="banner-5"/>
		<ResourceComponent :biblio="biblio" :links="links" :pdf="pdf" :resources="resources" />
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import ResourceComponent from '@/components/ResourceComponent'
import { resources, pdf, links, biblio } from '@/data/resources.json'

export default {
	name: "Resources",
	data() {
		return {			
			text: "Recursos",
			resources,
			pdf,
			links,
			biblio
		}
	},
	components: {
		Banner,
		ResourceComponent
	}
}
</script>

