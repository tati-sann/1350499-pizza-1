<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <base-title>Конструктор пиццы</base-title>
      <div class="content__dough">
        <builder-dough-selector
          :pizza-type-dough="pizzaSetting.pizzaTypeDough"
          @setDoughType="setDoughType"
        />
      </div>

      <div class="content__diameter">
        <builder-size-selector :pizza-sizes="pizzaSetting.pizzaSizes" />
      </div>

      <div class="content__ingridients">
        <builder-ingredients-selector
          :pizza-sauces="pizzaSetting.pizzaSauces"
          :pizza-ingredients="pizzaSetting.pizzaIngredients"
          @setIngredientValue="setIngredientValue"
        />
      </div>

      <div class="content__pizza">
        <base-text-input
          v-model="pizzaForm.name"
          placeholder="Введите название пиццы"
          label="Название пиццы"
        />

        <div class="content__constructor">
          <builder-pizza
            :dough="pizzaForm.doughType"
            :sauces="pizzaForm.sauces"
          />
        </div>

        <div class="content__result">
          <p>Итого: 0 ₽</p>
          <base-button disabled> Готовьте! </base-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// Components
import BaseTitle from "../../common/components/BaseTitle";
import BaseButton from "../../common/components/BaseButton";
import BaseTextInput from "../../common/components/BaseTextInput";

import BuilderSizeSelector from "./components/BuilderSizeSelector";
import BuilderDoughSelector from "./components/builderDough/BuilderDoughSelector";
import BuilderIngredientsSelector from "./components/builderIngredients/BuilderIngredientsSelector";
import BuilderPizza from "./components/BuilderPizza";

export default {
  name: "Builder",
  components: {
    BaseTitle,
    BaseButton,
    BaseTextInput,
    BuilderSizeSelector,
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderPizza,
  },
  props: {
    pizzaSetting: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pizzaForm: {
        name: "",
        doughType: "large",
        sauces: "tomato",
        ingredients: [],
      },
    };
  },
  methods: {
    setDoughType(doughType) {
      this.pizzaForm.doughType = doughType;
    },
    setSauces(sauces) {
      this.pizzaForm.sauces = sauces;
    },
    setIngredientValue(IngredientValue) {
      console.log(IngredientValue);
    },
  },
};
</script>

<style scoped></style>
