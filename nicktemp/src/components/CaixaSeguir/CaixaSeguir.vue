<template>
  <div class="box CaixaSeguir">
    <div class="columns">
      <div class="column is-3">
        <img class="UserImagem" :src="ImagemUser" alt="Image" />
        <button class="button is-info is-rounded BotoesSeguir">Follow</button>
        <button class="button is-success is-rounded BotoesSeguir margin-15px">message</button>
      </div>
      <div class="column is-9">
        <div class="TituloDestacado has-text-grey-darker has-text-left">Sanjay Sharma</div>
        <div class="has-text-left has-text-info has-text-weight-semibold">Chief Officer</div>
        <br />
        <div class="has-text-left has-text-grey-dark has-text-weight-semibold">Age: 37</div>
        <div class="has-text-left has-text-grey-dark has-text-weight-semibold">From: Chandigarh</div>
        <div
          class="has-text-left has-text-grey-dark has-text-weight-semibold"
        >Company: Executive ship management pte ltd</div>
        <br />
        <hr class="navbar-divider" />
        <br />
        <div class="columns">
          <div class="column is-2">
            Followers
            <br />
            <div class="has-text-link is-size-2">50</div>
          </div>
          <div class="column is-2">
            Following
            <br />
            <div class="has-text-link is-size-2">40</div>
          </div>
          <div class="column is-2">
            Questions
            <br />
            <div class="has-text-link is-size-2">32</div>
          </div>
          <div class="column is-2">
            Answers
            <br />
            <div class="has-text-link is-size-2">30</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImagemUser from "@/assets/img/AvatarUser.jpg";

export default {
  name: "CaixaSeguir",
  data() {
    return {
      ImagemUser
    };
  },
  components: {}
};
</script>

<style lang="stylus">
@import './CaixaSeguir.styl';
</style>