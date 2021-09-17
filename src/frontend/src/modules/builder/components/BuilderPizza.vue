<template>
  <div
    class="pizza"
    :class="`pizza--foundation--${dough === 'large' ? 'big' : 'small'}-${
      sauces === 'tomato' ? 'tomato' : 'creamy'
    }`"
  >
    <div class="pizza__wrapper">
      <div
        class="pizza__filling"
        v-for="n in ing"
        :key="n.nameEng"
        :class="`pizza__filling--${n.nameEng} pizza__filling--${test(n.value)}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderPizza",
  props: {
    dough: {
      type: String,
      required: true,
    },
    sauces: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },

  computed: {
    ing: function () {
      console.log(this.ingredients.filter((item) => item.value > 0));
      return this.ingredients.filter((item) => item.value > 0);
    },
  },

  methods: {
    test(val) {
      switch (val) {
        case 2:
          return `second`;
        case 3:
          return `third`;
      }
    },
  },
};
</script>

<style scoped></style>
