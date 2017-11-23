<template>
  <div>
    <ec-tree-table :data-source='dataSource' border>
      <ec-tree-table-column label='姓名' showOverflowTooltip width='500'>
        <template scope="scope">{{scope.row.name}}</template>
      </ec-tree-table-column>
      <ec-tree-table-column label='年龄'>
        <template scope="scope">{{scope.row.age}}</template>
      </ec-tree-table-column>
      <ec-tree-table-column label='性别'>
        <template scope="scope">{{scope.row.sex}}</template>
      </ec-tree-table-column>
    </ec-tree-table>
    <br>
    <br>
    <br>
    <br>
    <ec-tree-table :data-source='json'>
      <ec-tree-table-column label='广告计划' prop='col1' />
      <ec-tree-table-column label='广告' :alignColumn='true' prop='col2' />
      <ec-tree-table-column label='展示' prop='col3' />
      <ec-tree-table-column label='操作'>
        <template scope="scope">
          <el-button type="primary" @click.stop="handleClickButton(scope.row)">明细</el-button>
        </template>
      </ec-tree-table-column>
    </ec-tree-table>
  </div>
</template>

<script>
import EcTreeTable from './ec-tree-table';
import EcTreeTableColumn from './ec-tree-table/ec-tree-table-column';
export default {
  components: {
    EcTreeTable,
    EcTreeTableColumn,
  },
  data() {
    return {
      dataSource: [
        {
          id: 1,
          parentId: 0,
          name: '测试1',
          age: 18,
          sex: '男',
          children: [
            {
              id: 2,
              parentId: 1,
              name: '测试2',
              age: 22,
              sex: '男',
            },
          ],
        },
        {
          id: 3,
          parentId: 0,
          name: '测试3',
          age: 23,
          sex: '女',
          children: [
            {
              id: 4,
              parentId: 3,
              name: '测试4',
              age: 22,
              sex: '男',
            },
            {
              id: 5,
              parentId: 3,
              name: '测试5',
              age: 25,
              sex: '男',
            },
            {
              id: 6,
              parentId: 3,
              name: '测试6',
              age: 26,
              sex: '女',
              children: [
                {
                  id: 7,
                  parentId: 6,
                  name: '测试7',
                  age: 27,
                  sex: '男',
                },
              ],
            },
          ],
        },
        {
          id: 18,
          parentId: 0,
          name: '测试8',
          age: 18,
          sex: '男',
        },
      ],
      json: [
        {
          id: 1,
          col1: '深港澳车展',
          col2: '4个',
          col3: '1500',
          children: [
            { id: 2, col1: '', col2: '深港澳车展开屏', col3: '1500' },
            { id: 3, col1: '', col2: '深港澳车展开屏', col3: '1500' },
            { id: 4, col1: '', col2: '深港澳车展开屏', col3: '1500' },
          ],
        },
        {
          id: 5,
          col1: '深港澳车展2',
          col2: '8个',
          col3: '15001',
          children: [
            { id: 6, col1: '', col2: '深港澳车展开屏2', col3: '1500' },
            { id: 7, col1: '', col2: '深港澳车展开屏2', col3: '1500' },
            { id: 8, col1: '', col2: '深港澳车展开屏2', col3: '1500' },
          ],
        },
      ],
    };
  },
  methods: {
    handleClickButton(scope) {
      console.log(scope);
    },
  },
};
</script>
