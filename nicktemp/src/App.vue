<template>
  <div id="app">
    <div class="columns caixa">
      <div class="column is-2 caixa">
        <div class="LeftBar"></div>
      </div>
      <div class="column is-10 caixa">
        <BarraSuperior/>
        <div class="ContainerPagina">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarraSuperior from '@/components/BarraSuperior/BarraSuperior.vue'

export default {

  components:{
    BarraSuperior,
  }

};
</script>
<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
