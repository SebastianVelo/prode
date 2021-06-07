<script>
    import { useNavigate } from "svelte-navigator";
    import { db } from "../../../firebase/firebase";
    import Title from "../../tags/Title.svelte";
    import Loading from "../../tags/Loading.svelte";
    import Group from "./group/Group.svelte";

    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        let navigate = useNavigate();
        navigate("/login");
    }

    if (!localStorage.getItem("teams")) {
        db.collection("teams").onSnapshot((querySnapshot) => {
            let teams = [];
            querySnapshot.forEach((t) => {
                teams.push({ id: t.id, ...t.data() });
            });
            localStorage.setItem("teams", JSON.stringify([...teams]));
        });
    }

    let groups = [];
    db.collection("groups").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((group) => {
            docs.push({
                ...group.data(),
                id: group.id,
            });
        });
        groups = [...docs];
    });
</script>

<div>
    <Title title="Predicciones" />
    <p class="flow-text">
        ¡Hola {user.displayName}! Tenes tiempo hasta 1 hora antes del partido para guardar tus
        predicciones.
    </p>
    <ul class="flow-text">
        <li>+3 puntos por resultado exacto</li>
        <li>+1 puntos por acertar quien gana</li>
    </ul>
    {#if groups.length === 0}
        <Loading />
    {/if}
    <div class="row">
        {#each groups as group}
            <Group {group} />
        {/each}
    </div>
</div>
