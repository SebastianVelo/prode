<script>
  import InputField from "./InputField.svelte";
  
  const materializeLayout = "col s10 offset-s1 l6 offset-l3";
  const userInput = {
    icon: "account_circle",
    type: "text",
    id: "user",
    label: "Usuario"
  };
  const passwordInput = {
    icon: "password",
    type: "password",
    id: "password",
    label: "Contraseña"
  };
</script>

<div class="row container">
    <form class={materializeLayout}>
      <div class="row">
        <InputField {...userInput} />
        <InputField {...passwordInput} />
      </div>
    </form>
  </div>