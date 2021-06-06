<script>
  import { useNavigate } from "svelte-navigator";
  import { auth, db, googleProvider } from "../../../firebase/firebase";
  import Form from "./form/Form.svelte";
  import Button from "../../tags/Button.svelte";

  const navigate = useNavigate();
  const buttonLogin = {
    label: "Iniciar sesion",
    size: "S",
  };
  const buttonLoginGoogle = {
    label: "Iniciar sesion con Google",
    size: "L",
    onClick: login,
    bgColor: "blue",
  };

  function saveUser(user) {
    const u = {
      name: user.displayName,
      uuid: user.uid,
    };
    db.collection("users").doc(u.uuid).set(u);
  }

  function login() {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        saveUser(result.user);
        navigate("/home"); // pasar el user a Home / guardarlo en sesion
      })
      .catch(() => {
        alert("Ocurrio un error, intentalo mas tarde.");
      });
  }

</script>

<div>
  <Button {...buttonLoginGoogle} />
  <h4>o...</h4>
  <Form />
  <Button {...buttonLogin} />
</div>

<style>
  div {
    padding: 32px;
  }
</style>
