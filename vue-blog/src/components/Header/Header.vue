<template>
  <div class="container">
    <header class="Header_Principal row container">
      <div class="col-sm-1">
      </div>
      <div class="col-sm-2">
        <img class="Header_logo" :src="LogoJavaSript" alt="Logo java script" />
      </div>
      <div class="col-sm-1">
      </div>
      <div class="col-sm-6">
        <ul class="Header_Paginas">
          <LinkRota rota="/">
            <li :class="PaginaDestaque(1)" v-on:click="MudaPagina(1)">Home</li>
          </LinkRota>
          <LinkRota rota="/about">
            <li :class="PaginaDestaque(2)" v-on:click="MudaPagina(2)">Lore</li>
          </LinkRota>
          <LinkRota rota="/about">
            <li :class="PaginaDestaque(3)" v-on:click="MudaPagina(3)">Lore</li>
          </LinkRota>
          <LinkRota rota="/about">
            <li :class="PaginaDestaque(4)" v-on:click="MudaPagina(4)">Lore</li>
          </LinkRota>
        </ul>
      </div>
      <div class="col-2">
        <div class="Heade_icons">
          <a
            class="Link_destaque_external"
            href="https://github.com/fullstack-overkill"
            target="_blank"
          >
            <GithubLogo />
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import LogoJavaSript from "@/assets/img/LogoJavaSript.png";
//import TwitterLogo from "@/assets/img/twitterLogo.vue";
import GithubLogo from "@/assets/img/GithubLogo.vue";
import LinkRota from '@/components/Link/Link.vue';

export default {
  name: "Header",
  components: {
    //TwitterLogo,
    GithubLogo,
    LinkRota
  },
  props: {
    PaginaAtual: Number,
    MudaPagina: Function
  },
  data: () => {
    return {
      LogoJavaSript: LogoJavaSript,
      PaginaAtual: 1
    };
  },
  methods: {
    PaginaDestaque(Pagina) {
      let PaginaSelecionada = this.PaginaAtual;
      switch (Pagina) {
        case PaginaSelecionada:
          return "MenuDestaque";

        default:
          return "MenuDesfoque";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import './Header.stylus';
</style>
