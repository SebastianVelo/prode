<script>
    export let label;
    export let bgColor = "";
    export let size;
    export let onClick;

    const sizes = {
        "L": "-large",
        "S": "-small"
    };

    const sizeClass = sizes[size] ?? '';
    const className = `${bgColor} btn${sizeClass}`;
</script>

<button class={className} on:click={onClick}>
    {label}
</button>