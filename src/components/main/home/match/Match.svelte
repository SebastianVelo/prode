<script>
	import { fly } from 'svelte/transition';
    import Flag from "./Flag.svelte";
    import ButtonSavePrediction from "./ButtonSavePrediction.svelte";

    export let columns = "";
    export let match;
    export let deleteMatch; 

    let visible = true;

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
        home: match.home,
        away: match.away,
        goalsH: 0,
        goalsA: 0,
        user: "Nit1iqwiVmOjqYqV1SZtT4Q01I92",
        match: match.id,
        dateSave: Date.now(),
    };

</script>

{#if visible}
<div class={`${columns} row`} transition:fly="{{ x: -20000, duration: 500 }}">
    <div class={layout.header.className}>
        <p>{match.datePlay}</p>
    </div>
    <div class={layout.main.className}>
        <Flag className={layout.main.flag} country={match.home} />
        <div class={layout.main.goals.className}>
            {#if match.goalsH === '-'}
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
                <p class="flow-text">{match.goalsH} - {match.goalsA}</p>
            {/if}
        </div>
        <Flag className={layout.main.flag} country={match.away} />
    </div>
    <ButtonSavePrediction {prediction} {deleteMatch} />
</div>
{/if}

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
