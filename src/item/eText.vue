<script>
import props from './props';
export default {
  props,
  render(h) {
    const attrs = this.$props;
    return <el-input {...{ attrs }} on-input={this.handleinput} />;
  },
  methods: {
    handleinput(value) {
      this.$emit('input', value);
    },
  },
};
</script>
