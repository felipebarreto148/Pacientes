<template>
  <section id="buttons" class="row">
    <ButtonAdd class="col-xs-12 col-md-3 col-lg-3"/>
    <ButtonRemove class="col-xs-12 col-md-3 col-lg-3"/>
    <ButtonPut class="col-xs-12 col-md-3 col-lg-3"/>
  </section>
</template>

<script>
import ButtonAdd from './Buttons/ButtonAdd.vue';
import ButtonRemove from './Buttons/ButtonRemove.vue';
import ButtonPut from './Buttons/ButtonPut.vue';

export default {
  name: 'RowButtons',
  components: {
    ButtonAdd,
    ButtonRemove,
    ButtonPut,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
