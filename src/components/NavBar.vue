<template>
	<main class="navBar">
		<h4>Menú de navegación</h4>
		<section>
			<router-link to="/">
				<span>
					ir a inicio
				</span>
			</router-link>
		</section>
		<section>
			<router-link to="/definicion">
				<span>
					¿Qué es el desempleo?	
				</span>
			</router-link>
		</section>
		<section>
			<router-link to="/factores">
				<span>
					Factores	
				</span>
			</router-link>
		</section>
		<section>
			<router-link to="/soluciones">
				<span>
					Soluciones
				</span>
			</router-link>
		</section>
	</main>
</template>


<style lang="scss">
%pseudoElements {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 7px;
}
.navBar {
	position: sticky;
	top: 50px;
	left: 0;
	right: 0;
	margin: 10px 2px;
	section {
		border-radius: 7px;
		color: #fff;
		margin: 5px 0px;
		position: relative;
		overflow: hidden;
		&::before {
			@extend %pseudoElements;
			background: var(--c1);
			z-index: -2;
		}
		&::after {
			@extend %pseudoElements;
			position: absolute;
			top: 0;
			bottom: 0;		
			left: -100%;
			right: 100%;background: var(--c3);
			z-index: -1;
			transition: $transition;
		}
		&:hover {
			&::after {
				transform: translateX(100%);
			}
		}
		a {
			display: block;
			padding: 10px;
		}	
	}
}
</style>
