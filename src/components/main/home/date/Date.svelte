<script>
    import Match from "../match/Match.svelte";
    export let date;
</script>

<div class="col s12 l6 row">
    <h4>{date.name}</h4>
    {#each date.matches as match}
        <Match {match} columns="col s12 l6" />
    {/each}
</div>

<style>
    div {
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        margin: 0;
    }
</style>