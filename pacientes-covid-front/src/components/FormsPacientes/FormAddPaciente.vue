<template>
  <section id="main" class="container">
    <h1>Adionar paciente</h1>
    <form id="formAddPaciente">
      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idPaciente">Id:</label>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="idPaciente"
            v-model="id"
            readonly
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idNome">Nome:</label>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="nomePaciente"
            v-model="nome"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idadePaciente">Idade:</label>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <input
            class="form-control-sm form-control form-control-lg"
            type="text"
            id="idadePaciente"
            v-model="idade"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="resultadoPaciente">Resultado:</label>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <select
            id="resultadoPaciente"
            class="form-control-sm form-control form-control-lg"
            v-model="resultado"
          >
            <option value="::Selecionar::">::Selecionar::</option>
            <option value="Positivo">Positivo</option>
            <option value="Negativo">Negativo</option>
          </select>
        </div>
      </div>
      <button class="btn btn-success" @click="addPaciente($event)">Adicionar</button>
    </form>
  </section>
</template>

<script>
import actions from "@/store/actions.js";

export default {
  name: "FormAddPaciente",
  data() {
    return {
      id: actions.setIdPaciente() + 1,
      nome: "",
      idade: "",
      resultado: ""
    };
  },
  methods: {
    addPaciente(event) {
      event.preventDefault();
      let data = {
        id: `${actions.setIdPaciente()}`,
        nome: this.nome,
        idade: this.idade,
        resultado: this.resultado
      };

      actions.addPaciente(data);
      this.id += 1;
      this.nome = "";
      this.idade = "";
      this.resultado = "";
      actions.getPacientes();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section#main {
  width: 70vw;
  background: #282a36;
  border-radius: 15px;
  color: white;
  padding: 20px;

  align-self: center;
  justify-self: center;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media only screen and (min-width: 992px) {
    width: 40vw;
  }
}

#formAddPaciente {
  display: flex;
  flex-direction: column;
}
</style>
