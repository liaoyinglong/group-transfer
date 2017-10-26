<script>
import props from './props';
import handle from './handle';
export default {
  mixins: [handle],
  props,
  render(h) {
    const attrs = this.$props;
    const { type } = this;
    return <el-date-picker {...{ attrs }} value={attrs.value} on-input={this.handle} />;
  },
};
</script>
