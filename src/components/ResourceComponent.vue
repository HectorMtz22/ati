<template>
	<main>
		<main class="grid">
			<section>
				<h4>Descargables</h4>
				<aside class="navBar files" v-for="(r) in resources" v-bind:key="r.title" >
					<section :class="r.type" >
						<a :class="r.type" :href="publicPath + r.path" target="_blank">
							<font-awesome-icon :icon="r.icon" />
							<span>{{ r.title }} ({{r.type}})</span>
						</a>
					</section>
				</aside>
				<aside class="navBar files" v-for="(p) in pdf" v-bind:key="p.title" >
					<section :class="p.type">
						<a :href="publicPath + p.path" target="_blank">
							<font-awesome-icon :icon="p.icon" />
							<span>{{ p.title }} ({{p.type}})</span>
						</a>
					</section>
				</aside>
				<h4>Recursos Utilizados</h4>
				<aside class="navBar files" v-for="(l) in links" v-bind:key="l.title" >
					<section :class="l.type" >
						<a :href="l.path" target="_blank">
							<font-awesome-icon :icon="l.icon" />
							<span>{{ l.title }} ({{ l.type }})</span>
						</a>
					</section>
				</aside>
				<h4>Bibliografía</h4>
				<aside class="navBar files" v-for="(b) in biblio" v-bind:key="b.title" >
					<section>
						<a :href="b.path" target="_blank">
							<!-- <font-awesome-icon :icon="l.icon" /> -->
							<span>{{ b.title }}</span>
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
			<iframe loading="lazy" :src='"https://view.officeapps.live.com/op/embed.aspx?src=" + path + r.path' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
		<section v-for="(p, index) in pdf" v-bind:key="index">
			<iframe :src='urlPath p.path' width='100%' height='565px' frameborder='0'> </iframe>
		</section>
	</main>

	</main>
</template>

<script>
import NavBar from '@/components/NavBar';
import publicPath from '@/isProduction.js';
const urlPath = publicPath();

export default {
	name: "ResourceComponent",
	data() {
		return {
			urlPath
		}
	},
	props: {
		resources: Array,
		pdf: Array,
		links: Array,
		biblio: Array
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
	position: relative;
	top: 0;
	--word: #005DA6;
	--excel: #1D6F42;
	--powerpoint: #D04423;
	--pdf: #ED2224;
	--video: #ff0000;
	--preziresource: #318bff;
	--powerbi: #f2c80f;
	.word { background: var(--word); }
	.excel { background: var(--excel); }
	.powerpoint { background: var(--powerpoint); }
	.pdf { background: var(--pdf); }
	.video { background: var(--video); };
	.preziresource { background: var(--preziresource); };
	.powerbi { background: var(--powerbi); };
	border-radius: 10px;
	background: #000;
	color: #fff;
	span {
		padding-left: 5px;
	}
	section	a:hover{
			transform: scale(1.1);
			filter: brightness(0.8);
	}
}

</style>
