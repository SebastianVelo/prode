<script>
    import Match from "../match/Match.svelte";
    export let date;

    function deleteMatch(id) {
        console.log(id);
        date.matches = date.matches.filter(match => match.id !== id);
    }
</script>

<div class="col s12 l6 row">
    <h4>{date.name}</h4>
    {#if date.matches.length === 0}
        <h5>Ya cargaste todos los partidos de esta fecha.</h5>
    {/if}
    {#each date.matches as match}
        <Match {match} columns="col s12 l6" {deleteMatch} />
    {/each}
</div>

<style>
    div {
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        margin: 0;
    }
</style>
