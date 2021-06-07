<script>
	import { Router } from "svelte-navigator";
	import Nav from "./components/nav/Nav.svelte";
	import Main from "./components/main/Main.svelte";
	import Footer from "./components/footer/Footer.svelte";
</script>

<Router>
	<Nav />
	<Main />
	<Footer />
</Router>
