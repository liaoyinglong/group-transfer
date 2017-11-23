<template>
  <el-table :data="formatedData" @row-click="_handleClickRow" :row-style="_tiggerRowVisible" v-bind="$props">
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
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true,
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    context: {},
    showHeader: {
      type: Boolean,
      default: true,
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
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
      if (row[this.childrenKey]) {
        row._expanded = !row._expanded;
      }
    },
    // 切换行的显示隐藏
    _tiggerRowVisible(row, index) {
      let show = row._parent ? row._parent._expanded && row._parent._show : true;
      row._show = show;
      return show ? '' : 'display:none;';
    },
  },
};
</script>
