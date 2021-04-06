<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="items" scope="col">#</th>
        <th class="items" scope="col">Nome</th>
        <th class="items" scope="col">Idade</th>
        <th class="items" scope="col">Resultado</th>
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
</template>

<script>
import actions from '../../store/actions';
import state from '../../store/state';
import getters from '../../store/getters';
import RowsPacientes from './RowsPacientes/RowsPacientes.vue';

export default {
  name: 'TablePacientes',
  components: {
    RowsPacientes,
  },
  data() {
    return {
      pacientes: state.pacientes,
    };
  },
  methods: {
    async getPacientes() {
      await actions.getPacientes();
    },
  },
  computed: {
    pacientesList() {
      return getters.pacientesInfo;
    }
  },
  created(){
    this.getPacientes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
