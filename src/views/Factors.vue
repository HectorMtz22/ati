<template>
	<div>
    <Banner v-bind:text="text" img="banner-3"/>
	</div>
</template>

<script>
import Banner from '@/components/Banner';
export default {
	name: "Factors",
	data() {
		return {
			text: "Factores"
		}
	},
	components: {
		Banner
	}
}
</script>
