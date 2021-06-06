<script>
    import Flag from "./Flag.svelte";
    import Button from "../../../tags/Button.svelte";
    import { db } from "../../../../firebase/firebase";

    export let columns = "";
    export let match;

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
        button: {
            label: "Guardar mi prediccion",
            size: "L",
            bgColor: "green",
            onClick: savePrediction,
        },
    };

    let prediction = {
        home: 0,
        away: 0,
        user: "Nit1iqwiVmOjqYqV1SZtT4Q01I92",
        match: match.id,
    };

    function savePrediction() {
        db.collection("predictions")
            .doc()
            .set({ ...prediction, dateSave: Date.now() })
            .then(() =>  console.log("Prediccion guardada!") )
            .catch(() => console.log("Ocurrio un error"));
    }
</script>

<div class={`match ${columns} row`}>
    <div class={layout.header.className}>
        <p>{match.datePlay}</p>
    </div>
    <div class={layout.main.className}>
        <Flag className={layout.main.flag} country={match.home} />
        <div class={layout.main.goals.className}>
            <input
                bind:value={prediction.home}
                type="number"
                class={layout.main.goals.input}
                min={0}
            />
            <input
                bind:value={prediction.away}
                type="number"
                class={layout.main.goals.input}
                min={0}
            />
        </div>
        <Flag className={layout.main.flag} country={match.away} />
    </div>
    <Button {...layout.button} />
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
    input {
        text-align: center;
    }
</style>
