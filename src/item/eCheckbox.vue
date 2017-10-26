<script>
import props from './props';

export default {
  props: {
    ...props,
    props: {
      type: Object,
      default() {
        return {
          value: 'status',
          label: 'text',
        };
      },
    },
  },
  render(h) {
    const attrs = this.$props;
    const { data, props } = this;
    let optionValue;
    let optionLabel;
    return (
      <el-select disabled={attrs.disabled} value={attrs.value} on-input={this.handleChange} {...{ attrs }}>
        {data.map(val => {
          optionValue = val[props.value] || val['status'];
          optionLabel = val[props.label] || val['text'];
          return <el-option key={optionValue} value={optionValue} label={optionLabel} disabled={val.disabled} />;
        })}
      </el-select>
    );
  },
  methods: {
    handleChange(item) {
      this.$emit('change', item);
    },
  },
};
</script>
