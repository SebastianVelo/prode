<script>
    export let icon; 
    export let id;
    export let type;
    export let label;
</script>

<div class="input-field col s12">
    <i class="material-icons prefix">{icon}</i>
    <input {id} {type} class="validate" />
    <label for={id}>{label}</label>
</div>
