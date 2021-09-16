<template>
  <div
    class="pizza"
    :class="`pizza--foundation--${dough === 'large' ? 'big' : 'small'}-${
      sauces === 'tomato' ? 'tomato' : 'creamy'
    }`"
  >
    <div class="pizza__wrapper">
      <div class="pizza__filling pizza__filling--ananas"></div>
      <div class="pizza__filling pizza__filling--bacon"></div>
      <div class="pizza__filling pizza__filling--cheddar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderPizza",
  props: {
    dough: {
      type: String,
      required: true,
    },
    sauces: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
