<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <base-title>Конструктор пиццы</base-title>
        <div class="content__dough">
          <builder-dough-selector :pizza-type-dough="pizzaTypeDough" />
        </div>

        <div class="content__diameter">
          <builder-size-selector :pizza-sizes="pizzaSizes" />
        </div>

        <div class="content__ingridients">
          <builder-ingredients-selector
            :pizza-sauces="pizzaSauces"
            :pizza-ingredients="pizzaIngredients"
          />
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

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
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
// Static
import pizza from "@/static/pizza.json";

// Helpers
import {
  normalizePizzaTypeDough,
  normalizePizzaIngredients,
  normalizePizzaSizes,
  normalizePizzaSauces,
} from "../common/helpers";
import BaseTitle from "../common/components/BaseTitle";
import BuilderDoughSelector from "../modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "../modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector";

export default {
  name: "IndexHone",
  components: {
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
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
    };
  },
};
</script>

<style lang="scss"></style>
