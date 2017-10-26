export default {
  methods: {
    handle(value) {
      this.$emit('input', value);
    },
  },
};
