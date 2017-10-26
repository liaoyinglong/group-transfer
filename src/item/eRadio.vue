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
      <el-radio-group value={attrs.value} on-input={this.handle} {...{ attrs }}>
        {data.map(val => {
          return (
            <el-radio key={val.status} label={val.status} disabled={val.disabled}>
              {val.text}
            </el-radio>
          );
        })}
      </el-radio-group>
    );
  },
};
</script>
