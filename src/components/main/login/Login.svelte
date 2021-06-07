<script>
  import Form from "./form/Form.svelte";
  import ButtonLogin from "./buttons/ButtonLogin.svelte";
  import ButtonLoginGoogle from "./buttons/ButtonLoginGoogle.svelte";
</script>

<div>
  <ButtonLoginGoogle />
  <h4>o...</h4>
  <Form />
  <ButtonLogin />
</div>

<style>
  div {
    padding: 32px;
  }
</style>
