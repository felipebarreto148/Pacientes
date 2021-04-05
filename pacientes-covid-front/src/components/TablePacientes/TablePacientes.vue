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
        v-for="(paciente, index) in pacientes"
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
import axios from 'axios';
import RowsPacientes from './RowsPacientes/RowsPacientes.vue';

export default {
  name: 'TablePacientes',
  components: {
    RowsPacientes,
  },
  data() {
    return {
      pacientes: [],
    };
  },
  methods: {
    async getPacientes() {
      await axios.get('http://localhost:3000/pacientes')
        .then((res) => {
          // console.log(res?.data?.pacientes);
          this.pacientes = res?.data?.pacientes;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.getPacientes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
