<script>
import props from './props';
import handle from './handle';
export default {
  mixins: [handle],
  props,
  render(h) {
    const attrs = this.$props;
    return <el-input value={attrs.value} {...{ attrs }} on-input={this.handle} />;
  },
};
</script>
