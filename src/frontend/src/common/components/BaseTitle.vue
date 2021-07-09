<script>
export default {
  name: "BaseTitle",
  functional: true,
  props: {
    level: {
      type: String,
      default: () => "1",
    },
    isSmallSize: {
      type: Boolean,
      default: () => false,
    },
    classes: {
      type: String,
      default: () => "",
    },
  },
  render(createElement, context) {
    return createElement(
      "h" + context.props.level,
      {
        class: `title title--${context.props.isSmallSize ? "small" : "big"} ${
          context.props.classes
        }`,
      },
      context.children
    );
  },
};
</script>

<style lang="scss" scoped>
.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}
</style>
