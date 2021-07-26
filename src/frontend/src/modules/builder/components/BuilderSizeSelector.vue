<template>
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
</template>

<script>
import BaseSheet from "../../../common/components/BaseSheet";

export default {
  name: "BuilderSizeSelector",
  components: {
    BaseSheet,
  },
  props: {
    pizzaSizes: {
      type: Array,
      required: true,
    },
  },
};
</script>
