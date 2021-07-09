<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <base-title>Конструктор пиццы</base-title>
        <div class="content__dough">
          <base-sheet content-classes="dough">
            <template #title> Выберите тесто </template>

            <template #content>
              <label
                v-for="(type, index) in pizzaTypeDough"
                :key="type.nameEng"
                class="dough__input"
                :class="`dough__input--${type.nameEng}`"
              >
                <input
                  type="radio"
                  name="dought"
                  :value="type.nameEng"
                  class="visually-hidden"
                  :checked="index === 0"
                />
                <b>
                  {{ type.name }}
                </b>
                <span>
                  {{ type.description }}
                </span>
              </label>
            </template>
          </base-sheet>
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

                <label
                  v-for="(sauce, index) in pizzaSauces"
                  :key="sauce.nameEng"
                  class="radio ingridients__input"
                >
                  <input
                    type="radio"
                    name="sauce"
                    :value="sauce.nameEng"
                    :checked="index === 0"
                  />
                  <span>
                    {{ sauce.name }}
                  </span>
                </label>
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

                    <div class="counter counter--orange ingridients__counter">
                      <button
                        type="button"
                        class="
                          counter__button
                          counter__button--disabled
                          counter__button--minus
                        "
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
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

export default {
  name: "IndexHone",
  components: {
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
    };
  },
};
</script>

<style lang="scss"></style>
