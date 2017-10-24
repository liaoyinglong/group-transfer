<script>
import props from './props';
export default {
  props,
  render(h) {
    const attrs = this.$props;
    const { type } = this;
    const arr = [{ status: '', text: '全部' }, { status: 0, text: '停用' }, { status: 1, text: '启用' }];
    const arr2 = [
      { status: 1, status_desc: '启用' },
      { status: 2, status_desc: '注销中' },
      { status: 3, status_desc: '已注销' },
      { status: 4, status_desc: '停用' },
    ];
    return (
      <el-select {...attrs} value={attrs.value}>
        {arr2.map(val => <el-option key={val.status} value={val.status} label={val.text || val.status_desc} />)}
      </el-select>
    );
  },
  methods: {
    tiemChange(time) {
      this.$emit('change', time);
    },
  },
};
</script>
