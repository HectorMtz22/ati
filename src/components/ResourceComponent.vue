<template>
	<main class="opened-resources">
		<section v-for="(r, index) in resources" v-bind:key="index">
			<iframe :src='"https://view.officeapps.live.com/op/embed.aspx?src=" + path + r' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
		<section v-for="(p, index) in pdf" v-bind:key="index">
			<iframe :src='p' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
	</main>
</template>

<script>
export default {
	name: "ResourceComponent",
	props: {
		resources: Array,
		pdf: Array
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
}
</script>


<style lang="scss">
.opened-resources {
	width: 80%;
	margin: 10px auto;
}
</style>
