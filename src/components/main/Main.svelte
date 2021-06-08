<script>
    import { Route } from "svelte-navigator";
    import Login from "./login/Login.svelte";
    import Home from "./home/Home.svelte";
    import Ranking from "./ranking/Ranking.svelte";
    import Predictions from "./predictions/Predictions.svelte";
    import NotFound from "./notFound/NotFound.svelte";

    const routes = [
        { path: "/", component: Login },
        { path: "/login", component: Login },
        { path: "/home", component: Home },
        { path: "/ranking", component: Ranking },
        { path: "/predictions", component: Predictions },
        { path: "/*", component: NotFound},
    ];
</script>

<main class="light-blue lighten-5">
    {#each routes as route}
        <Route {...route} />
    {/each}
</main>

<style>
    main {
        min-height: 85vh;
        text-align: center;
        margin: 0;
    }
</style>
