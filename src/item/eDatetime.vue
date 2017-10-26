<script>
import props from './props';
export default {
  props,
  render(h) {
    const attrs = this.$props;
    const { type } = this;
    return <el-date-picker {...{ attrs }} value={attrs.value} on-input={this.tiemChange} />;
  },
  methods: {
    tiemChange(time) {
      this.$emit('change', time);
    },
  },
};
</script>
