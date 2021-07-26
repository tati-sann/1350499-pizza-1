<template>
  <button
    type="button"
    class="counter__button"
    :class="[
      isPlus ? 'counter__button--plus' : 'counter__button--minus',
      { 'counter__button--disabled': isDisabled },
    ]"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <span class="visually-hidden">
      {{ isPlus ? "Больше" : "Меньше" }}
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseCounterButton",
  props: {
    isPlus: {
      type: Boolean,
      default: () => false,
    },
    isDisabled: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped></style>
