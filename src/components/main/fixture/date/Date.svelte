<script>
    import { fly } from "svelte/transition";
    import { db } from "../../../../firebase/firebase";
    import Match from "../match/Match.svelte";
    export let date;
    export let path;

    let teams = JSON.parse(localStorage.getItem("teams"));
    let matches = [];
    db.collection(`${path}/${date.id}/matches`).onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((match) => {
            docs.push({
                ...match.data(),
                id: match.id,
                home: teams.find((team) => team.id === match.data().home),
                away: teams.find((team) => team.id === match.data().away),
            });
        });
        matches = [...docs];
    });
</script>

<div class="date col s12 l4 row"  transition:fly={{ x: 4000, duration: 1000 }}>
    <h4>{date.name}</h4>
    {#each matches as match}
        <Match {match} columns="col s12" />
    {/each}
</div>

<style>
    .date {
        border: 1px solid black;
    }
</style>