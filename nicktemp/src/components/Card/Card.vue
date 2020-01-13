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
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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