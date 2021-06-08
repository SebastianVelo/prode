<script>
    import { useNavigate } from "svelte-navigator";
    import { auth, googleProvider } from "../../../../firebase/firebase";
    import { getUser, saveUser } from "../../../../firebase/users";
    import Button from "../../../tags/Button.svelte";
    
    const navigate = useNavigate();
    const login = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                if(!getUser(result.user.uid))
                    saveUser(result.user);
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate("/home"); 
            })
            .catch((e) => {
                alert("Ocurrio un error, intentalo mas tarde.");
            });
    };

    const cfg = {
        label: "Iniciar sesion con Google",
        size: "L",
        onClick: login,
        bgColor: "blue darken-2",
    };
</script>

<Button {...cfg} />
