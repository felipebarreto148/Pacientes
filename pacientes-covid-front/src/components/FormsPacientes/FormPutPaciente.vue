<template>
  <section id="main">
    <h1>Alterar Paciente</h1>
    <form id="formAddPaciente">
      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idPaciente"
          >Id:</label
        >
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <select
            id="resultadoPaciente"
            class="form-control-sm form-control form-control-lg"
            v-model="id"
          >
            <option v-for="(paciente, index) in pacientes" :key="index">
              {{ paciente.nome }}
            </option>
          </select>
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
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idadePaciente"
          >Idade:</label
        >
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
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="resultadoPaciente"
          >Resultado:</label
        >
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
import state from '@/store/state.js';

export default {
  name: "FormPutPaciente",
  data(){
    return{
      pacientes: state.pacientes,
    };
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
