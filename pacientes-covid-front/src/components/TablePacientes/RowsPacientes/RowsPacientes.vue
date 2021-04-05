<template>
  <tr :class="{'table-active': active}"
  @click="active == false ? active = true : active = false">
    <th>{{ id }}</th>
    <th>{{ nome }}</th>
    <th>{{ idade }}</th>
    <th>{{ resultadoTeste }}</th>
  </tr>
</template>

<script>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  th{
    cursor: pointer;
  }
</style>
