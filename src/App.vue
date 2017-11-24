<template>
  <div>
    <EcGroupTransfer
      v-model="value"
      :data='json'
      filterable
      @change="handleChange"
      :left-default-checked="['2', '3']"
      :right-default-checked="['4']"
      :button-texts="['到左边', '到右边']"
      :render-content='renderFunc'
    />

  </div>
</template>

<script>
import EcGroupTransfer from './ec-group-transfer';
export default {
  components: { EcGroupTransfer },
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
      value: [],
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
