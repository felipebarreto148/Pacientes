<template>
  <header>
    <h1>Pacientes</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    background: #282a36;
    width: 100vw;
    height: 5rem;
    box-shadow: 0px 5px 10px rgba(122, 120, 120, 0.77);
    color: #ffb86c;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
