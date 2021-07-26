<template>
  <label class="radio">
    <input
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="$emit('change', $event.target.value)"
    />
    <span>
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: "BaseRadioButton",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
};
</script>
