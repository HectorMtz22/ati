<template>
	<div>
    <Banner v-bind:text="text" img="banner-5"/>
		<Content :img="img" :paragraph="paragraph" />
		<ResourceComponent :pdf="pdf" :resources="resources" />
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import ResourceComponent from '@/components/ResourceComponent'
import { resources, pdf } from '@/data/resources.json'

export default {
	name: "Resources",
	data() {
		return {			
			text: "Recursos",
			resources,
			pdf
		}
	},
	components: {
		Banner,
		Content,
		ResourceComponent
	}
}
</script>

