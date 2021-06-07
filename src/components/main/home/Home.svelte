<script>
    import { getContext } from "svelte";
    import { db } from "../../../firebase/firebase";
    import Loading from "../../tags/Loading.svelte";
    import Group from "./group/Group.svelte";

    console.log(getContext("user"));
    let user = { id: "Nit1iqwiVmOjqYqV1SZtT4Q01I92" };

    let predictions = [];
    db.collection("predictions").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((p) => {
            if (p.data().user === user.id) docs.push({ id: p.id, ...p.data() });
        });
        predictions = [...docs];
    });

    let teams = [];
    db.collection("teams").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((t) => {
            docs.push({ id: t.id, ...t.data() });
        });
        teams = [...docs];
    });

    let matches = [];
    db.collection("matches").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((m) => {
            if (predictions.some((p) => p.match === m.id)) return;
            let match = {
                ...m.data(),
                id: m.id,
                home: teams.find((t) => t.id === m.data().home),
                away: teams.find((t) => t.id === m.data().away),
            };
            docs.push(match);
        });
        matches = [...docs];
    });

    let dates = [];
    db.collection("dates").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((d) => {
            let date = {
                ...d.data(),
                id: d.id,
                matches: matches.filter((m) => m.date === d.id),
            };
            docs.push(date);
        });
        dates = [...docs];
    });

    let groups = [];
    db.collection("group").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((g) => {
            let group = {
                ...g.data(),
                id: g.id,
                dates: dates.filter((d) => {
                    return d.group === g.id;
                }),
            };
            docs.push(group);
        });
        groups = [...docs];
    });

</script>

<div>
    <h2>Predicciones pendientes</h2>
    <p class="flow-text">
        Tenes tiempo hasta 1 hora antes del partido para guardar tus
        predicciones.
    </p>
    {#if groups.length === 0}
        <Loading />
    {/if}
    <div class="row">
        {#each groups as group}
            <Group {group} />
        {/each}
    </div>
</div>
