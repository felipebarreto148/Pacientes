<template>
  <tr :class="{'table-active': active}"
  @click="active == false ? active = true : active = false"
  @dblclick="deletePaciente(id)">
    <th>{{ id }}</th>
    <th>{{ nome }}</th>
    <th>{{ idade }}</th>
    <th>{{ resultadoTeste }}</th>
  </tr>
</template>

<script>
import actions from '@/store/actions.js';

export default {
  name: 'RowPaciente',
  props: [
    'id',
    'nome',
    'idade',
    'resultadoTeste',
  ],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    async deletePaciente(param) {
      const id = Number(param) - 1;
      await actions.deletePacientes(id);
      await actions.getPacientes();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  th{
    cursor: pointer;
  }
</style>
