<template>
  <div class="box columns FeedCaixa">
    <div class="column is-2">
      <img class="MiniFoto" :src="ImagemUser" alt="image" />
    </div>
    <div class="column is-6 ddddddd">
      <div class="dasdasdasd as-text-left DetalhesFeed has-text-info">Capt. Prakash</div>
      <span class="dasdasdasd"> now following you</span>
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