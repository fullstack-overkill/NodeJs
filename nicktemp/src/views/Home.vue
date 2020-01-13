<template>
  <div class="columns">
    <div class="column is-12">
      <CaixaSeguir />
      <div class="has-text-grey-darker has-text-left is-size-4">About</div>
      <br />
      <div class="AboutAlingt">
        <div class="box CaixaAbout padding-40px width 300px alingt">
          <div class="has-text-grey-darker has-text-centered">Sailed</div>
          <br />
          <div class="has-text-link is-size-2">15</div>
          <br />
          <div class="columns">
            <div class="column is-6">
              Master
              <br />
              <div class="has-text-info is-size-2">3</div>
            </div>
            <div class="column is-6">
              Other Ranks
              <br />
              <div class="has-text-success is-size-2">12</div>
            </div>
          </div>
        </div>
        <div class="box CaixaAbout padding-40px width 300px alingt">
          <div class="has-text-grey-darker has-text-centered">Seatime</div>
          <br />
          <div class="has-text-link is-size-2">103</div>
          <br />
          <div class="columns">
            <div class="column is-6">
              Followers
              <br />
              <div class="has-text-info is-size-2">43</div>
            </div>
            <div class="column is-6">
              Other Ranks
              <br />
              <div class="has-text-success is-size-2">60</div>
            </div>
          </div>
        </div>
        <div class="box CaixaAbout padding-40px width 300px alingt">
          <div class="has-text-grey-darker has-text-centered">Q & A</div>
          <br />
          <div class="has-text-link is-size-2">300 200</div>
          <br />
          <div class="columns">
            <div class="column is-6">
              Followers
              <br />
              <div class="has-text-link is-size-2">50</div>
            </div>
            <div class="column is-6">
              Following
              <br />
              <div class="has-text-link is-size-2">40</div>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-grey-darker has-text-left is-size-4">interest</div>
      <br />
      <div class="box padding-20px columns caixaCards">
        <div class="column is-3 alingt">
          <Card />
        </div>
        <div class="column is-3 alingt">
          <Card />
        </div>
        <div class="column is-3 alingt">
          <Card />
        </div>
      </div>
      <div class="has-text-grey-darker has-text-left is-size-4">Feed</div>
      <br />
      <div class="columns">
        <div class="column is-7"><Feed/></div>

      </div>
    </div>
 
  </div>
</template>

<script>
// @ is an alias to /src
import CaixaSeguir from "@/components/CaixaSeguir/CaixaSeguir.vue";
import Card from "@/components/Card/Card.vue";
import Feed from "@/components/Feed/Feed.vue";


export default {
  name: "home",
  components: {
    CaixaSeguir,
    Card,
    Feed
  }
};
</script>
