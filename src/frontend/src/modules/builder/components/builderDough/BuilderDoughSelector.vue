<template>
  <base-sheet content-classes="dough">
    <template #title> Выберите тесто </template>

    <template #content>
      <builder-dough-item
        v-for="type in pizzaTypeDough"
        :key="type.nameEng"
        :type="type"
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
  },

  methods: {
    setDoughType(doughType) {
      this.$emit("setDoughType", doughType);
    },
  },
};
</script>
