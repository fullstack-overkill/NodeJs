<template>
  <div class="home">
      <div class="row">
    <Posts/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts/Posts.vue';

export default {
  name: 'home',
  components: {
    Posts,
  }
}
</script>
