<template>
	<main>
		<main class="grid">
			<section>
				<h4>Descargables</h4>
				<aside class="files" v-for="(r) in resources" v-bind:key="r.title" >
					<section :class="r.type">
						<a :href="r.path" target="_blank">
							<font-awesome-icon :icon="r.icon" />
							<span>{{ r.title }}</span>
						</a>
					</section>
				</aside>
				<h4>Links</h4>
				<aside class="files" v-for="(l) in links" v-bind:key="l.title" >
					<section>
						<a :href="l" target="_blank">
							<font-awesome-icon :icon="l.icon" />
							<span>{{ l }}</span>
						</a>
					</section>
				</aside>

			</section>
			<div>
				<NavBar />
			</div>
		</main>
		<main class="opened-resources">
		<section v-for="(r, index) in resources" v-bind:key="index">
			<iframe :src='"https://view.officeapps.live.com/op/embed.aspx?src=" + path + r.path' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
		<section v-for="(p, index) in pdf" v-bind:key="index">
			<iframe :src='p' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
	</main>

	</main>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
	name: "ResourceComponent",
	props: {
		resources: Array,
		pdf: Array,
		links: Array
	},
	components: {
		NavBar
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
.files {
	border-radius: 10px;
	padding: 10px;
	margin: 10px auto;
	background: #000;
	color: #fff;
	span {
		padding-left: 5px;
	}
}
</style>
