<template>
  <div>
    <app-layout-header />

    <main class="content">
      <!--      <router-view />-->
      <slot name="main" />
    </main>
  </div>
</template>

<script>
// Components
import AppLayoutHeader from "./components/AppLayoutHeader";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
  },
};
</script>

<style scoped></style>
