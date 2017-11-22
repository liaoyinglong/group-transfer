<template>
  <el-table-column :label="label" :key="label">
    <template scope="scope">
      <span v-for="(space, levelIndex) in scope.row._level" :key="levelIndex" class="ec-table_space"></span>
      <span v-if='scope.row.needIcon && columnNeedIcon'>
        <i class="el-icon-caret-right" :class="{'expanded-icon':scope.row._expanded}"></i>
      </span>
      <span v-else class="ec-table_space"></span>
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
