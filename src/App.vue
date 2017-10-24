<template>
  <div>
    <wrapper type='text' v-model="value1" ></wrapper> <hr>
    <wrapper type='number' v-model="value2"></wrapper> <hr>
    <wrapper type='textarea' v-model="value3"></wrapper> <hr>
    <wrapper type='select'></wrapper> <hr>
    <wrapper type='datetime' v-model="value4"></wrapper> <hr>
    <!-- <wrapper type='radio'></wrapper> <hr> -->
    <!-- <wrapper type='checkbox'></wrapper> <hr> -->
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
      value5: '',
      value6: '',
      value7: '',
      value8: '',
    };
  },
};
</script>
