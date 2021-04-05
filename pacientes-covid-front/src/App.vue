<template>
  <div id="app">
    <Header />
    <main id="body">
      <section id="buttons">
        <RowButtons />
      </section>
      <section id="pacientes">
        <TablePacientes />
      </section>
    </main>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import TablePacientes from './components/TablePacientes/TablePacientes.vue';
import RowButtons from './components/RowButtons/RowButtons.vue';

export default {
  name: 'App',
  components: {
    Header,
    TablePacientes,
    RowButtons,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  justify-content: center;

  background: #383a59;
  width: 100vw;
  min-height: 100vh;
}

main#body{
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
}
section#buttons{
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
}

section#pacientes{
  width: 500px;
  height: 350px;
  background: #e2e2e2;
}

::-webkit-scrollbar {
    display: none;
}
</style>
