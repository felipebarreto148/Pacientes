<template>
  <section class="container">
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <RowsPacientes
          v-for="(paciente, index) in pacientesList"
          :key="index"
          :id="parseInt(paciente.id) + 1"
          :nome="paciente.nome"
          :idade="paciente.idade"
          :resultadoTeste="paciente.resultado"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import actions from "@/store/actions";
import state from "@/store/state";
import getters from "@/store/getters";
import RowsPacientes from "./RowsPacientes/RowsPacientes.vue";

export default {
  name: "TablePacientes",
  components: {
    RowsPacientes
  },
  data() {
    return {
      pacientes: state.pacientes
    };
  },
  methods: {
    async getPacientes() {
      await actions.getPacientes();
    }
  },
  computed: {
    pacientesList() {
      return getters.pacientesInfo;
    }
  },
  created() {
    this.getPacientes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin-top: 0;

  @media only screen and (max-width: 992px) {
    margin-top: 10px;

  }
}
</style>
