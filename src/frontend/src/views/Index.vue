<template>
  <app-layout>
    <template #main>
      <builder :pizza-setting="pizzaSetting" />
    </template>
  </app-layout>
</template>

<script>
// Components
import AppLayout from "../layouts/AppLayout";
import Builder from "../modules/builder/Builder";

// Static
import pizza from "@/static/pizza.json";

// Helpers
import {
  normalizePizzaTypeDough,
  normalizePizzaIngredients,
  normalizePizzaSizes,
  normalizePizzaSauces,
} from "../common/helpers";

export default {
  name: "IndexHone",
  components: {
    Builder,
    AppLayout,
  },
  data() {
    return {
      pizza,
      pizzaSetting: {
        pizzaTypeDough: pizza.dough.map((typeDough) =>
          normalizePizzaTypeDough(typeDough)
        ),
        pizzaIngredients: pizza.ingredients.map((ingredient) =>
          normalizePizzaIngredients(ingredient)
        ),
        pizzaSizes: pizza.sizes.map((size) => normalizePizzaSizes(size)),
        pizzaSauces: pizza.sauces.map((sauce) => normalizePizzaSauces(sauce)),
      },
    };
  },
};
</script>

<style lang="scss"></style>
