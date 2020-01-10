<template>
  <div>
    <div class="LeftBar">
      <div class>
        <div class="column is-12">
          <img class="Avatar-Logo" :src="AvatarDF" />
        </div>
        <div class="column is-12 Titulo">{{Nome}}</div>
        <div class="column is-12 SubTitulo">{{cargo}}</div>
        <div class="column is-12">
          <button class="button is-rounded ButonsTransparendRonded">Update Profile</button>
        </div>
        <div :class="PaginaSelecionada(1)">
          <span class="fas fa-sign-out-alt LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
        </div>
        <div :class="PaginaSelecionada(2)">
          <span class="fas fa-sign-out-alt LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
        </div>
        <div :class="PaginaSelecionada(3)">
          <span class="fas fa-sign-out-alt LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
        </div>
        <div :class="PaginaSelecionada(4)">
          <span class="fas fa-sign-out-alt LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
        </div>
        <div :class="PaginaSelecionada(5)">
          <span class="fas fa-sign-out-alt LeftBarIco"></span>
          <div class="Left-Buton-text">DASHBORD</div>
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
              return "Left-Buton Left-Buton-Selected"
          }
          return "Left-Buton"
      }
  }
};
</script>
<style lang="stylus">
@import './LeftBar.styl';
@import '../../assets/styl/Colors.styl';
</style>
