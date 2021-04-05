<template>
  <div>
    <button type="button" class="btn btn-success" @click="addPaciente()">
      Adicionar
    </button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ButtonAdd',
  methods: {
    addPaciente() {
      const teste = {
        id: '4',
        nome: 'teste',
        idade: '100',
        resultado: 'Negativo',
      };

      axios({
        method: 'post',
        url: 'http://localhost:3000/pacientes',
        data: {
          teste,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
