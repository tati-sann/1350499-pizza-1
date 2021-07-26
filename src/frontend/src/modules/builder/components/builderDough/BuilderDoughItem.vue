<template>
  <label class="dough__input" :class="`dough__input--${type.nameEng}`">
    <input
      type="radio"
      name="dought"
      :value="type.nameEng"
      class="visually-hidden"
      :checked="type.nameEng === defaultSelectedType"
      @change="$emit('setDoughType', $event.target.value)"
    />
    <b>
      {{ type.name }}
    </b>
    <span>
      {{ type.description }}
    </span>
  </label>
</template>

<script>
export default {
  name: "BuilderDoughItem",
  props: {
    type: {
      type: Object,
      required: true,
    },
    defaultSelectedType: {
      type: String,
      default: () => "light",
    },
  },
};
</script>
