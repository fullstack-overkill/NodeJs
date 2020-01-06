<template>
  <div id="app">
    <div class="col-12">
    <Header :PaginaAtual="PaginaAtual" :MudaPagina="MudaPagina"/>
    </div>
    <div class="col-12">
    <router-view/>
    </div>
  </div>
</template>

<style lang="stylus">

</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => {
    return {
      PaginaAtual: 1,
    };
  },
  methods: {
    MudaPagina(NovaPagina) {
      this.PaginaAtual = NovaPagina;
    }
  }
}
</script>

