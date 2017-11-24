<template>
  <div>
    <ec-group-transfer v-model="value" :data='json' filterable @change="handleChange" :left-default-checked="['2', '3']" :right-default-checked="['4']" :button-texts="['到左边', '到右边']" :render-content='renderFunc' />
    <hr>
    <br>
    <ec-group-transfer v-model="value" :data='data' filterable @change="handleChange" :left-default-checked="['2', '3']" :right-default-checked="['4']" :button-texts="['到左边', '到右边']" :render-content='renderFunc' />
  </div>
</template>

<script>
import EcGroupTransfer from './ec-group-transfer';
export default {
  components: { EcGroupTransfer },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value1: [1, 4],
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
</script>
