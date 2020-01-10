<template>
  <nav class="columns Menu-Superior">
    <div class="column is-2">
      <i class="fas fa-search IcoMenu"></i>
    </div>
    <div class="column is-8">
      <a :class="MenuEstaSelecionado(1)" @click="trocaMenu(1)">Blog</a>
      <a :class="MenuEstaSelecionado(2)" @click="trocaMenu(2)">Questions</a>
      <a :class="MenuEstaSelecionado(3)" @click="trocaMenu(3)">Companies</a>
      <a :class="MenuEstaSelecionado(4)" @click="trocaMenu(4)">Contact</a>
    </div>
    <div class="column is-2">
      <span class="fas fa-cogs IcoMenu"></span>
      <span class="fas fa-envelope-open-text IcoMenu"></span>
      <span class="fas fa-sign-out-alt IcoMenu"></span>
    </div>
  </nav>
</template>
<script>
export default {

  data(){
    return{
      mypage: 1,
    }
  },
  methods:{
    MenuEstaSelecionado(PaginaParaVerificar){
      if(this.mypage == PaginaParaVerificar){
        return "MenuNav MenuNavSelected"
      }
      return "MenuNav"
    },
    trocaMenu(NovaPagina){
      this.mypage = NovaPagina
    }
  }
};
</script>
<style lang="stylus">
  @import './BarraSuperior.styl'
  @import '../../assets/styl/Colors.styl';
</style>
