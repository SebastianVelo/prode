<script>
    import { useNavigate } from "svelte-navigator";
    import { db } from "../../../firebase/firebase";
    import Title from "../../tags/Title.svelte";
    import Fixture from "../fixture/Fixture.svelte";

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
</script>

<div>
    <Title title="Predicciones" />
    <div class="container body">
        <p class="flow-text">
            ¡Hola {user.displayName}!
        </p>
        <ul class="flow-text">
            <li>
                Tenes tiempo hasta 1 hora antes del partido para guardar tus
                predicciones.
            </li>
            <li>
                No podes editar la prediccion una vez enviada.
            </li>
            <li>+4 puntos por resultado exacto</li>
            <li>+1 punto por acertar quien gana</li>
            <li>+10 puntos por adivinar el campeón</li>
        </ul>
    </div>
    <Fixture />
</div>

<style>
    .body {
        text-align: left;
    }

    p {
        text-decoration: wavy black;
    }
</style>