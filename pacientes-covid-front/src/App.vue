<template>
  <div id="app">
    <PageHome />
  </div>
</template>

<script>
import PageHome from './components/Pages/PageHome/PageHome.vue';

export default {
  name: 'App',
  components: {
    PageHome,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// main#body{
//   display: flex;
//   align-self: center;
//   align-items: center;
//   flex-direction: column;
// }
// section#buttons{
//   display: flex;
//   justify-content: space-around;
//   margin-bottom: 5px;
// }

// section#pacientes{
//   width: 500px;
//   height: 350px;
//   background: #e2e2e2;
// }
</style>
