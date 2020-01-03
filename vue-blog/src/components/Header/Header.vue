<template>
  <div class="container">
    <header class="Header_Principal row">
      <div class="col-sm">
        <img class="Header_logo" :src="LogoJavaSript" alt="Logo java script">
      </div>
      <div class="col-sm dasd">
          <ul class="Header_Paginas">
              <li>Home</li>
              <li>Lore</li>
              <li>Lore</li>
              <li>Lore</li>
          </ul>
          <div :class="PaginaAtual2()">dasdas</div>
      </div>
      <div class="col-">One of three columns</div>
    </header>
  </div>
</template>

<script>
import LogoJavaSript from "@/assets/img/LogoJavaSript.png"
export default {
    name: "HelloWorld",
    data:  () => {
        return {
            LogoJavaSript: LogoJavaSript,
            PaginaAtual: 1,

        }
    },
    props: {
        msg: String
    },
    methods: {
        PaginaAtual2(){
            return "MenuDestaque"
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Header.stylus" lang="stylus"></style>
