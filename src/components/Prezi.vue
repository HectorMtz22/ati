<template>
	<main class="prezi">
		<h3>Presentación explicativa</h3>
		<iframe loading="lazy" width="100%" height="600" :src="url" webkitallowfullscreen="1" mozallowfullscreen="1" allowfullscreen="1"></iframe>
	</main>
</template>

<script>
export default {
	name: "Prezi",
	props: {
		preziId: String
	},
	computed: {
		url: function({preziId}) {
			return "https://prezi.com/view/" + preziId + "/embed" 
		}
	}
}
</script>

<style lang="scss">
.prezi {
	width: $widthContent;
	margin: 20px auto;
}
@media screen and (max-width: 540px) {
	.prezi {
		width: $widthContent;
	}
}
</style>
