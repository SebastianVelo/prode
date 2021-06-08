<script>
    import { fly } from "svelte/transition";
    import { db } from "../../../firebase/firebase";

    let users = [];
    db.collection("users").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((user) => {
            docs.push({ id: user.id, ...user.data() });
        });
        users = [...docs];
    });
</script>

<ul class="collection with-header container">
    <li class="collection-header">
        <h4>Tabla de posiciones</h4>
    </li>
    {#each users as user, i}
        <li class="collection-item" transition:fly={{ y: -4000, duration: 300 }}>
            <div>
                #{i + 1}
                {user.name} <b>{user.pts}pts</b>
                <a href="#!" class="secondary-content">
                    <i class="material-icons">send</i>
                </a>
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        margin-top: 0;
    }
</style>