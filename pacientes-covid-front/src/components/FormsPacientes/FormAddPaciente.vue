<template>
  <form id="formAddPaciente">
    <label for="idPaciente">Id:</label>
    <input type="text" id="idPaciente" readonly />

    <label for="idNome">Nome:</label>
    <input type="text" id="nomePaciente" />

    <label for="idadePaciente">Idade:</label>
    <input type="text" id="idadePaciente" />

    <label for="resultadoPaciente">Resultado:</label>
    <select id="resultadoPaciente">
      <option value="::Selecionar::">::Selecionar::</option>
      <option value="Positivo">Positivo</option>
      <option value="Negativo">Negativo</option>
    </select>

    <button class="btn btn-success">Adicionar</button>
  </form>
</template>

<script>

export default {
  name: 'FormAddPaciente',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
