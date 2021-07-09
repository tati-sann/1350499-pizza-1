<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
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
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
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
            </div>
          </div>
        </div>

        <div class="content__ingridients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингридиенты
            </h2>

            <div class="sheet__content ingridients">
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
            </div>
          </div>
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

export default {
  name: "IndexHone",
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

<style></style>
