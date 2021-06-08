<script>
    import { savePrediction } from "../../../../firebase/predictions";
    import Button from "../../../tags/Button.svelte";

    export let userId;
    export let match;
    export let prediction;
    export let action;

    const button = {
        label: "Guardar mi prediccion",
        bgColor: "blue darken-3",
        onClick: () => {
            if (!prediction.goalsH) prediction.goalsH = 0;
            if (!prediction.goalsA) prediction.goalsA = 0;
            savePrediction(userId, match.id, {
                ...prediction,
                home: match.home,
                away: match.away,
            }).then(() => {
                action(prediction);
            });
        },
    };
</script>

<Button {...button} />
