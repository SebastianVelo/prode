<script>
    import { useNavigate } from "svelte-navigator";
    import { auth, googleProvider } from "../../../../firebase/firebase";
    import { saveUser } from "../../../../firebase/users";
    import Button from "../../../tags/Button.svelte";
    
    const navigate = useNavigate();
    const login = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                saveUser(result.user);
                navigate("/home"); // pasar el user a Home / guardarlo en sesion
            })
            .catch(() => {
                alert("Ocurrio un error, intentalo mas tarde.");
            });
    };

    const cfg = {
        label: "Iniciar sesion con Google",
        size: "L",
        onClick: login,
        bgColor: "blue",
    };
</script>

<Button {...cfg} />
