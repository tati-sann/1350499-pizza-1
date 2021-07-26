<template>
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
</template>

<script>
import BaseSheet from "../../../common/components/BaseSheet";

export default {
  name: "BuilderDoughSelector",
  components: {
    BaseSheet,
  },
  props: {
    pizzaTypeDough: {
      type: Array,
      required: true,
    },
  },
};
</script>
