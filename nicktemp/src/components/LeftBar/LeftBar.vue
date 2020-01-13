<template>
  <div>
    <div class="LeftBar">
      <div class>
        <div class="column is-12">
          <img class="Avatar-Logo" draggable="false" :src="AvatarDF" />
        </div>
        <div class="column is-12 Titulo">{{Nome}}</div>
        <div class="column is-12 SubTitulo">{{cargo}}</div>
        <div class="column is-12">
          <button class="button is-rounded ButonsTransparendRonded" draggable="false">Update Profile</button>
        </div>
        <div :class="PaginaSelecionada(1)" @click="MudaPagina(1)" draggable="false">
          <span class="fas fa-laptop-code LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
        </div>
        <div :class="PaginaSelecionada(2)" @click="MudaPagina(2)" draggable="false">
          <span class="fas fa-newspaper LeftBarIco"></span>
          <div class="Left-Buton-text">JOBS</div>
        </div>
        <div :class="PaginaSelecionada(3)" @click="MudaPagina(3)" draggable="false">
          <span class="fas fa-scroll LeftBarIco"></span>
          <div class="Left-Buton-text">SEA DOCS</div>
        </div>
        <div :class="PaginaSelecionada(4)" @click="MudaPagina(4)" draggable="false">
          <span class="fas fa-users LeftBarIco"></span>
          <div class="Left-Buton-text">CONNECTIONS</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AvatarDF from "@/assets/img/avatarDF.jpg";

export default {
  data() {
    return {
      mypage: 1,
      AvatarDF: AvatarDF,
      Nome: "Devinder Kumar",
      cargo: "Chief officer"
    };
  },
  methods: {
    PaginaSelecionada(PaginaConsultando){
          if(this.mypage == PaginaConsultando){
              return "Left-Buton Left-Buton-Selected";
          }
          return "Left-Buton";
      },
      MudaPagina(PaginaParaMudar){
        this.mypage = PaginaParaMudar;
      }
  }
};
</script>
<style lang="stylus">
  @import './LeftBar.styl';
  @import '../../assets/styl/Colors.styl';
</style>
