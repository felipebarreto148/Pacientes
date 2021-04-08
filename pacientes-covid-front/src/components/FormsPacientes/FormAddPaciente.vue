<template>
  <section id="main">
    <form id="formAddPaciente">
      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="idPaciente">Id:</label>
        <div class="col-sm-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="idPaciente"
            readonly
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="idNome">Nome:</label>
        <div class="col-sm-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="nomePaciente"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="idadePaciente">Idade:</label>
        <div class="col-sm-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="idadePaciente"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-3 col-form-label" for="resultadoPaciente">Resultado:</label>
        <div class="col-sm-9">
          <select id="resultadoPaciente" class="form-control-sm form-control form-control-lg">
            <option value="::Selecionar::">::Selecionar::</option>
            <option value="Positivo">Positivo</option>
            <option value="Negativo">Negativo</option>
          </select>
        </div>
      </div>

      <button class="btn btn-success">Adicionar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "FormAddPaciente"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section#main {
  width: 40vw;
  height: 400px;
  background: #282a36;
  border-radius: 15px;
  color: white;

  align-self: center;
  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
