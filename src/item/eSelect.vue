<script>
import props from './props';
import handle from './handle';

export default {
  mixins: [handle],
  props: props,
  render(h) {
    const attrs = this.$props;
    const { data, props } = this;
    return (
      <el-select disabled={attrs.disabled} value={attrs.value} on-input={this.handle} {...{ attrs }}>
        {data.map(val => <el-option key={val.status} value={val.status} label={val.text} disabled={val.disabled} />)}
      </el-select>
    );
  },
};
</script>
