<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="IMGSImulador" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-info is-size-6">Nullam ut sapien</p>
        </div>
      </div>
      <div class="content has-text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br />
        <hr class="navbar-divider" />
        <div class="columns">
          <div class="column is-6">
            Followers
            <br />
            <div class="has-text-link is-size-2">112</div>
          </div>
          <div class="column is-6">
            <br />
            <button class="button is-rounded">Rounded</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IMGSImulador from "@/assets/img/simulador.jpg";

export default {
  name: "Card",
  data() {
    return {
      IMGSImulador
    };
  },
  components: {}
};
</script>

<style lang="stylus"></style>