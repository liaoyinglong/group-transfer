<template>
  <el-table :data="formatedData" @row-click="_handleClickRow" :row-style="_tiggerRowVisible">
    <el-table-column label=" " v-show="false" width="1"></el-table-column>
    <slot></slot>
  </el-table>
</template>
<script>
import { treeToArray } from './utils';
export default {
  name: 'EcTable',
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    expandedAll: {
      type: Boolean,
      default: false,
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
  },
  data() {
    return {
      formatedData: [],
    };
  },
  created() {
    this.formatedData = treeToArray(this.dataSource, this.expandedAll, this.childrenKey);
  },
  methods: {
    // 展开 行
    _handleClickRow(row) {
      console.log(row);
      if (row[this.childrenKey]) {
        row._expanded = !row._expanded;
      }
    },
    _tiggerRowVisible(row, index) {
      let show = row._parent ? row._parent._expanded && row._parent._show : true;
      row._show = show;
      return show ? '' : 'display:none;';
    },
  },
};
</script>
