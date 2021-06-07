<script>
    import { fly } from "svelte/transition";
    import { db } from "../../../../firebase/firebase";
    import Flag from "./Flag.svelte";
    import ButtonSavePrediction from "./ButtonSavePrediction.svelte";

    export let columns = "";
    export let match;
    const user = JSON.parse(localStorage.getItem("user"));

    let predictionDB;
    db.collection(`users`)
        .doc(user.uid)
        .collection(`predictions`)
        .doc(match.id)
        .get()
        .then((doc) => {
            predictionDB = doc.data();
        });

    const layout = {
        header: {
            className: "header black white-text col s12",
        },
        main: {
            className: "main col s12 row",
            flag: "col s3",
            goals: {
                className: "goals col s6 row",
                input: "col s4 offset-s1",
            },
        },
    };

    let prediction = {
        home: match.home.id,
        away: match.away.id,
        goalsH: 0,
        goalsA: 0,
    };
    console.log(predictionDB);
    console.log(prediction);
</script>

<div class={`${columns} row`} transition:fly={{ x: -20000, duration: 500 }}>
    <div class={layout.header.className}>
    </div>
    <div class={layout.main.className}>
        <Flag className={layout.main.flag} country={match.home} />
        <div class={layout.main.goals.className}>
            {#if !predictionDB}
                <input
                    bind:value={prediction.goalsH}
                    type="number"
                    class={layout.main.goals.input}
                    min={0}
                />
                <input
                    bind:value={prediction.goalsA}
                    type="number"
                    class={layout.main.goals.input}
                    min={0}
                />
            {:else}
                <p class="flow-text">
                    {predictionDB.goalsH} - {predictionDB.goalsA}
                </p>
            {/if}
        </div>
        <Flag className={layout.main.flag} country={match.away} />
    </div>
    {#if !predictionDB}
        <ButtonSavePrediction
            userId={user.uid}
            matchId={match.id}
            {prediction}
            action={(prediction) => predictionDB = prediction }
        />
    {/if}
</div>

<style>
    .main {
        padding: 16px;
        border: 1px solid black;
        background-color: white;
    }
    .header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    input {
        text-align: center;
    }
</style>
