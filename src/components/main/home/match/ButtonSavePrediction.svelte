<script>
    import { savePrediction } from "../../../../firebase/predictions";
    import Button from "../../../tags/Button.svelte";

    export let userId;
    export let matchId;
    export let prediction;
    export let action;

    const button = {
        label: "Guardar mi prediccion",
        bgColor: "green",
        onClick: () => savePrediction(userId, matchId, prediction).then(() => { 
            action(prediction);
            console.log("Prediccion guardada con exito.")
        }),
    };
</script>

<Button {...button} />
