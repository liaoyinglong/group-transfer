<template>
  <div>
    <wrapper type='text' v-model="value1" :maxlength='5' /> <hr>
    <wrapper type='number' v-model="value2" :maxlength='5'></wrapper> <hr>
    <wrapper type='textarea' v-model="value3"></wrapper> <hr>
    <wrapper type='datetime' v-model="value4"></wrapper> <hr>
    <wrapper type='select' v-model='value5' :data='arr'></wrapper> <hr>
    <wrapper type='radio' v-model="value7" :data='arr'></wrapper> <hr>
    <wrapper type='checkbox' v-model="value8" :data='arr'></wrapper> <hr>
    <br>
    <br>
    <br>
    <br>
    <wrapper v-for="(item,index) in testData" :key="index" :type='item.type' v-model="item.input"></wrapper>
  </div>
</template>

<script>
import wrapper from './wrapper';
const testData = {
  amount: {
    type: 'number',
    input: '23123',
  },
  nexus: {
    type: 'textarea',
    input: '123131',
  },
};

const str = '满-{param:begin}-至-{param:end}-元';

export default {
  components: {
    wrapper,
  },
  data() {
    return {
      value1: '21231',
      value2: '23131',
      value3: '123131',
      value4: 'Tue Oct 24 2017 17:28:51 GMT+0800 (中国标准时间)',
      value5: 0,
      value6: '',
      value7: '',
      value8: [],
      arr: [{ status: '', text: '全部' }, { status: 0, text: '停用' }, { status: 1, text: '启用' }],
      testData,
    };
  },
  computed: {

  },
  methods: {
    test(val) {
      console.log(val);
    },
  },
};
</script>
