<template>
  <el-table-column :label="label" :key="label" v-bind="$props">
    <template scope="scope">
      <span v-if='alignColumn'>
        <span v-for="(space, levelIndex) in scope.row._level" :key="levelIndex" class="ec-table_space"></span>
      </span>
      <span v-if='scope.row.needIcon && columnNeedIcon'>
        <i class="el-icon-caret-right" :class="{'expanded-icon':scope.row._expanded}"></i>
      </span>
      <span v-if='prop'>{{scope.row[prop]}}</span>
      <slot v-else :row='scope.row'></slot>
    </template>
  </el-table-column>
</template>
<script>
export default {
  name: 'EcTableColumn',
  props: {
    label: String,
    prop: String,
    alignColumn: {
      type: Boolean,
      default: false,
    },
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [String, Boolean],
      default: false,
    },
    sortMethod: Function,
    resizable: {
      type: Boolean,
      default: true,
    },
    context: {},
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true,
    },
    index: [Number, Function],
  },
  data() {
    return {
      tableId: false,
    };
  },
  computed: {
    columnNeedIcon() {
      return this === this.$parent.$children[1];
    },
  },
};
</script>
<style lang="scss">
.ec-table_space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: 14px;
  height: 14px;
}
.el-icon-caret-right {
  transition: transform 0.3s ease-in-out;
  &.expanded-icon {
    transform: rotate(90deg);
  }
}
</style>
