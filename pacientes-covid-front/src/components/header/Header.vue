<template>
  <header>
    <nav class="container">
      <div>
        <h1>Pacientes</h1>
      </div>
      <div>
        <router-link class="btn btn-light" to="/">Home</router-link>
        <router-link class="btn btn-success" to="/adicionarPaciente">Adicionar Paciente</router-link>
        <router-link class="btn btn-primary disabled" to="/alterarPaciente">Alterar Paciente</router-link>
        <router-view></router-view>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background: #563d7c;
  width: 100vw;
  height: 5rem;
  box-shadow: 0px 5px 10px rgba(122, 120, 120, 0.77);
  color: #ffb86c;
  position: fixed;
  z-index: 1;
}

header > nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
}
header nav div:last-child {
  display: flex;
  gap: 2rem;
}
</style>
