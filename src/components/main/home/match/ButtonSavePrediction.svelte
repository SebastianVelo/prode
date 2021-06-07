<script>
    import { savePrediction } from "../../../../firebase/predictions";
    import Button from "../../../tags/Button.svelte";

    export let prediction;
    export let deleteMatch;

    const button = {
        label: "Guardar mi prediccion",
        bgColor: "green",
        onClick: () => savePrediction(prediction).then(() => { 
            console.log("Prediccion guardada con exito.")
            deleteMatch(prediction.match);
        }),
    };
</script>

<Button {...button} />
