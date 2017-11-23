# 基于饿了么封装的树形表格

## props

### ec-tree-table

| 参数        | 说明             | 类型    | 可选值 | 默认值   |
| ----------- | ---------------- | ------- | ------ | -------- |
| dataSource  | 数据源           | Array   | -      | -        |
| expandedAll | 是否默认展开全部 | Boolean | -      | false    |
| childrenKey | 子级 list 的 key | String  | -      | children |
| childrenKey | 子级 list 的 key | String  | -      | children |

以及`el-table` 90% 的 props

### ec-tree-table-column

| 参数        | 说明                       | 类型    | 可选值 | 默认值 |
| ----------- | -------------------------- | ------- | ------ | ------ |
| alignColumn | 子级数据是否与父级数据对齐 | Boolean | -      | false  |

以及`el-table-column` 90% 的 props

## events

暂时派发 events

## slot

与饿了么表格一样的 slot ps:slot 的里面的事件需要阻止冒泡！！！

## 用法示例，代码直接 copy 过去就行

```html
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
```

```javascript
export default {
  data() {
    return {
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
    handleClickButton(row) {
      console.log(row);
    },
  },
};
```
