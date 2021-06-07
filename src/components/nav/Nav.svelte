<script>
	import { useNavigate } from "svelte-navigator";
	import Button from "../tags/Button.svelte";
	$: user = JSON.parse(localStorage.getItem("user"));

	let navigate = useNavigate();
	const button = {
		label: "Cerrar sesión",
		size: "S",
		onClick: () => {
			localStorage.removeItem("user");
			user = null;
			navigate("/login");
		},
	};
</script>

<nav>
	<div class="nav-wrapper">
		<a class="brand-logo">CProde</a>
		{#if user}
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li><a href="sass.html">Inicio</a></li>
				<li><a href="badges.html">Tabla de posiciones</a></li>
				<li><Button {...button} /></li>
			</ul>
		{/if}
	</div>
</nav>

<style>
	a {
		margin-left: 8px;
	}

	nav {
		padding-right: 4px;
	}
</style>
