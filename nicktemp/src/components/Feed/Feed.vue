<template>
  <div class="box columns">
    <div class="column is-1">
      <img class="MiniFoto" :src="ImagemUser" alt="image" />
    </div>
    <div class="column is-7">
      <div class="has-text-left DetalhesFeed has-text-info">Capt. Prakash</div>
      <div class=""> is now following you</div>
    </div>
    <div class="column is-4">
        <button class="button is-info is-rounded BotoesSeguir">Follow</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImagemUser from "@/assets/img/AvatarUser.jpg";

export default {
  name: "Feed",
  data() {
    return {
      ImagemUser
    };
  },
  components: {}
};
</script>

<style lang="stylus"></style>