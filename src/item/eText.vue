<script>
import props from './props';
import handle from './handle';
export default {
  mixins: [handle],
  props,
  render(h) {
    const attrs = this.$props;
    return <el-input {...{ attrs }} on-input={this.handle} />;
  },
};
</script>
