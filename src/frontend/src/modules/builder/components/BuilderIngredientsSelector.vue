<template>
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
            <span class="filling" :class="`filling--${ingredient.nameEng}`">
              {{ ingredient.name }}
            </span>
            <base-counter v-model="ingredient.value" />
          </li>
        </ul>
      </div>
    </template>
  </base-sheet>
</template>

<script>
import BaseSheet from "../../../common/components/BaseSheet";
import BaseCounter from "../../../common/components/BaseCounter";
import BaseRadioButton from "../../../common/components/BaseRadioButton";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BaseSheet,
    BaseCounter,
    BaseRadioButton,
  },
  props: {
    pizzaSauces: {
      type: Array,
      required: true,
    },
    pizzaIngredients: {
      type: Array,
      required: true,
    },
    defaultSelectedSauce: {
      type: String,
      default: () => "tomato",
    },
  },
  data() {
    return {
      selectedSauce: this.defaultSelectedSauce,
    };
  },
};
</script>
