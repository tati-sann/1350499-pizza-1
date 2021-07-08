import pizzaTypeDough from "./enums/pizzaTypeDough";
import pizzaIngredients from "./enums/pizzaIngredients";
import pizzaSizes from "./enums/pizzaSizes";
import pizzaSauces from "./enums/pizzaSauces";

export const normalizePizzaTypeDough = (dough) => {
  return {
    ...dough,
    nameEng: pizzaTypeDough[dough.name],
  };
};

export const normalizePizzaIngredients = (ingredients) => {
  return {
    ...ingredients,
    nameEng: pizzaIngredients[ingredients.name],
  };
};

export const normalizePizzaSizes = (sizes) => {
  return {
    ...sizes,
    nameEng: pizzaSizes[sizes.multiplier],
  };
};

export const normalizePizzaSauces = (sauces) => {
  return {
    ...sauces,
    nameEng: pizzaSauces[sauces.name],
  };
};
