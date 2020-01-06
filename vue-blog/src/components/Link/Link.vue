<template>
  <router-link :to="rota">
    <slot>
        
    </slot>
    {{UrlPara}}
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
      rota: {
          type: String,
          default: "/"
      },
  },
  data: () => {
    return {

    };
  },
  methods: {}
};
</script>


<style scoped lang="stylus">
@import url('./Link.stylus');
</style>
