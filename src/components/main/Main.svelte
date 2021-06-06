<script>
	import { Router, Route } from "svelte-navigator";
    import Login from "./login/Login.svelte";
    import Home from "./home/Home.svelte";

    const routes = [
        { path: "/login", component: Login },
        { path: "/home", component: Home }
    ];
</script>

<main>
    <Router>
        {#each routes as route}
            <Route {...route} />
        {/each}
    </Router>
</main>

<style>
    main {
        min-height: 85vh;
        text-align: center;
    }
</style>
