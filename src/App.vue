<template>
  <div>
    <el-row v-for="(condition,index) in conditionSelector" :key="index">
      <el-col :span="2" :offset="1">{{condition.description}}</el-col>
      <el-col :span="20">
        <eFormItem :condition='condition'></eFormItem>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eFormItem from './eFormItem';

let res = {};
res.data = [
  {
    description: '满多少元',
    tpl: '满-{"param":"begin"}-至-{"param":"end"}-元',
    params: {
      begin: {
        control_type: 'number',
      },
      end: {
        control_type: 'number',
      },
    },
  },
  {
    description: '几率',
    tpl: '{"param":"odds"}',
    params: {
      odds: {
        control_type: 'text',
      },
    },
  },
  {
    description: '状态',
    tpl: '{"param":"status"}',
    params: {
      status: {
        control_type: 'select',
        data: [
          {
            status: '',
            text: '全部',
          },
          {
            status: 0,
            text: '停用',
          },
          {
            status: 1,
            text: '启用',
          },
        ],
      },
    },
  },
];

export default {
  components: {
    eFormItem,
  },
  data() {
    return {
      conditionSelector: res.data,
    };
  },
};
</script>
<style lang="scss">
.warpper {
  &.el-textarea,
  &.el-input {
    width: 20%;
  }
}
</style>
