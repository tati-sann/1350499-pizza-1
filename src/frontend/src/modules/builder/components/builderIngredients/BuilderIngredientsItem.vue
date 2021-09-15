<template>
  <li class="ingridients__item">
    <span class="filling" :class="`filling--${ingredient.nameEng}`">
      {{ ingredient.name }}
    </span>
    <base-counter v-model="ingredient.value" />
  </li>
</template>

<script>
import BaseCounter from "@/common/components/BaseCounter";

export default {
  name: "BuilderIngredientsItem",
  components: {
    BaseCounter,
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
};
</script>
