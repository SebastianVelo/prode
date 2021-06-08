<script>
    import { db } from "../../../../firebase/firebase";
    import Date from "../date/Date.svelte";
    export let group;

    const path = `groups/${group.id}/dates`;
    let dates = [];
    db.collection(path).onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((date) => {
            docs.push({
                ...date.data(),
                id: date.id,
            });
        });
        dates = [...docs];
    });
</script>

<div class="col s12 row">
    <hr />
    <h2>{group.name}</h2>
    {#each dates as date}
        <Date {date} {path} />
    {/each}
</div>
