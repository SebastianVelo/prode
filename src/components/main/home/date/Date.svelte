<script>
    import { db } from "../../../../firebase/firebase";
    import Match from "../match/Match.svelte";
    export let date;
    export let path;

    let teams = JSON.parse(localStorage.getItem("teams"));
    let matches = [];
    db.collection(`${path}/${date.id}/matches`).onSnapshot(
        (querySnapshot) => {
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
        }
    );
    
    function deleteMatch(id) {
        matches = matches.filter((match) => match.id !== id);
    }
</script>

<div class="date col s12 l4 row">
    <h4>{date.name}</h4>
    {#if matches.length === 0}
        <h5>Ya cargaste todos los partidos de esta fecha.</h5>
    {/if}
    {#each matches as match}
        <Match {match} columns="col s12" {deleteMatch} />
    {/each}
</div>
