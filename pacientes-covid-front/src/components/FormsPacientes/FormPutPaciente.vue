<template>
  <section id="main">
    <h1>Alterar Paciente</h1>
    <form id="formAddPaciente" autocomplete="off">
      <div class="form-group row">
        <label class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-form-label" for="idPaciente"
          >Id:</label
        >
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <select
            id="idPaciente"
            class="form-control-sm form-control form-control-lg"
          >
            <option v-for="(paciente, index) in pacientes" :key="index"
            :value="paciente.id">
              {{ index + 1 }}: {{ paciente.nome }}
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
          >
            <option value="::Selecionar::">::Selecionar::</option>
            <option value="Positivo">Positivo</option>
            <option value="Negativo">Negativo</option>
          </select>
        </div>
      </div>
      <button class="btn btn-success" @click="putPaciente($event)">Adicionar</button>
    </form>
  </section>
</template>

<script>
import state from '@/store/state.js';
import actions from '@/store/actions';


export default {
  name: "FormPutPaciente",
  data(){
    return{
      pacientes: state.pacientes,
    };
  },
  methods: {
    putPaciente(event){
      event.preventDefault();
      const newPaciente = {
        id: document.getElementById('idPaciente').value, 
        nome: document.getElementById('nomePaciente').value,
        idade: document.getElementById('idadePaciente').value,
        resultado: document.getElementById('resultadoPaciente').value,
      }

      actions.putPaciente(newPaciente.id, newPaciente);
      this.clearForm()
    },
    clearForm() {
      document.getElementById('idPaciente').value = '';
      document.getElementById('nomePaciente').value = '';
      document.getElementById('idadePaciente').value = '';
      document.getElementById('resultadoPaciente').value = '::Selecionar::';
    },
  },
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
