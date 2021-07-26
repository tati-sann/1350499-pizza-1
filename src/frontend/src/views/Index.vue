<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <base-title>Конструктор пиццы</base-title>
        <div class="content__dough">
          <builder-dough-selector :pizza-type-dough="pizzaTypeDough" />
        </div>

        <div class="content__diameter">
          <base-sheet content-classes="diameter">
            <template #title> Выберите размер </template>

            <template #content>
              <label
                v-for="(size, index) in pizzaSizes"
                :key="size.nameEng"
                class="diameter__input"
                :class="`diameter__input--${size.nameEng}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="size.nameEng"
                  class="visually-hidden"
                  :checked="index === 1"
                />
                <span>
                  {{ size.name }}
                </span>
              </label>
            </template>
          </base-sheet>
        </div>

        <div class="content__ingridients">
          <base-sheet content-classes="ingridients">
            <template #title> Выберите ингридиенты </template>

            <template #content>
              <div class="ingridients__sauce">
                <p>Основной соус:</p>

                <base-radio-button
                  v-for="sauce in pizzaSauces"
                  :key="sauce.nameEng"
                  v-model="selectedSauce"
                  :label="sauce.name"
                  :value="sauce.nameEng"
                  class="ingridients__input"
                />
              </div>

              <div class="ingridients__filling">
                <p>Начинка:</p>

                <ul class="ingridients__list">
                  <li
                    v-for="ingredient in pizzaIngredients"
                    :key="ingredient.nameEng"
                    class="ingridients__item"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.nameEng}`"
                    >
                      {{ ingredient.name }}
                    </span>

                    <base-counter v-model="ingredient.value" />
                  </li>
                </ul>
              </div>
            </template>
          </base-sheet>
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
import BaseSheet from "../common/components/BaseSheet";
import BaseRadioButton from "../common/components/BaseRadioButton";
import BaseCounter from "../common/components/BaseCounter";
import BuilderDoughSelector from "../modules/builder/components/BuilderDoughSelector";

export default {
  name: "IndexHone",
  components: {
    BuilderDoughSelector,
    BaseCounter,
    BaseRadioButton,
    BaseSheet,
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

      selectedSauce: "tomato",
    };
  },
};
</script>

<style lang="scss"></style>
