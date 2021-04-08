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


</style>
