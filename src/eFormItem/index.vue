<template>
  <div>
    <span v-for="(item,index) in parseTpl" :key="index">
      <template v-if='typeof item === "string" && item !== ""'>&nbsp;&nbsp;{{item}}&nbsp;&nbsp;</template>
      <template v-if='typeof item === "object"'>
        <wrapper
        :type='condition.params[item.param].control_type'
        :data='condition.params[item.param].data'
        v-model='condition.params[item.param].input'></wrapper>
      </template>
    </span>
    <br>
  </div>
</template>

<script>
import wrapper from './wrapper';

export default {
  props: ['condition'],
  components: {
    wrapper,
  },
  computed: {
    parseTpl() {
      let temp = this.condition.tpl.split('-').map(val => {
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
