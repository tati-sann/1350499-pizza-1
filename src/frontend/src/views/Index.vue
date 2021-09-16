<template>
  <app-layout>
    <template #main>
      <form action="#" method="post">
        <div class="content__wrapper">
          <base-title>Конструктор пиццы</base-title>
          <div class="content__dough">
            <builder-dough-selector
              :pizza-type-dough="pizzaTypeDough"
              @setDoughType="setDoughType"
            />
          </div>

          <div class="content__diameter">
            <builder-size-selector :pizza-sizes="pizzaSizes" />
          </div>

          <div class="content__ingridients">
            <builder-ingredients-selector
              :pizza-sauces="pizzaSauces"
              :pizza-ingredients="pizzaIngredients"
              @setIngredientValue="setIngredientValue"
            />
          </div>

          <div class="content__pizza">
            <base-text-input
              v-model="pizzaName"
              placeholder="Введите название пиццы"
              label="Название пиццы"
            />

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <base-button disabled> Готовьте! </base-button>
            </div>
          </div>
        </div>
      </form>
    </template>
  </app-layout>
</template>

<script>
// Components
import AppLayout from "../layouts/AppLayout";
import BaseTitle from "../common/components/BaseTitle";
import BuilderSizeSelector from "../modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "../modules/builder/components/builderIngredients/BuilderIngredientsSelector";
import BuilderDoughSelector from "../modules/builder/components/builderDough/BuilderDoughSelector";
import BaseTextInput from "../common/components/BaseTextInput";
import BaseButton from "../common/components/BaseButton";

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
    AppLayout,
    BaseButton,
    BaseTextInput,
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BaseTitle,
  },
  data() {
    return {
      pizza,
      pizzaTypeDough: pizza.dough.map((typeDough) =>
        normalizePizzaTypeDough(typeDough)
      ),
      pizzaIngredients: pizza.ingredients.map((ingredient) =>
        normalizePizzaIngredients(ingredient)
      ),
      pizzaSizes: pizza.sizes.map((size) => normalizePizzaSizes(size)),
      pizzaSauces: pizza.sauces.map((sauce) => normalizePizzaSauces(sauce)),
      pizzaName: "",
    };
  },

  methods: {
    setDoughType(doughType) {
      console.log(doughType);
    },
    setIngredientValue(IngredientValue) {
      console.log(IngredientValue);
    },
  },
};
</script>

<style lang="scss"></style>
