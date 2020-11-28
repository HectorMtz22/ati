<template>
	<div>
    <Banner v-bind:text="text" img="banner-5"/>
		<ResourceComponent :links="links" :pdf="pdf" :resources="resources" />
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import ResourceComponent from '@/components/ResourceComponent'
import { resources, pdf, links } from '@/data/resources.json'

export default {
	name: "Resources",
	data() {
		return {			
			text: "Recursos",
			resources,
			pdf,
			links
		}
	},
	components: {
		Banner,
		ResourceComponent
	}
}
</script>

