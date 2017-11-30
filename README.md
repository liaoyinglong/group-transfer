# 公共组件 - 可分组穿梭框

> props 以及 events 无缝对接饿了么 ui 的穿梭框，
>
> http://element-cn.eleme.io/1.4/#/zh-CN/component/transfer

## 预览 http://liaoyinglong.com/group-transfer/dist/

## props 的一点说明

| 参数                | 说明                           | 类型                                        | 可选值 | 默认值 |
| ------------------- | ------------------------------ | ------------------------------------------- | ------ | ------ |
| data                | 数据源                         | array[{ key, label, disabled,children:[] }] | -      | []     |
| props               | 数据源的字段别名               | object{key, label, disabled,children}       | -      | -      |
| render-content      | 自定义数据项渲染函数           | function(h, option)                         | -      | -      |
| disableAll          | 禁用全部选项                   | Boolean                                     | -      | false  |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip | Boolean                                     | -      | false  |

## 代码示例

```html
 <ec-group-transfer
    v-model="value"
    :data='json'
    filterable
    @change="handleChange"
    :left-default-checked="['2', '3']"
    :right-default-checked="['4']"
    :button-texts="['到左边', '到右边']"
    :render-content='renderFunc'
  />
```

```javascript
export default {
  data() {
    return {
      json: [
        {
          label: '渠道名称1',
          key: 'id1',
          children: [
            {
              value: '1',
              key: '1',
              label: '广告位名称1',
            },
            {
              value: '2',
              key: '2',
              label: '广告位名称2',
            },
          ],
        },
        {
          label: '渠道名称2',
          key: 'id2',
          children: [
            {
              value: '3',
              key: '3',
              label: '广告位名称3',
            },
            {
              value: '4',
              key: '4',
              label: '广告位名称4',
            },
          ],
        },
      ],
      value: ['1', '4'],
    };
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    renderFunc(h, option) {
      return (
        <span>
          {option.key} - {option.label}
        </span>
      );
    },
  },
};
```
