<script>
	import { useNavigate } from "svelte-navigator";
	import Button from "../tags/Button.svelte";
	const user = JSON.parse(localStorage.getItem("user"));

	let navigate = useNavigate();
	const button = {
		label: "Cerrar sesión",
		bgColor: "red",
		onClick: () => {
			localStorage.removeItem("user");
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
				<Button {...button} />
			</ul>
		{/if}
	</div>
</nav>

<style>
	a {
		margin-left: 8px;
	}
</style>
