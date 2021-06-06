<script>
    import Date from "../date/Date.svelte";
    export let group;
</script>

<div class="col s12 row">
    <h2>{group.name}</h2>
    <hr/>
    {#each group.dates as date}
        <Date date={date} />
    {/each}
</div>