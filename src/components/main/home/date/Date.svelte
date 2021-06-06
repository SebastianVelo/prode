<script>
    import Match from "../match/Match.svelte";
    export let date;
</script>

<details class="col s12 l6 row">
    <summary><h4>{date.name}</h4></summary>
    {#each date.matches as match}
        <Match {match} columns="col s12" />
    {/each}
</details>

<style>
    summary {
        border-radius: 20px;
        background-color: steelblue;
        color: white;
        margin-bottom: 16px;
        padding: 8px;
        transition: all .3s ease-in-out;
    }
    summary:hover {
        background-color: rgb(8, 112, 197);
        cursor: pointer;
    }
    summary::marker {
        font-size: 20px;
    }
</style>