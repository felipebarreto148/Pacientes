<template>
  <main>
    <Header />
    <section class="container" id="tablePacientes">
      <TablePacientes />
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import TablePacientes from "@/components/TablePacientes/TablePacientes.vue";

export default {
  name: "PageHome",
  components: {
    Header,
    TablePacientes
  }
};
</script>

<style lang="scss">
main {
  background: #383a59;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#tablePacientes{
  background: whitesmoke;
  margin: 0;
  padding: 0;
  align-self: center;
}

::-webkit-scrollbar {
  display: none;
}
</style>
