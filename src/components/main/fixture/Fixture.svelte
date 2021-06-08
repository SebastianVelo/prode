<script>
    import { db } from "../../../firebase/firebase";
    import Group from "./group/Group.svelte";
    import Loading from "../../tags/Loading.svelte";

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

{#if groups.length === 0}
    <Loading />
{/if}
<div class="row">
    {#each groups as group}
        <Group {group} />
    {/each}
</div>
