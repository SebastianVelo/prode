<script>
    import { db } from "../../../firebase/firebase";
    import Match from "../fixture/match/Match.svelte";
    import Title from "../../tags/Title.svelte";
    import Loading from "../../tags/Loading.svelte";

    export let user = JSON.parse(localStorage.getItem("user"));

    let predictions = [];
    db.collection(`users/${user.uid}/predictions`).onSnapshot(
        (querySnapshot) => {
            let docs = [];
            querySnapshot.forEach((prediction) => {
                docs.push({
                    ...prediction.data(),
                    id: prediction.id,
                });
            });
            predictions = [...docs];
        }
    );
</script>

{#if predictions.length === 0}
    <Loading />
{/if}
<Title title={`Predicciones de ${user.name}`}/>
<div class="row">
    {#each predictions as prediction}
        <Match columns="col s4" copredictionDB={prediction} match={prediction} />
    {/each}
</div>
