<script>
    import Date from "../date/Date.svelte";
    export let group;
</script>

<div class="col s12 l6 row">
    <h2>{group.name}</h2>
    {#each group.dates as date}
        <Date date={date} />
    {/each}
</div>