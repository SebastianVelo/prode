<script>
    import Flag from "./Flag.svelte";

    export let columns = "";
    export let match;

    const layout = {
        header: {
            className: "header black white-text col s12",
        },
        main: {
            className: "main col s12 row",
            flag: "col s4",
            goals: {
                className: "goals col s4 row",
                input: "col s4 offset-s1",
            },
        },
    };

    let prediction = {
        home: 0,
        away: 0,
        user: "Nit1iqwiVmOjqYqV1SZtT4Q01I92",
        match: match.ids
    }
</script>

<div class={`match ${columns} row`}>
    <div class={layout.header.className}>
        <p>{match.datePlay}</p>
    </div>
    Tu prediccion es {prediction.home} a {prediction.away}
    <div class={layout.main.className}>
        <Flag className={layout.main.flag} country={match.home} />
        <div class={layout.main.goals.className}>
            <input bind:value={prediction.home} type="number" class={layout.main.goals.input} min={0} />
            <input bind:value={prediction.away} type="number" class={layout.main.goals.input} min={0} />
        </div>
        <Flag className={layout.main.flag} country={match.away} />
    </div>
</div>

<style>
    .main {
        padding: 16px;
    }
    .header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
</style>
