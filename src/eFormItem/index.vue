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
  </div>
</template>

<script>
import wrapper from './wrapper';

export default {
  props: ['tpl', 'params'],
  components: {
    wrapper,
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
};
</script>
