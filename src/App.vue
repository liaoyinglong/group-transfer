<template>
  <div>

    <eFormItem :params='params' :tpl='tpl'></eFormItem>

    <!-- <wrapper v-for="(item,index) in testData" :key="index" :type='item.type' v-model="item.input"></wrapper> -->
  </div>
</template>

<script>
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

import eFormItem from './eFormItem';

const params = {
  begin: { type: 'number' },
  end: { type: 'text' },
};

export default {
  components: {
    eFormItem,
  },
  data() {
    return {
      tpl: '',
      params,
    };
  },

  async created() {
    await sleep(2000);
    this.tpl = '满-{"param":"begin"}-至-{"param":"end"}-元';
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
