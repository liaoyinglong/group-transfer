<script>
import props from './props';
export default {
  props,
  render(h) {
    const attrs = this.$props;
    const { type } = this;
    return <el-input type={type} {...attrs} on-input={this.handleinput} />;
  },
  methods: {
    handleinput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
