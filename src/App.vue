<template>
  <div>
    <wrapper type='text' v-model="value1" :maxlength='5' /> <hr>
    <wrapper type='number' v-model="value2" :maxlength='5'></wrapper> <hr>
    <wrapper type='textarea' v-model="value3"></wrapper> <hr>
    <!-- <wrapper type='datetime' v-model="value4"></wrapper> <hr> -->
    <!-- <wrapper type='select' :data='arr' @input="val=>value5=val" :value='value5'></wrapper> <hr> -->
    <wrapper type='select' :data='arr' v-model='value5'></wrapper> <hr>
    <!-- <wrapper type='radio'></wrapper> <hr> -->
    <wrapper type='checkbox' v-model="value8" :data='arr'></wrapper> <hr>
  </div>
</template>

<script>
import wrapper from './wrapper';
export default {
  components: {
    wrapper,
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: 'Tue Oct 24 2017 17:28:51 GMT+0800 (中国标准时间)',
      value5: 0,
      value6: '',
      value7: '',
      value8: [],
      arr: [{ status: '', text: '全部' }, { status: 0, text: '停用' }, { status: 1, text: '启用' }],
    };
  },
  methods: {
    test(val) {
      console.log(val);
    },
  },
};
</script>
