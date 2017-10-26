<template>
  <div>
    <el-card>
      <span v-for="(item,index) in parseTpl" :key="index">
        <template v-if='typeof item === "string" && item !== ""'>&nbsp;&nbsp;{{item}}&nbsp;&nbsp;</template>
        <template v-if='typeof item === "object"'>
          <wrapper :type='params[item.param].type' v-model='params[item.param].input'></wrapper>
        </template>
      </span>
      <br>
    </el-card>

    <!-- <wrapper v-for="(item,index) in testData" :key="index" :type='item.type' v-model="item.input"></wrapper> -->
  </div>
</template>

<script>
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

import wrapper from './wrapper';

const params = {
  begin: { type: 'number' },
  end: { type: 'text' },
};

export default {
  components: {
    wrapper,
  },
  data() {
    return {
      tpl: '',
      params,
    };
  },
  computed: {
    parseTpl() {
      let temp = this.tpl.split('-').map(val => {
        try {
          return JSON.parse(val);
        } catch (error) {
          return val;
        }
      });
      return temp;
    },
  },
  async created() {
    await sleep(2000);
    this.tpl = '满-{"param":"begin"}-至-{"param":"end"}-元';
  },
  methods: {
    test(val) {
      console.log(val);
    },
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
