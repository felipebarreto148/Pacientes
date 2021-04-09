<template>
  <div id="main">
    <div id="content">
      <div id="items">
        <h1>
          Pacientes
        </h1>
        <div class="buttons">
          <button @click="isAdd = false; isPut = false" class="btn btn-info">Home</button>
          <button @click="isAdd = true; isPut = false" class="btn btn-info">Adicionar</button>
          <button @click="isPut = true; isAdd = false" class="btn btn-info">Alterar</button>
        </div>
      </div>
    </div>
    <TablePacientes v-if="!isAdd && !isPut" />
    <FormAddPaciente v-if="isAdd" />
    <FormPutPaciente v-if="isPut" />
  </div>
</template>

<script>
import TablePacientes from "@/components/TablePacientes/TablePacientes.vue";
import FormAddPaciente from "@/components/FormsPacientes/FormAddPaciente.vue";
import FormPutPaciente from "@/components/FormsPacientes/FormPutPaciente.vue";

export default {
  name: "PageHome",
  components: {
    TablePacientes,
    FormAddPaciente,
    FormPutPaciente
  },
  data() {
    return {
      isAdd: false,
      isPut: false,
    }
  }
};
</script>

<style lang="scss">
div#main {
  height: 100vh;
  width: calc(100vw - (100vw - 100%));

  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 992px) {
    // >=lg
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}

div#content {
  background: #282a36;
  max-height: 80px;
  color: white;
  box-shadow: 0 5px 10px 0 rgb(0, 0, 0 / 15%);

  @media only screen and (max-width: 768px) {
    max-height: 120px;
  }

  @media only screen and (min-width: 992px) {
    // >=lg
    min-height: 100vh;

    display: flex;
    justify-items: center;
    align-items: center;
    padding: 8px;
  }
}

div#items {
  flex-grow: 1;
  padding: 1rem;

  @media only screen and (max-width: 992px) {
    // <=lg
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    // <=lg
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

div#items h1 {
  font-size: 1.5rem;
  line-height: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 12px;

  @media only screen and (max-width: 992px) {
    // <=lg
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    padding: 12px;
  }
}
</style>
