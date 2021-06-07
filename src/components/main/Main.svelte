<script>
    import { Route } from "svelte-navigator";
    import Login from "./login/Login.svelte";
    import Home from "./home/Home.svelte";

    const routes = [
        { path: "/login", component: Login },
        { path: "/home", component: Home },
    ];
</script>

<main>
    {#each routes as route}
        <Route {...route} />
    {/each}
</main>

<style>
    main {
        min-height: 85vh;
        text-align: center;
    }
</style>
