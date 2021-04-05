<template>
  <div>
    <button class="btn btn-danger" @click="getIdPaciente()">Remover</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ButtonRemove',
  methods: {
    getIdPaciente() {
      const pacientes = document.querySelectorAll('.table-active');
      pacientes.forEach((element) => {
        this.removePacientes(element.firstElementChild.textContent);
      });
    },
    async removePacientes(param) {
      const id = Number(param) - 1;
      console.log(id);
      await axios.delete(`http://localhost:3000/pacientes/${id}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
