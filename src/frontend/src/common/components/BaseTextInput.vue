<template>
  <label class="input">
    <span :class="isShowLabel ? '' : 'visually-hidden'">{{ label }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "BaseTextInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    isShowLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
