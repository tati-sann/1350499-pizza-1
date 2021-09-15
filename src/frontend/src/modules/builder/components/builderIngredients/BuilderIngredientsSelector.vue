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
          <builder-ingredients-item
            v-for="ingredient in pizzaIngredients"
            :key="ingredient.nameEng"
            :ingredient="ingredient"
          />
        </ul>
      </div>
    </template>
  </base-sheet>
</template>

<script>
import BaseSheet from "../../../../common/components/BaseSheet";
import BaseRadioButton from "../../../../common/components/BaseRadioButton";
import BuilderIngredientsItem from "./BuilderIngredientsItem";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    BuilderIngredientsItem,
    BaseSheet,
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
      default: "tomato",
    },
  },
  data() {
    return {
      selectedSauce: this.defaultSelectedSauce,
    };
  },
};
</script>
