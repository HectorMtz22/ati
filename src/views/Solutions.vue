<template>
	<div>
    <Banner v-bind:text="text" img="banner-4"/>
		<div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe frameborder="0" width="1200" height="675" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/5fb9480ccf7e970d06527ee3" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>
	</div>
</template>

<script>
import Banner from '@/components/Banner';
export default {
	name: "Solutions",
	data() {
		return {
			text: "Soluciones"
		}
	},
	components: {
		Banner
	}
}
</script>
