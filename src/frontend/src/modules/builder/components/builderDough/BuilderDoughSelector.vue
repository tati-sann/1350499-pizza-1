<template>
  <base-sheet content-classes="dough">
    <template #title> Выберите тесто </template>

    <template #content>
      <builder-dough-item
        v-for="type in pizzaTypeDough"
        :key="type.nameEng"
        :type="type"
        :default-selected-type="defaultSelectedType"
        @setDoughType="setDoughType"
      />
    </template>
  </base-sheet>
</template>

<script>
// Components
import BaseSheet from "@/common/components/BaseSheet";
import BuilderDoughItem from "./BuilderDoughItem";

export default {
  name: "BuilderDoughSelector",
  components: {
    BuilderDoughItem,
    BaseSheet,
  },
  props: {
    pizzaTypeDough: {
      type: Array,
      required: true,
    },
    defaultSelectedType: {
      type: String,
      default: "light",
    },
  },

  methods: {
    setDoughType(doughType) {
      this.$emit("setDoughType", doughType);
    },
  },
};
</script>
