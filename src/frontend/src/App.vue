<template>
  <div id="app">
    <index-home />
  </div>
</template>

<script>
import IndexHome from "@/views/Index.vue";

export default {
  name: "App",
  components: {
    IndexHome,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
